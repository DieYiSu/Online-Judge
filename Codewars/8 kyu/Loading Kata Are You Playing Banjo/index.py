# remember, f-string is python v3.6.0 feature, don't use f-string on lower python version

def areYouPlayingBanjo(name):
    return f"{name} plays banjo" if name[0].lower() == 'r' else f"{name} does not play banjo"