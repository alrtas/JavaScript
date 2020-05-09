//Desenvolvedor: Thiago Alberto da Silva
//Data de publicação: 08/05/2020
//Versão: 1.0.0


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

//Trocar a palavra "hora_minuto_separado" por "run"
//Retorna objeto json com campo status, TRUE ou FALSE e campo telefone, com o telefone já formatado.
          // status = TRUE é um celular ou número fixo com DDD válido.
          // status =  FLASE não é um número valido, nem celular nem fixo.
function hora_minuto_separado(variavel1, variavel2){

}

//Trocar a palavra "hora_minuto_junto" por "run"
//Retorna objeto json com campo status, TRUE ou FALSE e campo telefone, com o telefone já formatado.
          // status = TRUE é um celular ou número fixo com DDD válido.
          // status =  FLASE não é um número valido, nem celular nem fixo.
function hora_minuto_junto(variavel){

}
