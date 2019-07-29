function queueTime(customers, n) {
    let processing = [],
        counter = 0;

    if (customers.length == 0) { return 0 };
    while (customers.length != 0) {
        while (processing.length < n) {
            if (customers.length == 0) { break; }
            processing.push(customers.shift());
        }
        while (processing.includes(0) == false) {
            counter++;
            processing = processing.map(x => x -= 1);
        }
        processing = processing.filter(x => x != 0);
    }
    while (processing.length != 0) {
        counter++;
        processing = processing.map(x => x -= 1);
        if (processing.includes(0)) {
            processing = processing.filter(x => x != 0);
        }
    }
    return counter;
}