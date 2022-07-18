const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('burglar', () => {
  console.log('call the household member!');
  setTimeout(()=>{
  console.log('Emergency!');
},3000);
});
myEmitter.emit('event');
console.log("the script is running")
myEmitter.emit('burglar');