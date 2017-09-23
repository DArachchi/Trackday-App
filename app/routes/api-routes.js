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

};