var fs = require('fs');
function fileActions(err, file){ 
    if (err) {
        throw err;
    }
    var episodes = JSON.parse(file);
    for(var i = 0; i < episodes.length; i++){
      console.log("Title: " + episodes[i].title + "Episode #: " + i);
      console.log(episodes[i].description);
      console.log("Rating: " + episodes[i].rating + "  " + numberToAsterisk(episodes[i].rating) );
      console.log("\n");
    }
}

function numberToAsterisk(rating){
  var number = parseFloat(rating);
  number = Math.round(number);
  var str = "";
  for(var i = 0; i < number; i++){
    str = str + "*";
  }
  return str;
}

fs.readFile("./GoT.json", 'utf8', fileActions);

