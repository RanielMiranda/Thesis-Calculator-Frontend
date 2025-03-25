# main.py
import re
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sympy import symbols, diff, sympify, latex
from pydantic import BaseModel
from generator import generate_equation  # Import the generator

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4000"],  # React frontend URL
    allow_methods=["*"],
    allow_headers=["*"],
)

class ExpressionInput(BaseModel):
    expression: str

class GenerateInput(BaseModel):
    rules: list[str]  # e.g., ["Product Rule", "Chain Rule"]

def preprocess_expression(expr: str) -> str:
    """
    Converts user input into a SymPy-compatible string.
    """
    expr = expr.strip().lower()
    expr = expr.replace("^", "**")
    expr = re.sub(r"(\d)([a-zA-Z(])", r"\1*\2", expr)
    expr = re.sub(r"([a-zA-Z])(\d|[a-zA-Z(])", r"\1*\2", expr)
    expr = re.sub(r"(\d+)/(\d+)([a-zA-Z(])", r"(\1/\2)*\3", expr)
    expr = re.sub(r"(\d+/\d+|\w+)\s*([+\-*/])\s*(\w+|\d+/\d+)", r"(\1) \2 (\3)", expr)
    return expr

@app.post("/solve")
async def solve_derivative(input: ExpressionInput):
    try:
        x = symbols('x')
        processed_expr = preprocess_expression(input.expression)
        expr = sympify(processed_expr, evaluate=False)
        derivative = diff(expr, x)
        derivative_latex = latex(derivative)
        return {"derivative": derivative_latex}
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