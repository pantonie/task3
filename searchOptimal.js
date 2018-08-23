//данная функция подсчитывает итоговую стоимость по всем приборам для каждой возможной комбиинации и
//возвращает массив, первый элемент, которого - итоговая стоимость, второй - оптимальная комбинация
//входные параметры all - массив со всеми возможными комбинациями включения приборов,
//h24 - суммарная мощность приборов, которые работают круглосуточно
//price - массив с почасовой раскладкой цен
//maxPower - максимальная нагрузка, чтобы исключить варинаты с перегрузкой сети

exports.optimal = function (all, h24, price, maxPower) {
    var summ = 0, scheduling, exceed;
    //console.log(maxPower);
    all.forEach(comb => {
        //console.log(comb)
        let arr = new Array(24).fill(0);
        let money = 0;
        exceed = 0;
        comb.forEach(c => {
            for (let i = 0; i < 24; i++) {
                c[i] ? arr[i] += c[i] : arr[i];// получим мощность
            }
        });
        for (let i = 0; i < 24; i++) {
            arr[i] += h24;
            if (arr[i] > maxPower) {
                exceed = 1;
            }
        }
        if (!exceed) {
            for (let i = 0; i < 24; i++) {
                money += (arr[i] ? arr[i] : 0) * price[i];
            }
            if (!summ) {
                summ = money;
                scheduling = comb;
            } else if (money < summ) {
                summ = money;
                scheduling = comb;
            }
        }
    });

    if (!scheduling) {
        return null
    } else {
        return ([summ / 1000, scheduling]);
    }
}