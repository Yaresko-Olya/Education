//4
//Напишите функцию кеш let complexFunction = function (arg1,arg2) {
// return arg1+arg2; //just for example (any logic can be here) }
// let cachedFunc = cache(complexFunction);
// cachedFunc(‘foo’, ‘bar’) // complexFunction должна выполнится cachedFunc(‘foo’, ‘bar’)
// complexFunction не должна выполняться
// снова,должен вернуться кеш cachedFunc(‘foo’, ‘baz’)
// complexFunction должна выполнится
// потому что метод не вызывался раньше с этими аргументами

let complexFunction = function (arg1,arg2) {
    return arg1 + arg2;
}

function cache(func) {
    let cachedResult = null;
    let cachedArgs = null;

    return function(...args) { // ['foo', 'bar', 1]
        if (!cachedArgs || !cachedArgs.every((val, i) => val === args[i])) {
            cachedResult = func(...args);
            cachedArgs = args;
        }

        return cachedResult;
    }
}
let cachedFunc = cache(complexFunction);

console.log(cachedFunc('foo', 'bar'));
console.log(cachedFunc('foo', 'bar'));
console.log(cachedFunc('foo', 'baz'));

module.exports = cachedFunc;