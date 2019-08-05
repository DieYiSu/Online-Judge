def sum_mul(n, m):
    if n <=0 or m <=0 : return 'INVALID'
    else :
        return sum(range(n, m, n))