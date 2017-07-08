

exports = module.exports = function(app){

    app.use('/api/restaurant/', require('./api/restaurant/'));
    // app.use('/api/user/', require('./api/user/'));

}