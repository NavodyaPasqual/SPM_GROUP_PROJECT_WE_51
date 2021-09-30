const Teacher = require('../../Modules/Teacher/module.teacher');

const createTeacher = async (req, res) => {
    if(req.body) {
        const teacher = new Teacher(req.body);
        await teacher.save()
            .then(data=>{
                res.status(200).send({data: data});
            })
            .catch(error =>{
                res.status(500).send({error: error.message});
            });
    }
}

const getAllTeachers = async (req, res) => {
    await Teacher.find({})
        .then(data=>{
            res.status(200).send({data: data});
        })
        .catch(error =>{
            res.status(500).send({error: error.message});
        });
}

const viewTeacherById = async (req, res) => {
    if (req.params && req.params.id) {
        await Teacher.findById(req.params.id)
            .populate('teachers', '_id firstName lastName nic contactNumber email regDate qualificationType')
            .then(response => {
                res.status(200).send({ data: response });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}


const updateById = async (req, res) => {
    const id = req.params.id;
    const {status} = req.body;
    const updateTeacher = {
        status
    }
    const update = await Teacher.findByIdAndUpdate(id, updateTeacher)
        .then(() => {
            res.status(200).send({status: "Teacher Registration Updated"})
        }).catch((err) => {
            console.log(err);
            res.status(500).send({status: " Error", error:err.message});
        })
}

const deleteById = async (req, res) => {
    const id = req.params.id
    await Teacher.findByIdAndRemove(id).exec()
    res.send('Teacher Registration Declined');
}

module.exports = {
    createTeacher,
    getAllTeachers,
    viewTeacherById,
    updateById,
    deleteById
}
