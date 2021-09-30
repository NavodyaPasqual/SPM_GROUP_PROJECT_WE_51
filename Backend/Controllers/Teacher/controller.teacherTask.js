const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
const teacherTask = require('../../Modules/Class/module.class');




const createteacherTask = async (req, res) => {
    if(req.body) {
        const teacher = new teacherTask(req.body);
        await teacher.save()
            .then(data=>{
                res.status(200).send({data: data});
            })
            .catch(error =>{
                res.status(500).send({error: error.message});
            });
    }
}
const getAllteacherTask = async (req, res) => {
    await teacherTask.find({})
        .then(data=>{
            res.status(200).send({data: data});
        })
        .catch(error =>{
            res.status(500).send({error: error.message});
        });
}

const viewteacherTaskById = async (req, res) => {
    if (req.params && req.params.id) {
        await teacherTask.findById(req.params.id)
            .populate('classess', '_id tasktitle taskdescription teacherid implevel validtill')
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
    const status = req.body;
    const updateTask = {
        status
    }
    console.log(updateTask.status);
    const update = await teacherTask.findByIdAndUpdate(id, updateTask.status)
        .then(() => {
            res.status(200).send({status: "teacher task Updated"})
        }).catch((err) => {
            console.log(err);
            res.status(500).send({status: " Error", error:err.message});
        })
}

const deleteById = async (req, res) => {
    const id = req.params.id
    await teacherTask.findByIdAndRemove(id).exec()
    res.send('Couldnt delete');
}



module.exports = {
    createteacherTask,
    getAllteacherTask,
    viewteacherTaskById,
    updateById,
    deleteById
}