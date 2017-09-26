var Track = require('../models/track.js');

module.exports = function(app) {

    // GET route to pull tracks from database
    app.get('/api/tracks', function(req, res) {
        Track.find({}, function(error, doc) {
            if (error) {
                res.send(error);
            }
            else {
                res.send(doc);
            }
        })
    });
    // GET route to pull a track by it's ObjectId
    app.get("/api/tracks/:id", function(req, res) {
        Track.findOne({id: req.params.id}, function(error, doc) {
            if (error) {
                res.send(error);
            }
            else {
                res.send(doc);
            }
        });
    });
    // POST route to add a new track
    app.post("/api/tracks", function(req, res) {
        var entry = new Track(req.body);

        entry.save(function(err, doc) {
            if (err) {
                res.send(error);
            }
            else {
                res.send(doc);
            }
        });
    });
};