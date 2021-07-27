const easymidi = require('easymidi');
const Gamecontroller = require('gamecontroller');
const ctrl = new Gamecontroller('cheap-gamecontroller');

ctrl.connect(function() {
  console.log('Game On!');
});

const input = new easymidi.Input('SNES MIDI', true);
const output = new easymidi.Output('SNES MIDI', true);
const offsetAmount = 8;

var offset = 0;


var leftShift = false;
var rightShift = false;

const keymap = {
  "LEFT" : 36,
  "DOWN" : 37,
  "RIGHT" : 38,
  "UP" : 39,

  "Y": 40,
  "B": 41,
  "A": 42,
  "X": 43,
}

// BUTTONS

function sendNote(note, press){
  if(press){
    output.send('noteon', {
      note: note,
      velocity: 127,
      channel: 1
    });

  }else{
    output.send('noteoff', {
      note: note,
      velocity: 0,
      channel: 1
    });
  }
}


ctrl.on('X:press', function() {
  console.log('X was pressed');
    sendNote(keymap.X + offset*offsetAmount, true)
});
ctrl.on('X:release', function() {
  console.log('X was released');
    sendNote(keymap.X  + offset*offsetAmount, false)
});

ctrl.on('A:press', function() {
  console.log('A was pressed');
    sendNote(keymap.A + offset*offsetAmount, true)
});
ctrl.on('A:release', function() {
  console.log('A was released');
    sendNote(keymap.A + offset*offsetAmount, false)
});

ctrl.on('B:press', function() {
  console.log('B was pressed');
    sendNote(keymap.B + offset*offsetAmount, true)
});
ctrl.on('B:release', function() {
  console.log('B was released');
    sendNote(keymap.B + offset*offsetAmount, false)
});

ctrl.on('Y:press', function() {
  console.log('Y was pressed');
    sendNote(keymap.Y + offset*offsetAmount, true)
});
ctrl.on('Y:release', function() {
  console.log('Y was released');
    sendNote(keymap.Y + offset*offsetAmount, false)
});












// DIRECTION
ctrl.on('Up:press', function() {
  console.log('Up was pressed');
    sendNote(keymap.UP + offset*offsetAmount, true)
});
ctrl.on('Up:release', function() {
  console.log('Up was released');
    sendNote(keymap.UP + offset*offsetAmount, false)
});

ctrl.on('Right:press', function() {
  console.log('Right was pressed');
    sendNote(keymap.RIGHT + offset*offsetAmount, true)
});
ctrl.on('Right:release', function() {
  console.log('Right was released');
    sendNote(keymap.RIGHT + offset*offsetAmount, false)
});

ctrl.on('Down:press', function() {
  console.log('Down was pressed');
    sendNote(keymap.DOWN + offset*offsetAmount, true)
});
ctrl.on('Down:release', function() {
  console.log('Down was released');
    sendNote(keymap.DOWN + offset*offsetAmount, false)
});
ctrl.on('Left:press', function() {
  console.log('Left was pressed');
    sendNote(keymap.LEFT + offset*offsetAmount, true)
});
ctrl.on('Left:release', function() {
  console.log('Left was released');
    sendNote(keymap.LEFT + offset*offsetAmount, false)
});





//LR

ctrl.on('L:press', function() {
  console.log('L was pressed');
  offset--;
  console.log("offset " + offset)
  // leftShift = true;
  // sendNote(keymap.UP_SHIFT, false);
  // sendNote(keymap.RIGHT_SHIFT, false);
  // sendNote(keymap.DOWN_SHIFT, false);
  // sendNote(keymap.LEFT_SHIFT, false);
});
ctrl.on('L:release', function() {
  console.log('L was released');
  // leftShift = false;
  // sendNote(keymap.UP, false);
  // sendNote(keymap.RIGHT, false);
  // sendNote(keymap.DOWN, false);
  // sendNote(keymap.LEFT, false);
});

ctrl.on('R:press', function() {
  console.log('R was pressed');
  offset++;
  console.log("offset " + offset)
  // rightShift = true;
  // sendNote(keymap.X_SHIFT, false);
  // sendNote(keymap.Y_SHIFT, false);
  // sendNote(keymap.A_SHIFT, false);
  // sendNote(keymap.B_SHIFT, false);
});
ctrl.on('R:release', function() {
  console.log('R was released');
  // rightShift = false;
  // sendNote(keymap.X, false);
  // sendNote(keymap.Y, false);
  // sendNote(keymap.A, false);
  // sendNote(keymap.B, false);
});


// START & SELECT
ctrl.on('Start:press', function() {
  console.log('Start was pressed');
});
ctrl.on('Start:release', function() {
  console.log('Start was released');
});

ctrl.on('Select:press', function() {
  console.log('Select was pressed');
});
ctrl.on('Select:release', function() {
  console.log('Select was released');
});


//
// ctrl.on('data', function(data) {
//     console.log(data);
// });
