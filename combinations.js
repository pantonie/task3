//данная функция формирует все возможные комбинации включения всех электроприборов (за исключнием работающих постоянно)
//на вход подается массив массивов, каждый внутренний массив хранит все разрешенные варианты включения одного электроприбора


exports.combinations = function(arrs){
    var arr = [],
        max = arrs.length-1;
    function recursion(r, i){
        for (let j=0, l=arrs[i].length; j<l; j++){
            let a = r.slice(0);
            a.push(arrs[i][j]);
            if (i == max) {
                arr.push(a)
            } else {
                recursion(a, i+1)
            }
        }
    }
    recursion([], 0);
    return arr;
};