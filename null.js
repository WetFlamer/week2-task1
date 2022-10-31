/* Значение null записывается литералом null. 
Оно является самостоятельным, а не свойством глобального объекта (как undefined). 
В API, null часто присутствует в местах где ожидается объект, но подходящего объекта нет. */


let ages;
console.log(ages)

const stoneAge = null + 5
console.log(stoneAge)