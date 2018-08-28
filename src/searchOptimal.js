//данная функция формирует все возможные комбинации включения всех электроприборов (за исключнием работающих постоянно)
//на вход подается массив массивов, каждый внутренний массив хранит все разрешенные варианты включения одного электроприбора
//Когда найдена очередная комбинация включения всех электроприборов функция getCost подсчитывает итоговую стоимость по всем приборам или null,
// если в какой-то промежуток превышена максимальная мощность
//входные параметры a - массив с комбинацией включения приборов,
//h24 - суммарная мощность приборов, которые работают круглосуточно
//price - массив с почасовой раскладкой цен
//maxPower - максимальная нагрузка, чтобы исключить варинаты с перегрузкой сети

exports.optimal = function(arrs, h24, prices, maxPower){
    const getCost = require('./getCost').getcost;
    var arr = [],
        max = arrs.length-1,
        money = '';


    function recursion(r, i){
        for (let j=0, l=arrs[i].length; j<l; j++){
            let a = r.slice(0);
            let cost = 0;
            a.push(arrs[i][j]);
            if (i == max) {
                //тут нужно проверить массив на оптимальность
                cost = getCost(a, h24, prices, maxPower);
                if (cost){
                    if (!money){
                        money = cost;
                        arr = a;
                    } else {
                        if (cost < money){
                            money = cost;
                            arr = a;
                        }
                    }
                }
            } else {
                recursion(a, i+1)
            }
        }
    }
    if (arrs.length === 0){
        cost = getCost([], h24, prices, maxPower);
        if(cost){
            money = cost;
        }
     } else {
        recursion([], 0);
    }
    if (arr) {
        return ([money / 1000, arr])
    } else {
        return ([money / 1000, []])
    }
};