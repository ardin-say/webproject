const socket = io('http://localhost:8000');

const form = document.getElementById('ss');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector(".container");messageInput

const name = prompt("Enter Your Name To Join");

socket.emit('new-user-joined',name);