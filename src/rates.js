//данная функция генерирует и возвращает массив из 24 элементов, каждый элемент хранит стоимость киловатт часа для соответствующего часа
//например элемент с индексом 0 хранит цену для промежутка 0-1 часа, элемент с индексом 1, хранит цуне для промежутка 1-2 и т.д

exports.genRates = function (rates) {
    let arr = new Array(24);

    rates.map(rate => {
        if (!rate.value){
            throw Error(`Check rates. Value for interval ${rate.from} - ${rate.to} is empty or 0`)
        }
        if (rate.from <= rate.to) {
            for (let i = rate.from; i < rate.to; i++) {
                arr[i] = rate.value;
            }
        }
        else {
            for (let i = rate.from; i <= 23; i++) {
                arr[i] = rate.value;
            }
            for (let i = 0; i < rate.to; i++) {
                arr[i] = rate.value;
            }
        }
    });
    return arr;
};


