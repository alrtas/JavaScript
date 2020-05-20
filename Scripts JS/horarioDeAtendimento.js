/*  Função colocada no padrão do BLIP
*   Desenvolvedor: Thiago Alberto da Silva
*   Data de publicação:  20/05/2020
*   Versão: 1.0.0
*
*   Configurar variaveis workDays, endDate, startDate, saturdayEndDate previamente
*   em configurações globais como o seguinte exemplo
*/


var workDays = '{{config.workDays}}';                 //'1,2,3,4,5,6';
var endDate = '{{config.endDate}}';                   //'20:00';
var startDate = '{{config.startDate}}';               //'08:00';
var saturdayEndDate = '{{config.saturdayEndDate}}';   // '17:00';

let timezone_hours = 3;
let timezone_month = 1;



function nowDate(){
  var now = new Date()  
  var day = now.getUTCDate();
  var minute = now.getUTCMinutes();
  var year = now.getUTCFullYear();
  var month = now.getUTCMonth();
  var hour = now.getUTCHours();
  var weekDay = now.getDay();
  month = month+timezone_month; //Conversão necessária pois UTC trabalha de 0-11 e não 1-12
  hour = hour-timezone_hours; //Conversão necessária para timezone de brasilia

 return obj = {
     'diaS'   : weekDay,
     'diaM'   : day,
     'mes'    : month,
     'ano'    : year,
     'hora'   : hour,
     'minuto' : minute
  }
}


function run(){
  var horaInicio = startDate.slice(0,2);
  var minutoInicio = startDate.slice(3,5);
    if (nowDate().diaS === 6){
      var horaFinal = saturdayEndDate.slice(0,2)
      var minutoFinal = saturdayEndDate.slice(3,5)
    }else{
      var horaFinal = endDate.slice(0,2)
      var minutoFinal = endDate.slice(3,5)
    }


    if ( nowDate().diaS === 0){
      return obj = {
        'atendimento' : false,
        'hora' : nowDate().hora
      }
    }else{
          if (nowDate().hora < horaInicio && nowDate().minuto < minutoInicio){
            return obj = {
              'atendimento' : false,
              'hora' : nowDate().hora
            }
          }else if (nowDate().hora >= horaFinal && nowDate().minuto >= minutoFinal){
            return obj = {
              'atendimento' : false,
              'hora' : nowDate().hora
            }
          }else{
            return obj = {
              'atendimento' : true,
              'hora' : nowDate().hora
            }
          }
    }
}

//Somente retirar o comentario para testes como no https://playcode.io/
//console.log(run())


