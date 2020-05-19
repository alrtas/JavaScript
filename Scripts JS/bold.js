            /**
            * Esse script deve estar no parametros de entrada do fluxo, em ações globais.
            * para acessar em qualquer lugar do blip, basta usar  {{n@i}} no inicio e {{n@f}} no final
            **/
            function run() {
                var o = '{{contact.source}}';

                if (o=='0mn.io'){
                    return obj = { 
                        'i': '<b>',
                        'f': '</b>'
                    }
                }
                else if (o=='WhatsApp'){
                    return obj = {
                        'i':'*',
                        'f':'*'
                    }
                }
                else if (o=='Telegram'){
                    return ''
                }
                else if (o=='Messenger'){
                    return ''
                }
                else{
                    return ''
                }
            }
