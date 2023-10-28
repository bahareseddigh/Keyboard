window.addEventListener('keydown' , (Event) => {
    document.getElementById(Event.key).classList.add('press');
});

window.addEventListener('keyup' , (Event) => {
    document.getElementById(Event.key).classList.remove('press');
});

window.addEventListener('keydown', function(event) {
    if (event.key === 'Shift') {
      if (event.location === 1) { // Right Shift
        document.getElementById('shiftL').classList.add('press');
      } else if (event.location === 2) { // Left Shift
        document.getElementById('shiftR').classList.add('press');
      }
    }
  });
  
  window.addEventListener('keyup', function(event) {
    if (event.key === 'Shift') {
      if (event.location === 1) { // Right Shift
        document.getElementById('shiftL').classList.remove('press');
      } else if (event.location === 2) { // Left Shift
        document.getElementById('shiftR').classList.remove('press');
      }
    }
  });

window.addEventListener('keydown' , (Event) => {
    if(Event.key === 'Alt'){
        if(Event.location === 1){
            document.getElementById('altL').classList.add('press');
        }
        else if(Event.location === 2){
            document.getElementById('altR').classList.add('press');
        }
    }
});


window.addEventListener('keyup' , (Event) => {
    if(Event.key === 'Alt'){
        if(Event.location === 1){
            document.getElementById('altL').classList.remove('press');
        }
        else if(Event.location === 2){
            document.getElementById('altR').classList.remove('press');
        }
    }
});


window.addEventListener('keydown' , (Event) => {
    if(Event.ctrlKey){
        if(Event.location === 1){
            document.getElementById('ctrlL').classList.add('press');
        }
        else if(Event.location === 2){
            document.getElementById('ctrlR').classList.add('press');
        }
    }
});

window.addEventListener('keyup' , (Event) => {
    if(Event.location === 1){
        document.getElementById('ctrlL').classList.remove('press');
    }
    else if(Event.location === 2){
        document.getElementById('ctrlR').classList.remove('press');
    }
});


window.addEventListener('keydown' , (Event) => {
    if(Event.key == '13'){
        document.getElementById('enter').classList.add('press');
    }
});

window.addEventListener('keydown' , (Event) => {
    if(Event.key == '9'){
        document.getElementById('Tab').classList.add('press');
    }
});

window.addEventListener('keydown' , (Event) => {
    if(Event.key == '20'){
        document.getElementById('CapsLock').classList.add('press');
    }
});

window.addEventListener('keydown' , (Event) => {
    if(Event.key == '['){
        if(Event.location == 0){
            document.getElementById('BracketLeft').classList.add('press');
        }
    }
});

window.addEventListener('keyup' , (Event) => {
    if(Event.key == '['){
        if(Event.location == 0){
            document.getElementById('BracketLeft').classList.remove('press');
        }
    }
});

window.addEventListener('keydown' , (Event) => {
    if(Event.key == ']'){
        if(Event.location == 0){
            document.getElementById('BracketRight').classList.add('press');
        }
    }
});

window.addEventListener('keyup' , (Event) => {
    if(Event.key == ']'){
        if(Event.location == 0){
            document.getElementById('BracketRight').classList.remove('press');
        }
    }
});

window.addEventListener('keydown' , (Event) => {
    if(Event.key == '\\'){
        if(Event.location == 0){
            document.getElementById('Backslash').classList.add('press');
        }
    }
});

window.addEventListener('keyup' , (Event) => {
    if(Event.key == '\\'){
        if(Event.location == 0){
            document.getElementById('Backslash').classList.remove('press');
        }
    }
});

window.addEventListener('keydown' , (Event) => {
    if(Event.key == ';'){
        if(Event.location == 0){
            document.getElementById('Semicolon').classList.add('press');
        }
    }
});

window.addEventListener('keyup' , (Event) => {
    if(Event.key == ';'){
        if(Event.location == 0){
            document.getElementById('Semicolon').classList.remove('press');
        }
    }
});


window.addEventListener('keydown' , (Event) => {
    if(Event.key == "'"){
        if(Event.location == 0){
            document.getElementById('Quote').classList.add('press');
        }
    }
});

window.addEventListener('keyup' , (Event) => {
    if(Event.key == "'"){
        if(Event.location == 0){
            document.getElementById('Quote').classList.remove('press');
        }
    }
});


window.addEventListener('keydown' , (Event) => {
    if(Event.key == ","){
        if(Event.location == 0){
            document.getElementById('Comma').classList.add('press');
        }
    }
});

window.addEventListener('keyup' , (Event) => {
    if(Event.key == ","){
        if(Event.location == 0){
            document.getElementById('Comma').classList.remove('press');
        }
    }
});




window.addEventListener('keydown' , (Event) => {
    if(Event.key == "."){
        if(Event.location == 0){
            document.getElementById('Period').classList.add('press');
        }
    }
});

window.addEventListener('keyup' , (Event) => {
    if(Event.key == "."){
        if(Event.location == 0){
            document.getElementById('Period').classList.remove('press');
        }
    }
});




