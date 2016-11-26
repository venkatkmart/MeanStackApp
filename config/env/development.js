var port = 3000;

module.exports = {
    port: port,
    port: 3000,
    db: "mongodb://learneasy:test#2016@ds049446.mlab.com:49446/learneez",
    facebook: {
        clientID: '513828288756645',
        clientSecret: '2d7cc991efddb864e9af61f307980b9a',
        callbackURL: 'http://localhost:' + port + '/oauth/facebook/callback'
    },
    twitter: {
        clientID: 'yFntGKkvMZkDKL47XGtzLNdRA',
        clientSecret: 'EAiPTjPYLX5nrkpRtxYQflbWpRTqqLwwBHRLh7WpdQ1P69Tre6',
        callbackURL: 'http://localhost:' + port + '/oauth/twitter/callback'
    }
};
