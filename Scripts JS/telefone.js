//Função colocada no padrão do BLIP
//Desenvolvedor: Thiago Alberto da Silva
//Data de publicação:  08/05/2020
//Versão: 1.0.0



//Parametro de entrada, número de telefone em qualquer formato
function run (rawPhone){
    var tel = rawPhone;
    var size = tel.length;
    var newtel ='';
    for (i=0; i<=size; i++){
        if (tel[i] == undefined){ break;}
        var n = tel[i].charCodeAt();
        if( (n > 57 ) || (n < 48) ){
            newtel += tel[i].replace(tel[i],'');
        }else{
            newtel += tel[i];}
    }
    if ((newtel.length) >= 13){
        while((newtel.length) >= 13){newtel= newtel.slice(2)}
    }
    if (newtel[0] == 0){
      newtel =  newtel.substring(1,(newtel.lenght))
    }
// Final do script que faz formatação de qualquer formato de número no padrão DDDNNNNNNNNN (048) 9 96265-0373 -> 48996260373

// Inicio do scrpt que valida se é válido ou não o número
//Tem como retorno TRUE ou FALSE.
          // Retorno TRUE é um celular ou número fixo com DDD válido.
          // Retorno FLASE não é um número valido, nem celular nem fixo.
   var str = newtel;
   const regex = /^([1-9]{2})9[1-9]{1}[0-9]{3}[0-9]{4}$/igm;
   var patt = new RegExp(regex);
   //Valida caso de celular
   if(patt.test(str)){
        return (true) 
   }else{ //Valida caso de telefone fixo
        const regex = /^([1-9]{2})( |)[2-5]{1}[0-9]{3}(|-| )[0-9]{4}$/igm;
        var patt = new RegExp(regex);
        return (patt.test(str)); 
   }
}

//Somente tirar o comentario dessas linhas se quiser testar a função no https://playcode.io ou outro editor online
    //var phone = '(048)99626- 0373';
    //console.log(run(phone))



