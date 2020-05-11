//Função colocada no padrão do BLIP
//Desenvolvedor: Thiago Alberto da Silva
//Data de publicação:  11/05/2020
//Versão: 1.0.0


//3 parametros de entrada, o número e a quantidade de casas, caso seja maior, corta na quantidade de casas
//Caso seja menor, adiciona zeros na frente
//Parametro de incremento define o que vai ser na frente
//Validação se é número ou texto na variavel string deve ser feita pelo proprio BLIP.
//Tem como retorno diretamente a string formatada
function run(string, numero, incremento){ 
    var casas = numero;
    var str = string;
    var inc = incremento;
    var zero = '';
    var i = 0;
  
      if(str.length < casas){
        var n = casas -  str.length;
          while (i<n){
            zero = zero.concat(inc);
            i++;
          }
      }else if(str.length == casas){return (str);
      }else{return (str.slice(0,casas));}
  
  return(zero+str);
  }
  //Somente tirar o comentario dessas linhas se quiser testar a função no https://playcode.io ou outro editor online
  //console.log(run('1',3,0))