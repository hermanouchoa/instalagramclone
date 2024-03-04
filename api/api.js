var api = require('./config/server');

var port = 3000;
api.listen(port, function (req, res) {
    console.log('Jesus me ajude nesse jornada. API escutando na '+port); 
});