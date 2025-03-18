import re
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware  # Import CORS middleware
from sympy import symbols, diff, sympify, latex, sqrt, sin, cos, tan
from pydantic import BaseModel

app = FastAPI()

# Add CORS middleware here
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # React frontend URL
    allow_methods=["*"],  # Allow all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)

class ExpressionInput(BaseModel):
    expression: str

def preprocess_expression(expr: str) -> str:
    """
    Converts user input into a SymPy-compatible string.
    Examples: '3x^2' → '3*x**2', 'sqrt(x)' → 'sqrt(x)', '1/2x' → '1/2*x'
    """
    expr = expr.strip().lower()  # Normalize input
    
    # Replace ^ with ** for exponents
    expr = expr.replace("^", "**")
    
    # Add multiplication signs where implied
    expr = re.sub(r"(\d)([a-zA-Z(])", r"\1*\2", expr)  # e.g., 3x → 3*x, 2(sqrt(x)) → 2*sqrt(x)
    expr = re.sub(r"([a-zA-Z])(\d|[a-zA-Z(])", r"\1*\2", expr)  # e.g., x2 → x*2, xy → x*y, x(sqrt(x)) → x*sqrt(x)
    
    # Handle fractions (e.g., 1/2x → (1/2)*x)
    expr = re.sub(r"(\d+)/(\d+)([a-zA-Z(])", r"(\1/\2)*\3", expr)  # e.g., 1/2x → (1/2)*x
    
    # Replace common functions with SymPy equivalents (leave as-is for sympify)
    expr = expr.replace("sqrt", "sqrt")  # Already SymPy-compatible
    expr = expr.replace("sin", "sin")
    expr = expr.replace("cos", "cos")
    expr = expr.replace("tan", "tan")
    
    # Add parentheses for clarity in complex expressions
    expr = re.sub(r"(\d+/\d+|\w+)\s*([+\-*/])\s*(\w+|\d+/\d+)", r"(\1) \2 (\3)", expr)  # e.g., 1/2 + x → (1/2) + (x)
    
    return expr

@app.post("/solve")
async def solve_derivative(input: ExpressionInput):
    try:
        x = symbols('x')
        processed_expr = preprocess_expression(input.expression)
        
        # Debugging output
        print(f"Processed Expression: {processed_expr}")

        expr = sympify(processed_expr, evaluate=False)  # Parse into SymPy expression
        
        derivative = diff(expr, x)  # Compute derivative
        derivative_latex = latex(derivative)  # Convert to LaTeX
        
        return {"derivative": derivative_latex}
    except Exception as e:
        print(f"SymPy Error: {str(e)}")  # Log error
        raise HTTPException(status_code=400, detail=f"Invalid expression: {str(e)}")

# Example usage (for testing locally)
if __name__ == "__main__":
    test_inputs = ["3x^2", "sqrt(x)", "1/2x", "sin(x)", "x^2 + 3x", "xy"]
    for inp in test_inputs:
        print(f"Input: {inp}")
        print(f"Processed: {preprocess_expression(inp)}")