var fs = require('fs');
function fileActions(err, file){ 
    if (err) {
        throw err;
    }
    var episodes = JSON.parse(file);
    for(var i = 0; i < episodes.length; i++){
      console.log("Title: " + episodes[i].title);
      console.log(episodes[i].description);
      console.log("Rating: " + episodes[i].rating);
      console.log("\n");
    }
}
fs.readFile("./GoT.json", 'utf8', fileActions);

