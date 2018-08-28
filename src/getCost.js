exports.getcost = function (arr, h24, price, maxPower) {
    let a = new Array(24).fill(0);
    let money = 0;
    exceed = 0;
    arr.forEach(c => {
        for (let i = 0; i < 24; i++) {
            c[i] ? a[i] += c[i] : a[i];// получим мощность для приборов, работающих НЕ 24 часа
        }
    });
    //теперь для каждого часа найдет суммарную мощность
    for (let i = 0; i < 24; i++) {
        a[i] += h24;
        if (a[i] > maxPower) {
            return null;
        }
    }
    //теперь найдем суммарную стоимость включения
    for (let i = 0; i < 24; i++) {
        money += (a[i] ? a[i] : 0) * price[i];
    }
    return money;
};