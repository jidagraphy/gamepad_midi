const easymidi = require('easymidi');
const Gamecontroller = require('gamecontroller');
const ctrl = new Gamecontroller('cheap-gamecontroller');

ctrl.connect(function() {
  console.log('Game On!');
});

const input = new easymidi.Input('SNES MIDI', true);
const output = new easymidi.Output('SNES MIDI', true);


const keymap = {
  "UP" : 36,
  "RIGHT" : 37,
  "DOWN" : 38,
  "LEFT" : 39,

  "X": 40,
  "A": 41,
  "B": 42,
  "Y": 43,

  "L": 44,
  "R": 45,

  "START": 46,
  "SELECT": 47,
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
  sendNote(keymap.X, true)
});
ctrl.on('X:release', function() {
  console.log('X was released');
  sendNote(keymap.X, false)
});

ctrl.on('A:press', function() {
  console.log('A was pressed');
  sendNote(keymap.A, true)
});
ctrl.on('A:release', function() {
  console.log('A was released');
  sendNote(keymap.A, false)
});

ctrl.on('B:press', function() {
  console.log('B was pressed');
  sendNote(keymap.B, true)
});
ctrl.on('B:release', function() {
  console.log('B was released');
  sendNote(keymap.B, false)
});

ctrl.on('Y:press', function() {
  console.log('Y was pressed');
  sendNote(keymap.Y, true)
});
ctrl.on('Y:release', function() {
  console.log('Y was released');
  sendNote(keymap.Y, false)
});












// DIRECTION
ctrl.on('Up:press', function() {
  console.log('Up was pressed');
  sendNote(keymap.UP, true)
});
ctrl.on('Up:release', function() {
  console.log('Up was released');
  sendNote(keymap.UP, false)
});

ctrl.on('Right:press', function() {
  console.log('Right was pressed');
    sendNote(keymap.RIGHT, true)
});
ctrl.on('Right:release', function() {
  console.log('Right was released');
    sendNote(keymap.RIGHT, false)
});

ctrl.on('Down:press', function() {
  console.log('Down was pressed');
    sendNote(keymap.DOWN, true)
});
ctrl.on('Down:release', function() {
  console.log('Down was released');
    sendNote(keymap.DOWN, false)
});
ctrl.on('Left:press', function() {
  console.log('Left was pressed');
    sendNote(keymap.LEFT, true)
});
ctrl.on('Left:release', function() {
  console.log('Left was released');
    sendNote(keymap.LEFT, false)
});





//LR

ctrl.on('L:press', function() {
  console.log('L was pressed');
  sendNote(keymap.L, true);
});
ctrl.on('L:release', function() {
  console.log('L was released');
  sendNote(keymap.L, false);
});

ctrl.on('R:press', function() {
  console.log('R was pressed');
  sendNote(keymap.R, true);
});
ctrl.on('R:release', function() {
  console.log('R was released');
  sendNote(keymap.R, false);
});


// START & SELECT
ctrl.on('Start:press', function() {
  console.log('Start was pressed');
  sendNote(keymap.START, true);
});
ctrl.on('Start:release', function() {
  console.log('Start was released');
  sendNote(keymap.START, false);

});

ctrl.on('Select:press', function() {
  console.log('Select was pressed');
  sendNote(keymap.SELECT, true);
});
ctrl.on('Select:release', function() {
  console.log('Select was released');
  sendNote(keymap.SELECT, false);
});


//
// ctrl.on('data', function(data) {
//     console.log(data);
// });