window.addEventListener('keydown' , (Event) => {
    if(Event.key == "/"){
        if(Event.location == 0){
            document.getElementById('Slash').classList.add('press');
        }
    }
});

window.addEventListener('keyup' , (Event) => {
    if(Event.key == "/"){
        if(Event.location == 0){
            document.getElementById('Slash').classList.remove('press');
        }
    }
});


window.addEventListener('keydown' , (Event) => {
    if(Event.key == "`"){1
        if(Event.location == 0){
            document.getElementById('Backquote').classList.add('press');
        }
    }
});

window.addEventListener('keyup' , (Event) => {
    if(Event.key == "`"){
        if(Event.location == 0){
            document.getElementById('Backquote').classList.remove('press');
        }
    }
});

window.addEventListener('keydown' , (Event) => {
    if(Event.key == '1'){
        document.getElementById('Digit1').classList.add('press');
    }
});

window.addEventListener('keyup' , (Event) => {
    if(Event.key == '1'){
        document.getElementById('Digit1').classList.remove('press');
    }
});


window.addEventListener('keydown' , (Event) => {
    if(Event.key == '2'){
        document.getElementById('Digit2').classList.add('press');
    }
});

window.addEventListener('keyup' , (Event) => {
    if(Event.key == '2'){
        document.getElementById('Digit2').classList.remove('press');
    }
});

window.addEventListener('keydown' , (Event) => {
    if(Event.key == '3'){
        document.getElementById('Digit3').classList.add('press');
    }
});

window.addEventListener('keyup' , (Event) => {
    if(Event.key == '3'){
        document.getElementById('Digit3').classList.remove('press');
    }
});

window.addEventListener('keydown' , (Event) => {
    if(Event.key == '4'){
        document.getElementById('Digit4').classList.add('press');
    }
});

window.addEventListener('keyup' , (Event) => {
    if(Event.key == '4'){
        document.getElementById('Digit4').classList.remove('press');
    }
});

window.addEventListener('keydown' , (Event) => {
    if(Event.key == '5'){
        document.getElementById('Digit5').classList.add('press');
    }
});

window.addEventListener('keyup' , (Event) => {
    if(Event.key == '5'){
        document.getElementById('Digit5').classList.remove('press');
    }
});

window.addEventListener('keydown' , (Event) => {
    if(Event.key == '6'){
        document.getElementById('Digit6').classList.add('press');
    }
});

window.addEventListener('keyup' , (Event) => {
    if(Event.key == '6'){
        document.getElementById('Digit6').classList.remove('press');
    }
});

window.addEventListener('keydown' , (Event) => {
    if(Event.key == '7'){
        document.getElementById('Digit7').classList.add('press');
    }
});

window.addEventListener('keyup' , (Event) => {
    if(Event.key == '7'){
        document.getElementById('Digit7').classList.remove('press');
    }
});

window.addEventListener('keydown' , (Event) => {
    if(Event.key == '8'){
        document.getElementById('Digit8').classList.add('press');
    }
});

window.addEventListener('keyup' , (Event) => {
    if(Event.key == '8'){
        document.getElementById('Digit8').classList.remove('press');
    }
});

window.addEventListener('keydown' , (Event) => {
    if(Event.key == '9'){
        document.getElementById('Digit9').classList.add('press');
    }
});

window.addEventListener('keyup' , (Event) => {
    if(Event.key == '9'){
        document.getElementById('Digit9').classList.remove('press');
    }
});

window.addEventListener('keydown' , (Event) => {
    if(Event.key == '0'){
        document.getElementById('Digit0').classList.add('press');
    }
});

window.addEventListener('keyup' , (Event) => {
    if(Event.key == '0'){
        document.getElementById('Digit0').classList.remove('press');
    }
});


window.addEventListener('keydown' , (Event) => {
    if(Event.key == '-'){
        document.getElementById('Minus').classList.add('press');
    }
});

window.addEventListener('keyup' , (Event) => {
    if(Event.key == '-'){
        document.getElementById('Minus').classList.remove('press');
    }
});

window.addEventListener('keydown' , (Event) => {
    if(Event.key == '='){
        document.getElementById('Equal').classList.add('press');
    }
});

window.addEventListener('keyup' , (Event) => {
    if(Event.key == '='){
        document.getElementById('Equal').classList.remove('press');
    }
});

window.addEventListener('keydown' , (Event) => {
    if(Event.key == 'Backspace'){
        document.getElementById('Backspace').classList.add('press');
    }
});

window.addEventListener('keyup' , (Event) => {
    if(Event.key == 'Backspace'){
        document.getElementById('Backspace').classList.remove('press');
    }
});


window.addEventListener('keydown' , (Event) => {
    if(Event.key == 'FN'){
        document.getElementById('FN').classList.add('press');
    }
});

window.addEventListener('keyup' , (Event) => {
    if(Event.key == 'FN'){
        document.getElementById('FN').classList.remove('press');
    }
});


window.addEventListener('keydown' , (Event) => {
    if(Event.key == '91'){
        document.getElementById('Meta').classList.add('press');
    }
});

window.addEventListener('keyup' , (Event) => {
    if(Event.key == '91'){
        document.getElementById('Meta').classList.remove('press');
    }
});





