import re
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sympy import symbols, diff, sympify, latex as sy
from pydantic import BaseModel
from generator import generate_equation  # Import the generator if needed
from steps import get_derivative_steps  # Import from steps.py

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class ExpressionInput(BaseModel):
    expression: str

class GenerateInput(BaseModel):
    rules: list[str]

def preprocess_expression(expr: str) -> str:
    """Converts user input into a SymPy-compatible string."""
    try:
        expr = sy.sympify(expr)
        return expr
    except Exception as e:
        raise ValueError(f"Invalid expression: {str(e)}")

@app.post("/solve")
async def solve_derivative(input: ExpressionInput):
    try:
        x = symbols('x')
        processed_expr = preprocess_expression(input.expression)
        expr = sympify(processed_expr, evaluate=False)
        derivative = diff(expr, x)
        derivative_latex = sy(derivative)
        
        return {"derivative": derivative_latex}
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Invalid expression: {str(e)}")

@app.post("/steps")
async def show_derivative_steps(input: ExpressionInput):
    """Computes the derivative and returns step-by-step breakdown with rules used."""
    try:
        x = symbols('x')
        processed_expr = preprocess_expression(input.expression)
        expr = sympify(processed_expr, evaluate=False)
        
        # Use the imported function
        steps = get_derivative_steps(expr, x)
        
        return {"steps": steps}
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Invalid expression: {str(e)}")

@app.post("/generate")
async def generate_problem(input: GenerateInput):
    try:
        equation, derivative_latex = generate_equation(input.rules)
        return {"equation": equation, "derivative": derivative_latex}
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Error generating equation: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)