//данная функция формирует все возможные варианты включения прибора


exports.variations = function (eqip) {
    function reorder(arr, max) {
        for (let i = 24; i < max; i++) {
            if (arr[i]) arr[i - 24] = arr[i];
        }
        return arr.slice(0, 24)
    }

    var variations = new Array;

    //если прибор работает только днем, вставляем интервалы работы прибора с 7 до 21 часа
    if (eqip.mode === 'day') {
        let h = 7;
        while (h < (22 - eqip.duration)) {
            let arr = new Array(24)//.fill(0);
            for (let i = 0; i < eqip.duration; i++) {
                arr[h + i] = eqip.power
            }
            arr[24] = eqip.id;
            variations.push(arr);
            h++;
        }
        //если прибор работает ночью, нужно учесть, что прибор может быть включен после 21, а закончить работу заполночь
        //для этого расширяем массив до 31 элемента и потом переносим элементы с 24 по 31 на места с 0 до 6
    } else if (eqip.mode === 'night') {
        let h = 21;
        while (h < (32 - eqip.duration)) {
            let arr = new Array(24)//.fill(0);
            for (let i = 0; i < eqip.duration; i++) {
                arr[h + i] = eqip.power;
            }
            arr = reorder(arr, 31)
            arr[24] = eqip.id;
            variations.push(arr);
            h++;
        }
        //а вот тут самое инетересное. Если прибор может работать и ночью и днем, на надо учесть все возможные переходы через полночь
        //крайний случай - прибор работает 23 часа в сутки и может быть включен в 23 часа, в этом случае нам надо расширить массив на 22 элемента
        //а затем перенести их, как в предыдущем случае
    } else {
        let h = 0;
        while (h < (47 - eqip.duration)) {
            let arr = new Array(24)//.fill(0);
            for (let i = 0; i < eqip.duration; i++) {
                arr[h + i] = eqip.power;
            }
            arr = reorder(arr, 46);
            arr[24] = eqip.id;
            variations.push(arr);
            h++;
        }
        variations = Array.from(new Set(variations.map(JSON.stringify)), JSON.parse); //исключим повторяющиеся комбинации
    }

    return variations;
};