const Notices = require('../../Modules/Student/module.studentNotice');        // Require the database structure

//Create Notices by getting details --------
const CreateStudentNotices = async (req, res) => {
    if (req.body) {
        const notices = new Notices(req.body);
        await notices.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

// Get all Notices -------------
const getAllStudentNotices = async (req, res) => {
    await Notices.find({})
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}



const getSpecificNotices = async (req, res) => {
    const item2 = await Notices.findById(req.params.id)

    const name = item2.name;
    const type = item2.type;
    const link = item2.link;
    const description = item2.description;
    res.status(200).send({name: name, type: type, link: link, description: description});

}

const deleteById = async (req, res) => {
    const id = req.params.id
    await Notices.findByIdAndRemove(id).exec()
    res.send('Notice Successfully removed from the system');
}

module.exports = {
    CreateStudentNotices,
    getAllStudentNotices,
    deleteById,
    getSpecificNotices
};

