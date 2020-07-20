var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose =  require('mongoose'); 
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var passport = require('passport');
var cors = require('cors');


const  authenticate = require('./authenticate');
const  indexRouter = require('./routes/index');
const  usersRouter = require('./routes/users');
const  conferenceRouter =  require('./routes/conferences');
const  articleRouter = require('./routes/Article');
const  demandeRouter = require('./routes/DemandePrticipationConf');
const  evaluationRouter = require('./routes/Evaluation');
const  evaluationfinalRouter = require ('./routes/EvaluationFinal');
const  participationRouter = require('./routes/Participant');
const  vouxRouter = require("./routes/FicheDeVoux") ; 
const  themesRouter = require("./routes/Themes");
const  NotificationRouter = require("./routes/Notification"); 
const  config = require('./config');

const url = config.mongoUrl;
const connect = mongoose.connect(url); 
connect.then((db)=>{
  console.log('connected correctely to server ');
},(err)=> console.log(err));
  

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('./uploads'));
app.use(session({
  name: 'session-id',
  secret: '12345-67890-09876-54321',
  saveUninitialized: false,
  resave: false,
  store: new FileStore()
}));


app.use(passport.initialize()); 
app.use(passport.session());
app.use(cors());
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/conferences',conferenceRouter );
app.use('/Demande' , demandeRouter);
app.use('/Themes' , themesRouter);
app.use('/Evaluation' , evaluationRouter);
app.use('/participation' , participationRouter);
app.use('/evaluationfinal' , evaluationfinalRouter);
app.use('/Article',articleRouter);






// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
