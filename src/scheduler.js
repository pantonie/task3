exports.scheduler = function (input) {
    const rates = require('./rates').genRates;
    const genVariations = require('./variations').variations;
    const searchOptimal = require('./searchOptimal').optimal;
    //const searchOpt = require('./searchOptimal').optimal;
    const output = require('./composeOutput').out;

    var sequences = [], //массив для хранения всех возможных вариантов включения всех приборов, кроме работающих 24 часа
        h24 = 0, //переманная для хранения постоянно включенных приборов
        arr24 = [], //массив идентификаторов, постоянно включенных приборов
        prices, //переменная для хранения массива с тарифами
        optimal; //переменная для хранения схемы оптимального включения приборов


    prices = rates(input.rates);

    //сдлаем массив всех возможных комбинаций включения оборудования
    for (item of input.devices) {
        if (!item.power || !item.duration) {
            throw Error(`Check power or diration for ${item.name} (${item.id}). One or both from this values empty.`)
        }
        if (item.mode || (!item.mode && item.duration != 24)) {
            sequences.push(genVariations(item))
        } else {
            h24 += parseInt(item.power);
            arr24.push({id: item.id, power: item.power});
        }
    }

    optimal = searchOptimal(sequences, h24 ? h24 : 0, prices, input.maxPower); //найдем оптимальную комбинацию фключения электроприборов


    if (!optimal) {
        return ('Sheduling could not be made')
    } else {
        return output(arr24, optimal[1], optimal[0], prices);
    }

};