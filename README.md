# Описание решения задания

Исходный код разбит на несколько функций, каждая из которых находится в отдельном файле. В коде каждого модуля есть комментарии для облегчения понимая работы алгоритма.

В целом алгоритм работает следующим образом:

1. Сначала формируется массив цен из 24 элементов. Каждый элемент соответсвует одному часу в сутках. Значение элемента массива представляет собой стомость соответствующего часа.
1. Далее для каждого прибора из входных данных мы проверяем следующие условия:
    1. Наличие мощности и продолжительности работы, если один из параметров не указан, программа генерирует ошибку.
    1. Если прибор не должен работать 24 часа, для него генерируется массив, в котором содержатся все возможные варианты включения прибора. Этот массив сохраняется в массив всех приборов.
    1. Если прибор работает 24 часа, мы считаем общую мощность всех таких приборов и сохраняем id  и мощность в отдельном массиве.
1. После того как у нас есть большой массив, в котором хранятся массивы со всеми возможными вариантами включения каждого из приборов, мы передаем этот массив в рекурсивную функцию, которая создает все возможные комбинации включений приборов и для каждой
проверяет стоимость комбинации, а также превышение максимальной мощности. Функция возсращает оптимальную по стоимости комбинацию. Если все возможные комбинации превышают максимальную можность, фенкция возвращает null.
1. Последним пунктом мы формируем вывод из найденной в предыдущем пункте комбинации. На этом этапе также подсчитывается стоимость для каждого прибора.

# Как организован код

Главная функция scheduler хранится в файле src/scheduler.js и может быть импортирована с помощью require('./src/scheduler').scheduler.
На вход подается массив с данными, аналогичный приложенному к заданию.
В исходном коде имеются комментарии для того, чтобы упростить понимание кода.
В коде проекта также имеются тесты, которые проверяют базовые функции.



