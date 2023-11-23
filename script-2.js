// It's a good idea to declare all your variables.
// This will let our JS linter help us find
// spelling errors among other things.
// Declaring with 'var' will make them global
// variables.

var alicesBulletin,
  bobsBulletin,
  carolsBulletin,
  dansBulletin,
  elliesBulletin,
  franksBulletin,
  gregsBulletin,
  harrysBulletin,
  ivysBulletin,
  jacksBulletin;

let schoolBulletin;

// this variable is set to an object

schoolBulletin = {
  message: "Cougars Win!", //"Game tonight: Mighty Ducks vs Hawks!"
  //When changing the message in the object literal it becomes the default message for everyone.
};

alicesBulletin = schoolBulletin;
bobsBulletin = alicesBulletin;
carolsBulletin = bobsBulletin;
dansBulletin = carolsBulletin;
elliesBulletin = dansBulletin;
franksBulletin = elliesBulletin;
//franksBulletin = { message: "The Cougars Cheated!"}
//Setting a variable to an object will change it's message and those that follow it but, not the ones before it.
gregsBulletin = franksBulletin;
harrysBulletin = gregsBulletin;
ivysBulletin = harrysBulletin;
jacksBulletin = ivysBulletin;

//ivysBulletin.message = "I don't like sports!"
//gregsBulletin.message = "Let's geaux Saints!"
// The message will equal the last message received.

function bulletinNews() {
  schoolBulletin.message = document.querySelector("#news-input").value;
  setBulletins();
}

btn = document.querySelector("#news");
btn.onclick = bulletinNews;
// call setNames from 'messages.js'
// to set the messages in the DOM.
setBulletins();
