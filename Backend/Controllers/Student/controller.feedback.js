const Feedback = require('../../Modules/Student/module.feedback');        // Require the database structure

//Create Notices by getting details --------
const CreateFeedBack = async (req, res) => {
    if (req.body) {
        const feedback = new Feedback(req.body);
        await feedback.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

// Get all Notices -------------
const getAllFeedBack = async (req, res) => {
    await Feedback.find({})
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}




// Get GetAllFeedBackForParticularUser -------------
const getTestAllFeedBack = async (req, res) => {
    await Feedback.find({ receivers: req.params.receivers } )
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}




const getSpecificFeedBack = async (req, res) => {
    const item2 = await Feedback.findById(req.params.id)

    const title = item2.title;
    const type = item2.type;
    const receivers = item2.receivers;
    const description = item2.description;
    res.status(200).send({title: title, type: type, receivers: receivers, description: description});

}


module.exports = {
    CreateFeedBack,
    getAllFeedBack,
    getSpecificFeedBack,
    getTestAllFeedBack
};

