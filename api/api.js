var api = require('./config/server');

var port = process.env.PRT_API;
api.listen(port, function (req, res) {
    console.log('Jesus me ajude nesse jornada. API escutando na '+port); 
});