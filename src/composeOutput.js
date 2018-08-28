//данныая функция формирует объект с выходными данными
//на вход пдаются массив приборов, которые работают 24 часа, массив приборов остальных приборов со схемой , которые
exports.out = function(arr24, comb, cost, prices){
    const template = require('./outTmpl').tmpl;

    if (prices.length == 0){
        throw Error('prices could not be empty');
    }
    for (i=0; i<24; i++){
        arr24.forEach(el => {
                template.schedule[i].push(el.id);
                if (!template.consumedEnergy.devices[el.id]){
                    template.consumedEnergy.devices[el.id] = prices[i]*el.power/1000;

                } else {
                    template.consumedEnergy.devices[el.id] += prices[i]*el.power/1000;
                }
            }
        );
        comb.forEach(arr => {
                if(arr[i]>0){
                    template.schedule[i].push(arr[24]);
                    if(!template.consumedEnergy.devices[arr[24]]){
                        template.consumedEnergy.devices[arr[24]] = prices[i]*arr[i]/1000
                    } else {
                        template.consumedEnergy.devices[arr[24]] += prices[i]*arr[i]/1000
                    }
                }

            }
        );
    }
    for (el in template.consumedEnergy.devices){
        template.consumedEnergy.devices[el] = template.consumedEnergy.devices[el].toFixed(3)
    }
    template.consumedEnergy.value = cost.toFixed(3);

    return template;
};