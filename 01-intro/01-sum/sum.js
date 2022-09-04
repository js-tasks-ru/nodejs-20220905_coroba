function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError("Неправильный тип данных. Укажите, пожалуйста, числа");
    }
    
    return parseInt(a) + parseInt(b);

}

module.exports = sum;
