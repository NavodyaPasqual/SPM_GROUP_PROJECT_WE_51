const Profile = require('../../Modules/Teacher/module.tprofile');

const createProfile = async (req, res) => {
    if(req.body) {
        const profile = new Profile(req.body);
        await profile.save()
            .then(data=>{
                res.status(200).send({data: data});
            })
            .catch(error =>{
                res.status(500).send({error: error.message});
            });
    }
}

const getAllProfiles = async (req, res) => {
    await Profile.find({})
        .then(data=>{
            res.status(200).send({data: data});
        })
        .catch(error =>{
            res.status(500).send({error: error.message});
        });
}

const viewProfileById = async (req, res) => {
    if (req.params && req.params.id) {
        await Profile.findById(req.params.id)
            .populate('profile', '_id registrationNumber fName lName nic passportNumber address contactNumber email password editedDate')
            .then(response => {
                res.status(200).send({ data: response });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}


const updateProfileById = async (req, res) => {
    const id = req.params.id;
    const {status} = req.body;
    const updateProfile = {
        status
    }
    const update = await Profile.findByIdAndUpdate(id, updateProfile)
        .then(() => {
            res.status(200).send({status: "Teacher Profile status Updated"})
        }).catch((err) => {
            console.log(err);
            res.status(500).send({status: " Error", error:err.message});
        })
}

const deleteProfileById = async (req, res) => {
    const id = req.params.id
    await Profile.findByIdAndRemove(id).exec()
    res.send('Teacher Profile Deleted');
}

const updateById = async(req, res) => {
    const { slug } = req.params
    const {registrationNumber, fName, lName, nic, passportNumber, address, contactNumber, email, password, editedDate} = req.body
    Profile.findOneAndUpdate({slug}, {registrationNumber, fName, lName, nic, passportNumber, address, contactNumber, email, password, editedDate}, {new: true})
        .exec((err,topic) => {
            if(err) console.log(err)
            res.json(topic);
        })
};

module.exports = {
    createProfile,
    getAllProfiles,
    viewProfileById,
    updateProfileById,
    deleteProfileById,
    updateById
}
