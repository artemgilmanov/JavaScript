const styles = [
  'color: blue; background-color:lightblue;',
  'color: green; background-color:lightgreen;',
  'color: red; background-color:pink;',
];
const messages = ['🚀 Starting', '✅ Success', '❌ Error'];

messages.forEach((msg, index) => {
  console.log(`%c${msg}`, styles[index]);
});

console.clear();
setTimeout(
  () => console.log('%c🚀 Starting up...', 'color: green; font-size: 16px;'),
  500
);
setTimeout(
  () => console.log('%c⚙️ Initializing...', 'color: blue; font-size: 16px;'),
  1000
);
setTimeout(
  () => console.log('%c✅ Ready!', 'color: orange; font-size: 16px;'),
  1500
);

let blink = true;
const blinkingInterval = setInterval(() => {
  console.clear();
  console.log(
    blink ? '%c🔴 Blinking text' : '%c🟢 Blinking text',
    'font-size: 16px; font-weight: bold;'
  );
  blink = !blink;
}, 500);

setTimeout(() => clearInterval(blinkingInterval), 5000);
