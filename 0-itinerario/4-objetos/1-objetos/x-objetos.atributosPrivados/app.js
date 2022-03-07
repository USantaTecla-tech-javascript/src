const { Console } = require("./console");

const console = new Console();
var Counter = (function() {
    var privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
    return {
      increment: function() {
        changeBy(1);
      },
      decrement: function() {
        changeBy(-1);
      },
      value: function() {
        return privateCounter;
      }
    }
  })();
  
  alert(Counter.value()); /* Muestra 0 */
  Counter.increment();
  Counter.increment();
  alert(Counter.value()); /* Muestra 2 */
  Counter.decrement();
  alert(Counter.value()); /* Muestra 1 */ 