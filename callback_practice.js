window.setTimeout(function() {
  alert('HAMMERTIME');
}, 5000);

function hammerTime(time) {
  window.setTimeout(function() {
    alert(`${time} is hammertime`);
  });
}

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

reader.question("Would you like some tea?", function(response) {
  console.log(`You replied: ${response}!`);
  reader.close();
});
