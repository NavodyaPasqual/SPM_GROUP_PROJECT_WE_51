const Student = require('../../Modules/Student/module.student');             // Require the database structure

//Create Student by getting details -------- OK

const createStudent = async (req, res) => {
    if (req.body) {
        const student = new Student({
            FullName: req.body.FullName,
            LastName: req.body.LastName,
            NIC: req.body.NIC,
            AddressLineOne: req.body.AddressLineOne,
            AddressLineTwo: req.body.AddressLineTwo,
            BirthDay: req.body.BirthDay,
            Mobile: req.body.Mobile,
            OtherMobile: req.body.OtherMobile,
            Email: req.body.Email,
            referances: req.body.classes
        });
        student.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}


// Get all Students -------------
const getAllStudents = async (req, res) => {
    await Student.find({})
        .populate('classes', 'name description pdf')
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}


// Get all Classes for particular Students------------- OK
const getReferancesForStudent = async (req, res) => {
    if (req.params && req.params.id) {
        await Student.findById(req.params.id)
            .populate('classes', 'name description pdf')
            .then(data => {
                res.status(200).send({ data: data.referances });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

/*
//611cce5c418afb1da059cfb8
const updateStudentDetails = async (req, res) => {

    Student.findByIdAndUpdate('611cce5c418afb1da059cfb8', req.body,
        function (err, docs) {
            if (err){
                console.log(err)
            }
            else{
                console.log("Updated User : ", docs);
                res.status(200).send()
            }
        });
}
*/
const getPerticulerStudent  = async (req, res) => {
    const student = await Student.findById('611ccbd3b429311660b2a184')

    const FullName = student.FullName;
    const LastName = student.LastName;
    const NIC = student.NIC;
    const AddressLineOne = student.AddressLineOne;
    const AddressLineTwo = student.AddressLineTwo;
    const BirthDay = student.BirthDay;
    const Mobile = student.Mobile;
    const OtherMobile = student.OtherMobile;
    const Email = student.Email;
    res.status(200).send({FullName: FullName, LastName: LastName, NIC: NIC, AddressLineOne: AddressLineOne,AddressLineTwo: AddressLineTwo, BirthDay: BirthDay, Mobile: Mobile, OtherMobile: OtherMobile, Email: Email});

}


// update Details for particular Student------------- OK
const updateStudentDetails = async (req, res) => {
    if (req.params && req.params.id) {
        Student.findByIdAndUpdate(req.params.id, req.body,
            function (err, docs) {
                if (err){
                    console.log(err)
                }
                else{
                    console.log("Updated User : ", docs);
                    res.status(200).send()
                }
            });
    }
}

// Get all Details for particular Student------------- OK
const getDetailsForStudent = async (req, res) => {
    if (req.params && req.params.id) {
        const student =  await Student.findById(req.params.id)
            .populate('classes', 'name description pdf')
        const FullName = student.FullName;
        const LastName = student.LastName;
        const NIC = student.NIC;
        const AddressLineOne = student.AddressLineOne;
        const AddressLineTwo = student.AddressLineTwo;
        const BirthDay = student.BirthDay;
        const Mobile = student.Mobile;
        const OtherMobile = student.OtherMobile;
        const Email = student.Email;
        const referances = student.referances;
        res.status(200).send({FullName: FullName, LastName: LastName, NIC: NIC, AddressLineOne: AddressLineOne,AddressLineTwo: AddressLineTwo, BirthDay: BirthDay, Mobile: Mobile, OtherMobile: OtherMobile, Email: Email, referances: referances});

    }
}



module.exports = {
    createStudent,
    getAllStudents,
    getReferancesForStudent,
    getPerticulerStudent,
    updateStudentDetails,
    getDetailsForStudent
};

