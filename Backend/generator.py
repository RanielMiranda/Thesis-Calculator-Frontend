# generator.py
import random
from sympy import diff, symbols, sympify, latex

# Building blocks for equations
polynomials = ["x", "x**2", "x**3"]
trig = ["sin(x)", "cos(x)", "tan(x)", "sec(x)", "csc(x)", "cot(x)", ""]
inverseTrig = ["arcsin(x)", "arccos(x)", "arctan(x)", "arcsec(x)", "arccsc(x)", "arccot(x)", ""]
exp = ["e^x", "ln(x)"]
functions = polynomials + trig + inverseTrig + exp

def generate_equation(rules):
    """
    Generate a random equation based on selected differentiation rules.
    Args:
        rules (list): List of rules like ["Product Rule", "Chain Rule"]
    Returns:
        tuple: (equation as string, derivative in LaTeX)
    """
    x = symbols("x")
    equation = ""

    if not rules:  # Default to a simple equation if no rules provided
        equation = random.choice(functions)
    elif "Product Rule" in rules and "Chain Rule" in rules:
        f1 = random.choice(functions)
        outer = random.choice(trig)
        inner = random.choice(polynomials)
        equation = f"{f1} * {outer.replace('x', inner)}"  # e.g., x * sin(x**2)
    elif "Product Rule" in rules:
        f1 = random.choice(functions)
        f2 = random.choice(functions)
        equation = f"{f1} * {f2}"  # e.g., x**2 * sin(x)
    elif "Chain Rule" in rules:
        outer = random.choice(trig)
        inner = random.choice(polynomials)
        equation = f"{outer.replace('x', inner)}"  # e.g., sin(x**2)

    # Compute the derivative
    expr = sympify(equation, evaluate=False)
    derivative = diff(expr, x)
    derivative_latex = latex(derivative)

    return equation, derivative_latex

