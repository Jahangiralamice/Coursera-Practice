(function () {
    var names = ["Yaakov", "Jahangir", "Alam", "Rima", "Jahid", "Rubel", "Asif"];

    for (var j = 0; j < names.length; j++) {
        var firstLetter = names[j].charAt(0).toLowerCase();

        if (firstLetter === 'j') {
            byeSpeaker.speak(names[j]);
        }else{
            helloSpeaker.speak(names[j]);
        }
        
    }
})();
