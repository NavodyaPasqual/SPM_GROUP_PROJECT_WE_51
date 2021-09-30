const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const TeacherAPI = require('./Routes/Teacher/route.teacher');
const ProfileAPI = require('./Routes/Teacher/route.tprofile');
const MaterialAPI = require('./Routes/Teacher/route.material');
const studentPaymentRoute = require('./Routes/Accountant/route.student.payment');
const companyPaymentRoute = require('./Routes/Accountant/route.company.payment');
const teacherTaskRoute = require('./Routes/Class/route.class');

//R.K Added:-
const studentNoticesRoute = require('./Routes/Student/route.studentNotices');
const studentFeedBackRoute = require('./Routes/Student/route.feedback');
const MainStudentRoute = require('./Routes/Student/route.student');


dotenv.config();
const app = express();
app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8081;

/**
 * Get MONGODB_URI from .env
 */

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, (error) => {

    if (error) {
        console.log('Database Error:', error.message);
        console.log('######################################################');
    }
});

mongoose.connection.once('open', () => {
    console.log('Database Connected...');
    initial();
    console.log('######################################################');
});

app.route('/').get((req, res) => {
    res.send('SPM Group Project');
});


//serve static assets of in production
if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('FrontEnd/build'))
}

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

//API endpoints
app.use('/teacher', TeacherAPI());
app.use('/profile', ProfileAPI());
app.use('/material', MaterialAPI());
app.use('/student-payment', studentPaymentRoute());
app.use('/company-payment', companyPaymentRoute());
app.use('/teacher-task', teacherTaskRoute());

//R.K Added:-
app.use('/StudentNotices', studentNoticesRoute());
app.use('/StudentFeedbacks', studentFeedBackRoute());
app.use('/MainStudent', MainStudentRoute());

app.listen(PORT, () => {
    console.log('######################################################');
    console.log(`Server is ON and running on PORT : ${PORT}`);
    console.log('...Wait DB connecting...');
});

const db = require("./Modules");
const Role = db.role;


  function initial() {
    Role.estimatedDocumentCount((err, count) => {
      if (!err && count === 0) {
        new Role({
          name: "user"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'user' to roles collection");
        });
  
        new Role({
          name: "student"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'student' to roles collection");
        });

        new Role({
          name: "teacher"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'teacher' to roles collection");
        });
  
        new Role({
          name: "manager"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'manager' to roles collection");
        });
  
  
        new Role({
          name: "admin"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'admin' to roles collection");
          console.log('######################################################');
        });
      }
    });
  }
