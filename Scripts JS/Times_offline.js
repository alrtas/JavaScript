var data ='{"type":"application/vnd.lime.collection+json","resource":{"total":19,"itemType":"application/vnd.iris.desk.team+json","items":[{"name":"Telecom HÃ­brido","agentsOnline":0},{"name":"SeguranÃ§a SC","agentsOnline":15},{"name":"Redes HO","agentsOnline":0},{"name":"Porteiros","agentsOnline":7},{"name":"Controle de Acesso SC","agentsOnline":7},{"name":"SeguranÃ§a SC MIBO","agentsOnline":13},{"name":"Controle de Acesso MG","agentsOnline":3},{"name":"SeguranÃ§a MG","agentsOnline":10},{"name":"default","agentsOnline":5},{"name":"SAC","agentsOnline":6},{"name":"SeguranÃ§a SC Senha","agentsOnline":11},{"name":"Redes Fibra","agentsOnline":3},{"name":"Telecom AnalÃ³gico","agentsOnline":4},{"name":"Redes Empresariais","agentsOnline":4},{"name":"Telecom Consumo","agentsOnline":3},{"name":"Conversores","agentsOnline":1},{"name":"OCQI","agentsOnline":4},{"name":"Controle de acesso MG","agentsOnline":2},{"name":"Energia","agentsOnline":1}]},"method":"get","status":"success","id":"abced017458","from":"postmaster@desk.msging.net/#az-iris5","to":"atendentedigitalopcoes@msging.net/!az-iris5-ndal8ig7","metadata":{"#command.uri":"lime://atendentedigitalopcoes@msging.net/teams/agents-online","uber-trace-id":"1cbe9585db8ba54f%3A70b67eb68741de72%3A1cbe9585db8ba54f%3A1"}}';

function run(data){
    var data = JSON.parse(data);

    if (data.resource.total > 0){
      getAgents(data)
      return true;
    }else {
      return false;
    }

}



function getAgents(data){
  var array = data.resource.items;
  var offline = [];
    function confere(item){
      if(item.agentsOnline == 0){
        offline.push(item.name)
      }
    }
  array.forEach(confere)
  console.log(offline)
}


run(data)
