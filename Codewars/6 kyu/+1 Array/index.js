function upArray(arr) {
    if (arr.some(x => {
        return (x < 0) || (x > 9)
    }) || arr.length == 0) return null;

    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] + 1 == 10) {
            arr[i] = 0;
            if (i == 0) {
                arr.unshift(1)
            }
        } else {
            arr[i]++;
            break;
        }
    }
    return arr
}