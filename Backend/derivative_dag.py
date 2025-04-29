from sympy import diff, latex, Add, Mul, Pow, sin, cos
from sympy.core.expr import Expr
from collections import defaultdict

def compute_derivative_dag(expr: Expr, var):
    """Computes derivative using DAG representation and returns step-by-step process."""
    steps = []
    node_cache = defaultdict(int)  # Tracks node occurrences for DAG
    
    def build_dag(node, cache):
        """Builds DAG by counting node occurrences."""
        if node in cache:
            cache[node] += 1
            return
        cache[node] = 1
        for arg in node.args:
            build_dag(arg, cache)
    
    def differentiate_dag(node, cache, depth=0):
        """Differentiates nodes in DAG, reusing common sub-expressions."""
        step = {"expression": latex(node), "rule": None}
        
        # Skip if already processed (DAG reuse)
        if cache[node] > 1 and node != var:
            step["rule"] = "DAG Reuse: Previously differentiated"
            result = diff(node, var)  # Simplified for example
            step["result"] = latex(result)
            steps.append(step)
            return result
            
        if node.is_Atom:
            if node == var:
                step["rule"] = "Variable Rule"
                step["result"] = latex(1)
                steps.append(step)
                return 1
            else:
                step["rule"] = "Constant Rule"
                step["result"] = latex(0)
                steps.append(step)
                return 0
                
        elif node.func == Pow:
            base, exp = node.args
            if base == var and exp.is_Number:
                step["rule"] = f"Power Rule: d/dx(x^{exp}) = {exp}*x^{exp-1}"
                result = exp * Pow(var, exp - 1)
                step["result"] = latex(result)
                steps.append(step)
                return result
                
        elif node.func == sin:
            arg = node.args[0]
            step["rule"] = "Sine Rule: d/dx(sin(u)) = cos(u) * u'"
            u_prime = differentiate_dag(arg, cache, depth + 1)
            result = cos(arg) * u_prime
            step["result"] = latex(result)
            steps.append(step)
            return result
            
        elif node.func == Add:
            step["rule"] = "Sum Rule: d/dx(f + g) = f' + g'"
            results = [differentiate_dag(arg, cache, depth + 1) for arg in node.args]
            result = sum(results)
            step["result"] = latex(result)
            steps.append(step)
            return result
            
        elif node.func == Mul:
            step["rule"] = "Product Rule: d/dx(f * g) = f' * g + f * g'"
            f, g = node.args
            f_prime = differentiate_dag(f, cache, depth + 1)
            g_prime = differentiate_dag(g, cache, depth + 1)
            result = f_prime * g + f * g_prime
            step["result"] = latex(result)
            steps.append(step)
            return result
            
        else:
            step["rule"] = "General Differentiation"
            result = diff(node, var)
            step["result"] = latex(result)
            steps.append(step)
            return result
    
    # Build DAG
    build_dag(expr, node_cache)
    
    # Compute derivative
    derivative = differentiate_dag(expr, node_cache)
    
    return {
        "derivative": derivative,
        "steps": steps
    }