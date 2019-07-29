function high(str) {
    let max = [],
        counter,
        previous = 0;
    arr = str.split(' ');
    max[0] = arr[0];
    for (str_elem of arr) {
        counter = 0;
        for (elem of str_elem.split('')) {
            counter += elem.charCodeAt(0) - 96;
        }
        if (counter > previous) {
            max[0] = str_elem
            previous = counter;
        } else if (counter == previous) {
            max.push(str_elem);
            previous = counter;
        }
    }
    return max[0];
}