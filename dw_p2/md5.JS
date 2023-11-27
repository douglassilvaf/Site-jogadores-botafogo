// Inclua a biblioteca crypto-js diretamente de um CDN
document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.js"><\/script>');

// Defina a função md5 no escopo global
function md5(value) {
  return CryptoJS.MD5(value).toString();
}
