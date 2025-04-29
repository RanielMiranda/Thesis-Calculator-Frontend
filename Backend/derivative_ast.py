import logging
from sympy import diff, latex, Add, Mul, Pow, sin, cos, tan, sec, csc, cot, exp, ln, log, cosh, sinh, tanh, sech, csch, coth
from sympy.core.expr import Expr


def compute_derivative_ast(expr: Expr, var):
    # Configure logging
    logging.basicConfig(level=logging.DEBUG)
    logger = logging.getLogger(__name__)

    """Computes derivative using AST traversal with SymPy's diff and returns step-by-step process."""
    steps = []

    # Mapping of SymPy functions to differentiation rules
    rule_map = {
        Add: {"name": "Sum Rule", "description": "d/dx(f + g) = f' + g'"},
        Mul: {"name": "Product Rule", "description": "d/dx(f * g) = f' * g + f * g'"},
        Pow: {"name": "Power Rule", "description": "d/dx(x^n) = n * x^(n-1)"},
        sin: {"name": "Sine Rule", "description": "d/dx(sin(u)) = cos(u) * u'"},
        cos: {"name": "Cosine Rule", "description": "d/dx(cos(u)) = -sin(u) * u'"},
        tan: {"name": "Tangent Rule", "description": "d/dx(tan(u)) = (1 + tan(u)^2) * u'"},
        sec: {"name": "Secant Rule", "description": "d/dx(sec(u)) = sec(u) * tan(u) * u'"},
        csc: {"name": "Cosecant Rule", "description": "d/dx(csc(u)) = -csc(u) * cot(u) * u'"},
        cot: {"name": "Cotangent Rule", "description": "d/dx(cot(u)) = -csc(u) * cot(u) * u'"},
        exp: {"name": "Exponential Rule", "description": "d/dx(e^u) = e^u * u'"},
        ln: {"name": "Logarithm Rule", "description": "d/dx(ln(u)) = u' / u"},
        log: {"name": "Logarithm Rule", "description": "d/dx(log(u)) = u' / u"},
        cosh: {"name": "Hyperbolic Cosine Rule", "description": "d/dx(cosh(u)) = sinh(u) * u'"},
        sinh: {"name": "Hyperbolic Sine Rule", "description": "d/dx(sinh(u)) = cosh(u) * u'"},
        tanh: {"name": "Hyperbolic Tangent Rule", "description": "d/dx(tanh(u)) = (1 - tanh(u)^2) * u'"},
        sech: {"name": "Hyperbolic Secant Rule", "description": "d/dx(sech(u)) = sech(u) * tanh(u) * u'"},
        csch: {"name": "Hyperbolic Cosecant Rule", "description": "d/dx(csch(u)) = -csch(u) * coth(u) * u'"},
        coth: {"name": "Hyperbolic Cotangent Rule", "description": "d/dx(coth(u)) = -csch(u) * coth(u) * u'"},
    }

    def traverse_and_differentiate(node, depth=0):
        """Traverses AST, applies rules, and uses SymPy's diff for differentiation."""
        step = {"expression": latex(node), "rule": None, "result": None}

        # Handle constants and variables
        if node.is_Atom:
            if node == var:
                step["rule"] = "Variable Rule: d/dx(x) = 1"
                step["result"] = latex(1)
                steps.append(step)
                return 1
            else:
                step["rule"] = "Constant Rule: d/dx(c) = 0"
                step["result"] = latex(0)
                steps.append(step)
                return 0

        # Handle known operations
        node_func = node.func
        if node_func in rule_map:
            rule = rule_map[node_func]
            step["rule"] = rule["description"]
        
        logger.debug(f"Node: {node}, Rule: {step['rule']}")
        # Fallback for unsupported nodes
        result = diff(node, var)
        step["rule"] = "General Differentiation (via SymPy)"
        step["result"] = latex(result)
        steps.append(step)
        return result

    derivative = traverse_and_differentiate(expr)
    return {
        "derivative": derivative,
        "steps": steps
    }