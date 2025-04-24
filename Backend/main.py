import logging
import re
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sympy import symbols, diff, sympify, latex
from pydantic import BaseModel
from generator import generate_equation  # Import the generator if needed
from steps import get_derivative_steps  # Import from steps.py
from database import Rule, get_db, database

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

class GenerateInput(BaseModel):
    rules: list[str]

def preprocess_expression(expr: str) -> str:
    """Converts user input into a SymPy-compatible string."""
    try:
        expr = sympify(expr)
        return expr
    except Exception as e:
        raise ValueError(f"Invalid expression: {str(e)}")

@app.post("/solve")
async def solve_derivative(input: ExpressionInput):
    # Computes the derivative of the input expression and returns the result.
    try:
        x = symbols('x')
        processed_expr = preprocess_expression(input.expression)
        expr = sympify(processed_expr, evaluate=False)
        # Compute the derivative
        derivative = diff(expr, x)
        derivative_latex = latex(derivative)
        
        # Log debugging info
        logger.debug(f"Expression: {input.expression}")
        logger.debug(f"Processed expression: {processed_expr}")
        logger.debug(f"Derivative: {derivative_latex}")
        
        return {"derivative": derivative_latex}
    except Exception as e:
        logger.error(f"Error: {str(e)}")
        raise HTTPException(status_code=400, detail=f"Invalid expression: {str(e)}")

@app.post("/generate")
async def generate_problem(input: GenerateInput):
    try:
        equation, derivative_latex = generate_equation(input.rules)
        return {"equation": equation, "derivative": derivative_latex}
    except Exception as e:
        logger.error(f"Error generating equation: {str(e)}")
        raise HTTPException(status_code=400, detail=f"Error generating equation: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000, reload=True)
