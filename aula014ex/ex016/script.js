function contar() {

    var ini = document.getElementById ('txti')
    var fim = document.getElementById ('txtf')
    var passo = document.getElementById ('txtp')
    var resp = document.getElementById ('res')
 
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length ==0 ) {
        resp.innerHTML = 'Impossível Contar'
        window.alert ('[ERRO] Digite os dados novamente')
    }
    else {
        resp.innerHTML = 'Contando... <br>'
        var i = Number(txti.value)
        var f = Number(txtf.value)
        var p = Number(txtp.value)
        var end = 0
        if (p <= 0){
            window.alert ('Passo inválido ! Considerando passo 1')
            p = 1
        }
        if (i < f) {
            for (end = i; end <= f; end += p) {
            resp.innerHTML += `${end} \u{1F449}`
            }
        } 
        else {
            for (end = i; end >=f; end -= p) {
                resp.innerHTML += `${end} \u{1F449}`
            }
         }  
         
        }

    
    

}
    