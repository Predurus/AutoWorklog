/*jshint esversion: 6 */

//#region Importacion de node_modules
let dotenv = require('dotenv');
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let path = require('path')
//#endregion

//#region Importacion de librerias propias del proyecto
let routerJira = require('./Routes/Jira');
let WorklogController = require('./Controllers/WorklogController');
//#endregion

dotenv.config();

// Set views path
app.set('views', path.join(__dirname, 'views'));
// Set public path
app.use(express.static(path.join(__dirname, 'public')));
// Set pug as view engine
app.set('view engine', 'pug');

if (process.env.NODE_ENV === 'DEVELOPMENT') {
    var cors = require('cors');
    app.use(cors());

    var morgan = require('morgan');
    app.use(morgan('dev'));
}

var helmet = require('helmet');
app.use(helmet());

app.use(bodyParser.json({
    limit: '5m'
}));

//#region Redirect to index
app.get('/', function (req, res) {
    res.render('main')
})
//#endregion
app.use('/jira',routerJira)
//#region  Routes

//#endregion
WorklogController.SyncModels((result, error) => {
    if (error) {
        console.error(error)
    } else {
        app.listen(Number(process.env.PUERTO), process.env.SERVER, (err) => {
            if (err) {
                console.error('Error iniciando el servidor: ' + err);
                process.exit(1);
            }
            console.log(`servidor iniciado en ${process.env.SERVER}:${process.env.PUERTO}`);
        });
    }
});