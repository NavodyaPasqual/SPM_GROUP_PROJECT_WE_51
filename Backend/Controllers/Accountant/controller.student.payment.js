const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
const StudentPayment = require('../../Modules/Accountant/module.student.payment');

/**
 * Get a specific Student payment controller
 * @param req
 * @param res
 * @param next
 * @param id
 * @returns {Promise<any>}
 */
const studentPaymentById = (req, res, next, id) => {
    StudentPayment.findById(id).exec((err,studentPayment) => {
        if (err || !studentPayment) {
            return res.status(400).json({
                error: "Payment not found"
            });
        }
        req.studentPayment = studentPayment;
        next();
    });
};

// get the payment details except photo
const read = (req, res) => {
    req.studentPayment.paymentSlip = undefined;
    return res.json(req.studentPayment);
};

/**
 * Create Student Payment controller
 * @param req
 * @param res
 * @returns {Promise<any>}
 */
const createStudentPayment = (req, res) => {
    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, (err, fields, files) => {
        if(err) {
            return res.status(400).json({
                error: "Image could not be uploaded"
            });
        }
        let studentPayment = new StudentPayment(fields)

        const {name,contactNo, studentID,depositedAmount,depositedDate,bank,branch,type,classes,teacher} = fields

        // validate fields
        if(!name || !contactNo|| !studentID|| !depositedAmount|| !depositedDate || !bank || !branch || !type || !classes || !teacher) {
            return res.status(400).json({
                error: "All fields are required"
            });
        }

        // validate photo size
        if(files.paymentSlip) {
            if(files.paymentSlip.size > 10000000) {
                return res.status(400).json({
                    error: "Image should be less than 10mb in size"
                });
            }
            studentPayment.paymentSlip.data = fs.readFileSync(files.paymentSlip.path)
            studentPayment.paymentSlip.contentType = files.paymentSlip.type
        }

        studentPayment.save((err, result) => {
            if(err) {
                return res.status(400).json({
                    error: 'Error Found'
                });
            }
            res.json(result);
        });
    });
}

/**
 * Get all Student Payments controller
 * @param req
 * @param res
 * @returns {Promise<any>}
 */
const getAllStudentPayment = (req, res) => {
    let order = req.query.order ? req.query.order : 'asc'
    let sortBy = req.query.sortBy ? req.query.sortBy : '_id'

    StudentPayment.find()
        .select("-paymentSlip")
        .sort([[sortBy, order]])
        .exec((err, studentPayments) => {
            if(err) {
                return res.status(400).json ({
                    error: 'No Student Payment Found'
                });
            }
            res.json(studentPayments);
        });
}

// get the photo of conference
const photo = (req, res, next) => {
    if(req.studentPayment.paymentSlip.data) {
        res.set('Content-Type', req.studentPayment.paymentSlip.contentType)
        return res.send(req.studentPayment.paymentSlip.data);
    }
    next();
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
 * Update the student payment controller
 * @param req
 * @param res
 * @returns {Promise<any>}
 */
const updateById = async(req, res) => {
    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, (err, fields, files) => {
        if(err) {
            return res.status(400).json({
                error: "Image could not be uploaded"
            });
        }

        const {name,contactNo, studentID,depositedAmount,depositedDate,bank,branch,type,classes,teacher} = fields

        let studentPayment = req.studentPayment;
        studentPayment = _.extend(studentPayment,fields)

        if(files.paymentSlip) {
            if(files.paymentSlip.size > 10000000) {
                return res.status(400).json({
                    error: "Image should be less than 10mb in size"
                });
            }
            studentPayment.paymentSlip.data = fs.readFileSync(files.paymentSlip.path)
            studentPayment.paymentSlip.contentType = files.paymentSlip.type
        }

        studentPayment.save((err, result) => {
            if(err) {
                return res.status(400).json({
                    error: "Update Failed"
                });
            }
            res.json(result);
        });
    });
};

/**
 * Delete student Payment controller
 * @param req
 * @param res
 * @returns {Promise<any>}
 */
const deleteById = (req, res) => {
    let studentPayment = req.studentPayment
    studentPayment.remove((err, deletedPayment) => {
        if(err) {
            return res.status(400).json({
                error: "Error On Delete"
            });
        }
        res.json({
            deletedPayment,
            message: "Payment Deleted successfully"
        });
    });
};

/**
 * Calculate total Fee controller
 * @param req
 * @param res
 * @returns {Promise<any>}
 */
const calculateAmount = async (req, res) => {

}

/**
 * export controllers
 * @type {{createStudentPayment: createStudentPayment,
 * getAllStudentPayment: getAllStudentPayment,
 * viewStudentPaymentById: viewStudentPaymentById,
 * updateById: updateById,
 * deleteById: deleteById,
 * calculateAmount: calculateAmount}}
 */
module.exports = {
    studentPaymentById,
    read,
    createStudentPayment,
    getAllStudentPayment,
    photo,
    updateStatus,
    updateById,
    deleteById,
    calculateAmount
}