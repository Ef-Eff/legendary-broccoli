var connection = new WebSocket('ws://localhost:8001');

connection.onmessage = function (event) {
  document.querySelector('#but').innerHTML = event.data + ' time';
};



function kek() {
  document.querySelector('#but').innerHTML = 'kek';
}

function websocket() {
  connection.send(Math.floor(Math.random()*10));
}
