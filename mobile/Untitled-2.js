// Try edit message

let numeroProtocolo = '12345678910123456789'
const protocolo = {
  parte1: numeroProtocolo.substring(0,5),
  parte2: numeroProtocolo.substring(6,8),
  parte3: numeroProtocolo.substring(9,11),
  parte4: numeroProtocolo.substring(12,13),
  parte5: numeroProtocolo.substring(14,19), 
} 




console.log(protocolo.parte1 + ' - ' + protocolo.parte2 
+ ' - ' + protocolo.parte3 + ' - ' + protocolo.parte4
+ ' - ' + protocolo.parte5)