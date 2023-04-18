function carregar(){
    var msg = document.querySelector("#msg")
    var img = document.querySelector("#img")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `agora sao ${hora} horas`

    if(hora >= 0 && hora < 12){
        img.src = 'transferir.jpg'
        documento.body.style.background = '#D9A171'

    }else if( hora >= 13 && hora < 18){
        img.src = 'Final_de_tarde_no_paraiso!.png'
        document.body.style.background = '#732002'

    }else if(hora >= 19 && hora < 23 ){
        img.src = 'transferir(1).jpg'
        document.body.style.background = 'black'

    }
}