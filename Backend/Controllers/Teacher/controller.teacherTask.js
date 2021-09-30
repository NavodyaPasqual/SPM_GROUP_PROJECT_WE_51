const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
const {next} = require("lodash");
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
    let order = req.query.order ? req.query.order : 'asc'
    let sortBy = req.query.sortBy ? req.query.sortBy : '_id'

    teacherTask.find()
        .sort([[sortBy, order]])
        .exec((err, teacherTask) => {
            if(err) {
                return res.status(400).json ({
                    error: 'No task Found'
                });
            }
            res.json(teacherTask);
        });
}

const viewteacherTaskById = async (req, res) => {
    teacherTask.findById(req.params.id, (error, data) =>{
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
}


const updateById = async (req, res) => {
    const { slug } = req.params
    const {tasktitle,taskdescription,teacherid,implevel,validtill,status} = req.body
    teacherTask.findOneAndUpdate({slug}, {tasktitle,taskdescription,teacherid,implevel,validtill,status}, {new: true})
        .exec((err,topic) => {
            if(err) console.log(err)
            res.json(topic);
        })
}

const deleteById = async (req, res) => {
    const id  = req.params.id
    await teacherTask.findByIdAndRemove(id).exec()
    res.send("Deleted successfully");
};

/**
 * Update only the status of student payment controller
 * @param req
 * @param res
 * @returns {Promise<any>}
 */
const updateStatus = async (req, res) => {
    const id = req.params.id;
    const {status} = req.body;
    const updateStatus= {
        status
    }
    const update = await teacherTask.findByIdAndUpdate(id, updateStatus)
        .then(() => {
            res.status(200).send({status: "Status Updated"})
        }).catch((err) => {
            console.log(err);
            res.status(500).send({status: " Error", error:err.message});
        })
}

module.exports = {
    createteacherTask,
    getAllteacherTask,
    viewteacherTaskById,
    updateById,
    deleteById,
    updateStatus
}