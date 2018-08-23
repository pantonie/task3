# Описание решения задания

Исходный код разбит на несколько функций, каждая из которых находится в отдельном файле. В коде каждого модуля есть комментарии для облегчения понимая работы алгоритма.

В целом алгоритм работает следующим образом:

1. Сначала формируется массив цен из 24 элементов. Каждый элемент соответсвует одному часу в сутках. Значение элемента массива представляет собой стомость соответствующего часа.
1. Далее для каждого прибора из входных данных мы проверяем следующие условия:
    1. Наличие мощности и продолжительности работы, если один из параметров не указан, программа генерирует ошибку.
    1. Если прибор не должен работать 24 часа, для него генерируется массив, в котором содержатся все возможные варианты включения прибора. Этот массив сохраняется в массив всех приборов.
    1. Если прибор работает 24 часа, мы считаем общую мощность всех таких приборов и сохраняем id  и мощность в отдельном массиве.
1. После того как у нас есть большой массив, в котором хранятся массивы со всеми возможными вариантами включения каждого из приборов, мы передаем этот массив в рекурсивную функцию, которая создает все возможные комбинации включений приборов. На выходе получаем огромный массив, который потребляет больше всего памяти.
(можно было бы проверять на данном шаге, что каждая комбинация не превышает максимальную мощность в каждый час в сутках. Это увеличило бы время работы, но, возможно, сократило бы потребление памяти)
1. Затем передаем супер массив из предыдущего пункта вместе с данными о тарифах, максимальной нагрузкой на сеть и приборах, которые работают 24 часа в функцию, которая находит оптимальную по стоимости комбинацию включения приборов. Эта функция возвращает искомую комбинацию, суммарную стоимость или null, если все варианты включения приборов превышают допустимую нагрузку.
1. Последним пунктом мы формируем вывод из найденной в предыдущем пункте комбинации. На этом этапе также подсчитывается стоимость для каждого прибора.


