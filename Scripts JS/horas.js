//Desenvolvedor: Thiago Alberto da Silva
//Data de publicação: 11/05/2020
//Versão: 1.0.2


//Trocar a palavra "hora" por "run"
//Retorna objeto json com campo status, TRUE ou FALSE e campo telefone, com o telefone já formatado.
          // status = TRUE é uma hora válida.
          // status = FLASE é uma hora invalida.
function hora(variavel){
    var str = variavel;
    const regex = /^([0-1]?[0-9]|2[0-3])$/img;
    var patt = new RegExp(regex);
    return object = {
        'status' : patt.test(str),
        'hora' : str
    }   
}

//Trocar a palavra "minuto" por "run"
//Retorna objeto json com campo status, TRUE ou FALSE e campo telefone, com o telefone já formatado.
          // status = TRUE é um minuto válida.
          // status = FLASE é um minuto invalido.
function minuto(variavel){
    var str = variavel;
    const regex = /^[0-5][0-9]$/img;
    var patt = new RegExp(regex);
    return object = {
        'status' : patt.test(str),
        'minuto' : str
    }  
}

//Trocar a palavra "minuto" por "run"
//Retorna objeto json com campo status, TRUE ou FALSE e campo telefone, com o telefone já formatado.
          // status = TRUE é um dia válido.
          // status = FLASE é um dia invalido.
function dia(variavel){
    var str = variavel;
    const regex = /^(0[1-9]|[12]\d|3[01])$/img;
    var patt = new RegExp(regex);
        return object = {
            'status' : patt.test(str),
            'dia' : str
        }  
    }

//Trocar a palavra "minuto" por "run"
//Retorna objeto json com campo status, TRUE ou FALSE e campo telefone, com o telefone já formatado.
          // status = TRUE é um mes válida.
          // status = FLASE é um mes invalido.
function mes(variavel){
    var str = variavel;
    const regex = /^(0[1-9]|1[0-2])$/img;
    var patt = new RegExp(regex);
    return object = {
        'status' : patt.test(str),
        'mes' : str
    }  
}


//Trocar a palavra "hora_minuto_separado" por "run"
//Retorna objeto json com campo status, TRUE ou FALSE e campo telefone, com o telefone já formatado.
//Minimo de 1 número por variavel
          // status = TRUE se horas e minutos são validos.
          // status =  FLASE se horas ou minuts não são validos.
function hora_minuto_separado(variavel_hora, variavel_minuto){

    var h = variavel_hora;
    if(h.length<2){h='0'+h;} // trata hora com menos de 2 digitos
    var m = variavel_minuto;
    if(m.length<2){m='0'+m;} // trata minuto com menos de 2 digitos
    const regexH =  /^([0-1]?[0-9]|2[0-3])$/img;
    const regexM =  /^[0-5][0-9]$/img;
    var pattH = new RegExp(regexH);
    var pattM = new RegExp(regexM);
    var statusHora = pattH.test(h);
    var statusMinuto = pattM.test(m);
    // Inicialização de variaveis e validação via regexp de horas e minutos separadamente

    if(statusHora == true && statusMinuto == true){
        return object = {
            'status' : true,
            'hora' : h,
            'minuto' : m,
            'total' : h + ':' + m
        }  
    }else{
        return object = {
            'status' : false,
            'hora' : h,
            'minuto' : m,
            'total' : h + ':' + m
        }  
    }
    //Faz o retorno no formato de objeto em JSON, com minuto, hora, total e o status.
}

//Trocar a palavra "hora_minuto_junto" por "run"
//Deve ter como variavel de entrada uma string com no minimo 3 números(0 adicional vai nas horas).
//Mais que 4 números será cortado a partir do quarto, ordem esquerda para direita.
//Retorna objeto json com campo status, TRUE ou FALSE e campo telefone, com o telefone já formatado.
          // status = TRUE se horas e minutos são validos.
          // status =  FLASE se horas ou minuts não são validos.
function hora_minuto_junto(variavel){
        var str = variavel;
        var size = str.length;
        var newtime = '';
        for (i = 0 ; i <=size ; i++){
            if (str[i] == undefined){ break;}
             var n = str[i].charCodeAt();
             if( (n > 57 ) || (n < 48) ){
                  newtime += str[i].replace(str[i],'');
              }else{
                  newtime += str[i];
                 }
        }
        //Exclui tudo e qualquer coisa que não seja um número 

        if(newtime.length > 4){newtime = newtime.slice(0,4);}
        //Corta mais que 4 números para horas+minutos

        if(newtime.length == 3){newtime = '0'+newtime;}
        //Formata 0 adicional para horas
          
        var h = newtime.slice(0,2);
        var m = newtime.slice(2,4);
        const regexH =  /^([0-1]?[0-9]|2[0-3])$/img;
        const regexM =  /^[0-5][0-9]$/img;
        var pattH = new RegExp(regexH);
        var pattM = new RegExp(regexM);
        var statusHora = pattH.test(h);
        var statusMinuto = pattM.test(m);
        //Separação e validação das variaveis para horas e minutos
    
        if(statusHora == true && statusMinuto == true){
            return object = {
                'status' : true,
                'hora' : h,
                'minuto' : m,
                'total' : h + ':' + m
            }  
        }else{
            return object = {
                'status' : false,
                'hora' : h,
                'minuto' : m,
                'total' : h + ':' + m
            }  
        }
        //Faz o retorno no formato de objeto em JSON, com minuto, hora, total e o status.
    }