function getMixedNum(s) {
    let fraction = s.split('/'),
        negative = [],
        quotient = 0,
        remainder = 0,
        gcd = 0;

    // negative : determine the number isn't negative.
    negative[0] = fraction[0].indexOf('-') != -1 ? 1 : 0;
    negative[1] = fraction[1].indexOf('-') != -1 ? 1 : 0;
    fraction = fraction.map(x => Math.abs(Number(x)));

    remainder = fraction[0] % fraction[1];

    if (fraction[1] == 0) throw 'Must raise ZeroDivisionError';
    if (fraction[0] == 0) return '0';
    if (remainder == 0) {
        return negative[0] ^ negative[1] ? `-${(fraction[0] / fraction[1]).toString()}` : `-${(fraction[0] / fraction[1]).toString()}`
    }

    quotient = Math.floor(fraction[0] / fraction[1]);
    fraction[0] -= fraction[1] * quotient;
    gcd = get_gcd(fraction[0], fraction[1])

    if (quotient > 0) {
        return negative[0] ^ negative[1] ? `-${quotient} ${fraction[0]}/${fraction[1]}` : `${quotient} ${fraction[0]}/${fraction[1]}`;
    } else {
        return negative[0] ^ negative[1] ? `-${fraction[0]}/${fraction[1]}` : `${fraction[0]}/${fraction[1]}`;
    }
}

function get_gcd(a, b) {
    if (!b) {
        return a;
    }
    return get_gcd(b, a % b);
}