const Material = require('../../Modules/Teacher/module.material');

const createMaterial = async (req, res) => {
    if(req.body) {
        const material = new Material(req.body);
        await material.save()
            .then(data=>{
                res.status(200).send({data: data});
            })
            .catch(error =>{
                res.status(500).send({error: error.message});
            });
    }
}

const getAllMaterials = async (req, res) => {
    await Material.find({})
        .then(data=>{
            res.status(200).send({data: data});
        })
        .catch(error =>{
            res.status(500).send({error: error.message});
        });
}

const viewMaterialById = async (req, res) => {
    if (req.params && req.params.id) {
        await Material.findById(req.params.id)
            .populate('material', '_id subjectName subjectCode lesson description')
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
    const updateMaterial = {
        status
    }
    const update = await Material.findByIdAndUpdate(id, updateMaterial)
        .then(() => {
            res.status(200).send({status: "Teacher Registration Updated"})
        }).catch((err) => {
            console.log(err);
            res.status(500).send({status: " Error", error:err.message});
        })
}

const deleteById = async (req, res) => {
    const id = req.params.id
    await Material.findByIdAndRemove(id).exec()
    res.send('Teacher Registration Declined');
}

module.exports = {
    createMaterial,
    getAllMaterials,
    viewMaterialById,
    updateById,
    deleteById
}
