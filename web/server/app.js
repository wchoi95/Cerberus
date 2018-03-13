import express from 'express';
import path from 'path';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';

import index from './routes/index';
import users from './routes/users';

const app = express();

// Get routes from constants.
import { ROUTES } from './constants/routes';

// view engine setup
app.set('view engine', 'html');

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get(ROUTES, (req, res) => {
    res.sendFile(path.resolve('client/build', 'index.html'));
  });

};

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
// app.use( (req, res, next) => {
//   const err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// error handler
// app.use( (err, req, res, next) => {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

app.set('port', (process.env.PORT || 4999));

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});

app.use( (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  next();
});

app.use(methodOverride('X-HTTP-Method-Override'));

module.exports = app;
