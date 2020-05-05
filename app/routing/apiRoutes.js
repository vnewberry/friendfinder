// ===============================================================================
// LOAD DATA
// ===============================================================================

var friends = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });



  // API POST Requests
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
var newScores = req.body.scores;
var scoreArr = [];
var friendCount = 0;
var match = 0;

for (i=0;i<friends.length;i++){
    var difference = 0;
    for(j=0;j<newScores.length;j++){
        difference += (Math.abs(parseInt(friends[i].scores[j])-parseInt(newScores[j])));
    }
    scoreArr.push(difference);
}

for (i=0;i<scoreArr.length;i++){
    if(scoreArr[i] <= scoreArr[match]){
        match = i;
    }
}

var bestFriend = friends[match];
res.json(bestFriend);

//pushes new submission into the friendsList array
friends.push(req.body);
});

//added a clear route just to clean up messy json data
// app.post("/api/clear", function(req, res) {
//     // Empty out the arrays of data
//     friends.length = 1;
   

//     res.json({ ok: true });
//   });
};


