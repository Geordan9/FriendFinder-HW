module.exports = function (app, friends, path) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var newfriend = req.body;
        friends.push(newfriend);
        var comparisonNumber = -1;
        var friendMatch;
        for (friend of friends) {
            var difference = 0;
            for (var i = 0; i < 10; i++) {
                difference += Math.abs(newfriend.scores[i] - friend.scores[i]);
            }
            if (comparisonNumber == -1){
                comparisonNumber = difference;
                friendMatch = friend;
            }
            else if (difference < comparisonNumber){
                comparisonNumber = difference;
                friendMatch = friend;
            }
        }
        res.send(friendMatch);
    });
}