const StudentPayment = require('../../Modules/Accountant/module.student.payment');

/**
 * Create Student Payment controller
 * @param req
 * @param res
 * @returns {Promise<any>}
 */
const createStudentPayment = async (req, res) => {
    if(req.body) {
        const studentPayment = new StudentPayment(req.body);
        await studentPayment.save()
            .then(data=>{
                res.status(200).send({data: data});
            })
            .catch(error =>{
                res.status(500).send({error: error.message});
            });
    }
}

/**
 * Get all Student Payments controller
 * @param req
 * @param res
 * @returns {Promise<any>}
 */
const getAllStudentPayment = async (req, res) => {
    await StudentPayment.find({})
        .then(data=>{
            res.status(200).send({data: data});
        })
        .catch(error =>{
            res.status(500).send({error: error.message});
        });
}

/**
 * Get a specific Student payment controller
 * @param req
 * @param res
 * @returns {Promise<any>}
 */
const viewStudentPaymentById = async (req, res) => {
    if (req.params && req.params.id) {
        await StudentPayment.findById(req.params.id)
            .populate('studentpayments', '_id name contactNo studentID depositedAmount depositedDate bank branch paymentSlip status type class teacher')
            .then(response => {
                res.status(200).send({ data: response });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

/**
 * Update the status of student payment controller
 * @param req
 * @param res
 * @returns {Promise<any>}
 */
const updateById = async (req, res) => {
    const id = req.params.id;
    const {status} = req.body;
    const updateStudentPayment = {
        status
    }
    const update = await StudentPayment.findByIdAndUpdate(id, updateStudentPayment)
        .then(() => {
            res.status(200).send({status: "Status Updated"})
        }).catch((err) => {
            console.log(err);
            res.status(500).send({status: " Error", error:err.message});
        })
}

/**
 * Delete student Payment controller
 * @param req
 * @param res
 * @returns {Promise<any>}
 */
const deleteById = async (req, res) => {
    const id = req.params.id
    await StudentPayment.findByIdAndRemove(id).exec()
    res.send('itemDeleted');
}

/**
 * export controllers
 * @type {{createStudentPayment: createStudentPayment,
 * getAllStudentPayment: getAllStudentPayment,
 * viewStudentPaymentById: viewStudentPaymentById,
 * updateById: updateById,
 * deleteById: deleteById}}
 */
module.exports = {
    createStudentPayment,
    getAllStudentPayment,
    viewStudentPaymentById,
    updateById,
    deleteById
}