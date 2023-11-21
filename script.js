// It's a good idea to declare all your variables.
// This will let our JS linter help us find
// spelling errors among other things.
// Declaring with 'var' will make them global
// variables.

var aliceSays,
  bobSays,
  carolSays,
  danSays,
  ellieSays,
  frankSays,
  harrySays,
  ivySays,
  jackSays;

// this variable is set to a string.
let theMessage = "Kathy loves Larry";

aliceSays = theMessage;
bobSays = aliceSays;
carolSays = bobSays;
danSays = carolSays;
ellieSays = danSays;
frankSays = ellieSays;
gregSays = frankSays;
harrySays = gregSays;
ivySays = harrySays;
jackSays = ivySays;

// call setNames from 'messages.js'
// to set the messages in the DOM.
setMessages();

let aliceBtn;
aliceBtn = document.querySelector("#alice-btn");
function gossipQueen() {
  aliceSays = "But, Larry loves another!";
  setMessages();
}
aliceBtn.onclick = gossipQueen;

let bobBtn;
bobBtn = document.querySelector("#bob-btn");
function gossipKing() {
  bobSays = "Yes, Kathy's neighbor Susan!";
  setMessages();
}
bobBtn.onclick = gossipKing;
