from sympy import symbols, diff, sympify, latex as sy, Function
from sympy.core import S

def get_derivative_steps(expr, var):
    """Breaks down the derivative into steps with rules used."""
    steps = []
    
    def add_step(description, expression, rule):
        steps.append({
            "step": description,
            "expression": sy(expression),
            "rule": rule
        })

    # Original expression
    add_step("Start with the original function", expr, "Given")

    # Basic differentiation rules
    if expr.is_Add:  # Sum/Difference Rule
        terms = expr.as_ordered_terms()
        add_step("Apply the Sum/Difference Rule: d/dx(f + g) = d/dx(f) + d/dx(g)", 
                expr, "Sum/Difference Rule")
        derivatives = [diff(term, var) for term in terms]
        result = sum(derivatives)
        
    elif expr.is_Mul:  # Product Rule
        factors = expr.as_ordered_factors()
        if len(factors) == 2:
            f, g = factors
            add_step("Apply the Product Rule: d/dx(fg) = f'g + fg'",
                    expr, "Product Rule")
            f_prime = diff(f, var)
            g_prime = diff(g, var)
            result = f_prime * g + f * g_prime
            
    elif expr.is_Pow:  # Power Rule or Chain Rule
        base, exp = expr.as_base_exp()
        if exp.is_Number:  # Power Rule
            add_step(f"Apply the Power Rule: d/dx(x^n) = nx^(n-1)",
                    expr, "Power Rule")
            result = exp * base**(exp - 1)
        else:  # Chain Rule
            add_step("Apply the Chain Rule: d/dx(f(g(x))) = f'(g(x)) * g'(x)",
                    expr, "Chain Rule")
            result = diff(expr, var)

    elif isinstance(expr, Function):  # Common functions (sin, cos, etc.)
        if expr.func == S.Sin:
            add_step("Apply derivative of sine: d/dx(sin(x)) = cos(x)",
                    expr, "Trigonometric Rule")
            result = S.Cos(expr.args[0])
        elif expr.func == S.Cos:
            add_step("Apply derivative of cosine: d/dx(cos(x)) = -sin(x)",
                    expr, "Trigonometric Rule")
            result = -S.Sin(expr.args[0])
        else:
            result = diff(expr, var)
            add_step(f"Apply derivative of {expr.func}", expr, "Function Rule")
    
    else:
        result = diff(expr, var)
        add_step("Apply basic differentiation", expr, "Basic Rule")

    # Final result
    add_step("Final derivative", result, "Result")
    
    return steps