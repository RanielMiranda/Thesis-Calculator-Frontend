import logging
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sympy import symbols, sympify, latex
from pydantic import BaseModel
from derivative_ast import compute_derivative_ast
from derivative_dag import compute_derivative_dag
# Placeholder for NLL (not implemented)
# from nll_solver import compute_derivative_nll
from generator import generate_equation

# Configure logging
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class ExpressionInput(BaseModel):
    expression: str
    data_structure: str  # Options: "AST", "DAG", "NLL"

class GenerateInput(BaseModel):
    rules: list[str]

def preprocess_expression(expr: str):
    """Converts user input into a SymPy-compatible string."""
    try:
        expr = sympify(expr, evaluate=False)
        return expr
    except Exception as e:
        raise ValueError(f"Invalid expression: {str(e)}")

@app.post("/solve")
async def solve_derivative(input: ExpressionInput):
    """Computes the derivative using the specified data structure and returns step-by-step solution."""
    try:
        x = symbols('x')
        processed_expr = preprocess_expression(input.expression)
        
        # Select computation method based on data structure
        if input.data_structure == "AST":
            result = compute_derivative_ast(processed_expr, x)
        elif input.data_structure == "DAG":
            result = compute_derivative_dag(processed_expr, x)
        elif input.data_structure == "NLL":
            # Placeholder for NLL (not implemented)
            raise HTTPException(status_code=501, detail="Nested Linked Lists not implemented")
        else:
            raise HTTPException(status_code=400, detail="Invalid data structure specified")

        # Extract derivative and steps
        derivative_latex = latex(result["derivative"])
        steps = result["steps"]
        
        logger.debug(f"Expression: {input.expression}")
        logger.debug(f"Data Structure: {input.data_structure}")
        logger.debug(f"Derivative: {derivative_latex}")
        logger.debug(f"Steps: {steps}")
        
        return {
            "derivative": derivative_latex,
            "steps": steps
        }
    except Exception as e:
        logger.error(f"Error: {str(e)}")
        raise HTTPException(status_code=400, detail=f"Invalid expression or processing error: {str(e)}")

@app.post("/generate")
async def generate_problem(input: GenerateInput):
    """Generates a problem based on specified rules."""
    try:
        equation, derivative_latex = generate_equation(input.rules)
        return {"equation": equation, "derivative": derivative_latex}
    except Exception as e:
        logger.error(f"Error generating equation: {str(e)}")
        raise HTTPException(status_code=400, detail=f"Error generating equation: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000, reload=True)