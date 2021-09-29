const mongoose = require('mongoose');  //Call mongoose Database

const StudentSchema = new mongoose.Schema({
    FullName: { type: String, required: true, trim: true },
    LastName: { type: String, required: true, trim: true },
    NIC: { type: String, required: true, trim: true },
    AddressLineOne: { type: String, required: true, trim: true },
    AddressLineTwo: { type: String, required: true, trim: true },
    BirthDay: { type: String, required: true, trim: true },
    Mobile: { type: String, required: true, trim: true },
    OtherMobile: { type: String, required: false, trim: true },
    Email: { type: String, required: true, trim: true },

    referances: [{ type: mongoose.Schema.Types.ObjectId, required: false, ref: 'classes' }]
});

const Student = mongoose.model('students', StudentSchema); //Create DB store type
module.exports = Student;



