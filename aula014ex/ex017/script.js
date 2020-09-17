function tabuada() {

    var num = document.getElementById ('txtn')
    var res = document.getElementById ('seltab')

    if (num.value.length == 0) {
        alert ('Digite um Número')
       res.innerHTML = ('Não foi possível gerar tabuada')
    }
    else {
        var n = Number(num.value)
        var cont = 1
        res.innerHTML = ''
        for (cont = 1; cont <= 10; cont++) {
            var iten = document.createElement (`option`)
            iten.text = `${n} x ${cont} = ${n*cont}`
            res.appendChild(iten)
        }
    }

    
}