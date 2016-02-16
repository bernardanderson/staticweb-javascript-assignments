var sonnetTot = document.getElementById('sonnet').innerHTML;
var sonnetReplaced = sonnetTot.replace("winter", "yuletide");
sonnetReplaced = sonnetReplaced.split("the ").join("a large ");

var orphanPlace = "The position of the word 'orphans' is at character: " + sonnetTot.indexOf('orphans') + "<br>";

var sonnetLength = "The length of the sonnet is: " + sonnetTot.length + " characters.<br><br>";

document.getElementById('sonnet').innerHTML =  orphanPlace + sonnetLength + sonnetReplaced;