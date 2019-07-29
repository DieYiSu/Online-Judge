function isSortedAndHow(array) {
    let flag = array[0] > array[1] ? 1 : 0;
    if (flag == 1) {
        for (let i = 1; i < array.length; i++) {
            if (array[i - 1] < array[i]) {
                return 'no';
            }
        }
        return "yes, descending";
    } else {
        for (let i = 1; i < array.length; i++) {
            if (array[i - 1] > array[i]) {
                return 'no';
            }
        }
        return "yes, ascending";
    }
}