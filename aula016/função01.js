function parimpar(n) {
    if (n%2 == 0) {
        return `PAR !`
    }
    else {
        return `IMPAR !`
    }
}

var res = parimpar(540)
console.log(`O valor é ${res}`)