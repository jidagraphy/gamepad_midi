const easymidi = require('easymidi');
const Gamecontroller = require('gamecontroller');
const ctrl = new Gamecontroller('cheap-gamecontroller');

ctrl.connect(function() {
  console.log('Game On!');
});

const input = new easymidi.Input('SNES MIDI', true);
const output = new easymidi.Output('SNES MIDI', true);


var leftShift = false;
var rightShift = false;

const keymap = {
  "UP" : 36,
  "UP_SHIFT" : 40,
  "RIGHT" : 37,
  "RIGHT_SHIFT" : 41,
  "DOWN" : 38,
  "DOWN_SHIFT" : 42,
  "LEFT" : 39,
  "LEFT_SHIFT" : 43,
  
  "X": 44,
  "X_SHIFT": 48,
  "A": 45,
  "A_SHIFT": 49,
  "B": 46,
  "B_SHIFT": 50,
  "Y": 47,
  "Y_SHIFT": 51,
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
  if(!rightShift){
    sendNote(keymap.X, true)
  }else{
    sendNote(keymap.X_SHIFT, true)
  }
});
ctrl.on('X:release', function() {
  console.log('X was released');
  if(!rightShift){
    sendNote(keymap.X, false)
  }else{
    sendNote(keymap.X_SHIFT, false)
  }
});

ctrl.on('A:press', function() {
  console.log('A was pressed');
  if(!rightShift){
    sendNote(keymap.A, true)
  }else{
    sendNote(keymap.A_SHIFT, true)
  }
});
ctrl.on('A:release', function() {
  console.log('A was released');
  if(!rightShift){
    sendNote(keymap.A, false)
  }else{
    sendNote(keymap.A_SHIFT, false)
  }
});

ctrl.on('B:press', function() {
  console.log('B was pressed');
  if(!rightShift){
    sendNote(keymap.B, true)
  }else{
    sendNote(keymap.B_SHIFT, true)
  }
});
ctrl.on('B:release', function() {
  console.log('B was released');
  if(!rightShift){
    sendNote(keymap.B, false)
  }else{
    sendNote(keymap.B_SHIFT, false)
  }
});

ctrl.on('Y:press', function() {
  console.log('Y was pressed');
  if(!rightShift){
    sendNote(keymap.Y, true)
  }else{
    sendNote(keymap.Y_SHIFT, true)
  }
});
ctrl.on('Y:release', function() {
  console.log('Y was released');
  if(!rightShift){
    sendNote(keymap.Y, false)
  }else{
    sendNote(keymap.Y_SHIFT, false)
  }
});












// DIRECTION
ctrl.on('Up:press', function() {
  console.log('Up was pressed');
  if(!leftShift){
    sendNote(keymap.UP, true)
  }else{
    sendNote(keymap.UP_SHIFT, true)
  }
});
ctrl.on('Up:release', function() {
  console.log('Up was released');
  if(!leftShift){
    sendNote(keymap.UP, false)
  }else{
    sendNote(keymap.UP_SHIFT, false)
  }
});

ctrl.on('Right:press', function() {
  console.log('Right was pressed');
  if(!leftShift){
    sendNote(keymap.RIGHT, true)
  }else{
    sendNote(keymap.RIGHT_SHIFT, true)
  }
});
ctrl.on('Right:release', function() {
  console.log('Right was released');
  if(!leftShift){
    sendNote(keymap.RIGHT, false)
  }else{
    sendNote(keymap.RIGHT_SHIFT, false)
  }
});

ctrl.on('Down:press', function() {
  console.log('Down was pressed');
  if(!leftShift){
    sendNote(keymap.DOWN, true)
  }else{
    sendNote(keymap.DOWN_SHIFT, true)
  }
});
ctrl.on('Down:release', function() {
  console.log('Down was released');
  if(!leftShift){
    sendNote(keymap.DOWN, false)
  }else{
    sendNote(keymap.DOWN_SHIFT, false)
  }
});
ctrl.on('Left:press', function() {
  console.log('Left was pressed');
  if(!leftShift){
    sendNote(keymap.LEFT, true)
  }else{
    sendNote(keymap.LEFT_SHIFT, true)
  }
});
ctrl.on('Left:release', function() {
  console.log('Left was released');
  if(!leftShift){
    sendNote(keymap.LEFT, false)
  }else{
    sendNote(keymap.LEFT_SHIFT, false)
  }
});





//LR

ctrl.on('L:press', function() {
  console.log('L was pressed');
  leftShift = true;
  sendNote(keymap.UP_SHIFT, false);
  sendNote(keymap.RIGHT_SHIFT, false);
  sendNote(keymap.DOWN_SHIFT, false);
  sendNote(keymap.LEFT_SHIFT, false);
});
ctrl.on('L:release', function() {
  console.log('L was released');
  leftShift = false;
  sendNote(keymap.UP, false);
  sendNote(keymap.RIGHT, false);
  sendNote(keymap.DOWN, false);
  sendNote(keymap.LEFT, false);
});

ctrl.on('R:press', function() {
  console.log('R was pressed');
  rightShift = true;
  sendNote(keymap.X_SHIFT, false);
  sendNote(keymap.Y_SHIFT, false);
  sendNote(keymap.A_SHIFT, false);
  sendNote(keymap.B_SHIFT, false);
});
ctrl.on('R:release', function() {
  console.log('R was released');
  rightShift = false;
  sendNote(keymap.X, false);
  sendNote(keymap.Y, false);
  sendNote(keymap.A, false);
  sendNote(keymap.B, false);
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
