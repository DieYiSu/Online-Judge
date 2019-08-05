def fake_bin(x):
    return ''.join('1' if int(c)>=5 else '0' for c in x)