def expression_matter(a, b, c):
    array = [a + b + c, a * b * c, a *
             (b + c), (a + b) * c, a + b * c, a * b + c]
    return max(array)
