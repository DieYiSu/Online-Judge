String.prototype.isUpperCase = function () {
    return this.split('').every(x => x === x.toUpperCase());
}