/* importar as configurações do servidor */
var app = require('./config/server');

/* parametrizar a porta de escuta */
app.listen(process.env.PRT_API, function(){
	console.log('Servidor online');
})