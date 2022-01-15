var btn = document.querySelector('.btn');
var code = document.querySelector('.code');
var input = document.querySelector('.input');

btn.addEventListener("click",generate);
function generate() {
    var data = input.nodeValue;
    var url = 'http://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data}';
    code.src = url;
}