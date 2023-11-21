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
  message: "Cougars Win!",
};

alicesBulletin = schoolBulletin;
bobsBulletin = alicesBulletin;
carolsBulletin = bobsBulletin;
dansBulletin = carolsBulletin;
elliesBulletin = dansBulletin;
franksBulletin = elliesBulletin;
gregsBulletin = franksBulletin;
harrysBulletin = gregsBulletin;
ivysBulletin = harrysBulletin;
jacksBulletin = ivysBulletin;

// call setNames from 'messages.js'
// to set the messages in the DOM.
setBulletins();
