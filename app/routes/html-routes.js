var Track = require('../models/track.js');

module.exports = function(app) {

    app.get('*', function(req, res) {
        res.sendfile('./public/index.html');
    });

};