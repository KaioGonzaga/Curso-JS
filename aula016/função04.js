function fatorar (n) {
    var fat = 1
    for (c = n; c > 1; c-- ) {
        fat *= c
    }
    return fat
}
var res = fatorar(3)
console.log (`O valor é ${res}`)