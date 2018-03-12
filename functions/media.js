const Multivocal = require('multivocal');

var init = function(){
  setConfig();
};
exports.init = init;

var enWelcome = [
  {
    Base:{Set:true},
    Template: {
      Audio: {
        Title: "Welcome audio",
        Url: "https://actions.google.com/sounds/v1/ambiences/swoosh.ogg"
      },
      Suggestions: [
        "{{Set '_This[+]' 'Swoosh'}}",
        "{{Set '_This[+]' 'Swipe'}}"
      ]
    }
  },
  "Hello.",
  "Hi."
];

var undDefault = [
  "Media status is set to {{MediaStatus}}."
];

var config = {
  Local: {
    en: {
      Response: {
        "Action.welcome": enWelcome
      }
    },
    und: {
      Response: {
        Default: undDefault
      }
    }
  }
};

var setConfig = function(){
  var conf = require('multivocal/lib/config-simple')(config);
  Multivocal.setConfig( conf );
};
