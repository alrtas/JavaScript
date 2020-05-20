function run(userSelection,userSelectionSecondLevel){
	
	var selection = userSelection;
	var selectionSecondLevel = userSelectionSecondLevel;
  	var previous = '{{attendatTeam}}'

  if(previous.length <=0 ){
  	if (selection == '1') {
  		if (selectionSecondLevel == '3'){
  			return 'CFTV e Sistema Cloud';
  		}
  		if (selectionSecondLevel == '4'){
  			return 'Linha Mibo';
  		}		
  	}	
  	if ( selection == '2'){
        		if (selectionSecondLevel == '1'){
        			return 'Compras e credenciamento';
        		}
        		if (selectionSecondLevel == '2'){
        			return 'SAC';
        		}
  	}
  	if (selection == '3'){ 
        		if(selectionSecondLevel == '1'){
        			return 'Comunicação condominial';
        		}
        		if (selectionSecondLevel == '2'){
        			return 'Controle de acesso corporativo';
        		}
        		if (selectionSecondLevel == '3'){
        			return 'Fechaduras e porteiros residenciais';
        		}		
  	}
  	if (selection == '4') {
  		return 'Incêndio e Iluminação';
  	}
  	if (selection == '5'){
  		return 'Conversores e Antenas de TV';
  	}
  	if (selection == '6'){
        		if (selectionSecondLevel == '1'){
        			return 'Centrais analógicas';
        		}
        		if (selectionSecondLevel == '2'){
        			return 'Centrais híbridas';
        		}
        		if (selectionSecondLevel == '3'){
        			return 'Telefones e Radiocomunicadores';
        		}	
  	}
  	if (selection == '7'){	
        		if (selectionSecondLevel == '1'){
        			return 'Switches e linha PON';
        		}
        		if (selectionSecondLevel == '2'){
        			return 'Rádios e access Points';
        		}	
        		if (selectionSecondLevel == '3'){
        			return 'Roteadores e adaptadores';
        		}
  	}
  	if (selection == '8'){ 	
  		return 'Alarmes';
  	}
  	if( selection == '9'){
  	  return 'Energia solar, fontes e nobreaks';
  	}
  }
  else{
    return previous;
  }
}
