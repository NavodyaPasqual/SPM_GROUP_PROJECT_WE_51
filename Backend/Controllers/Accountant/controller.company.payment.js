const formidable = require("formidable");
const _ = require("lodash");
const slugify = require("slugify");
const CompanyPayment = require('../../Modules/Accountant/module.company.payment');

/**
 * Create Company Payment controller
 * @param req
 * @param res
 * @returns {Promise<any>}
 */
const createCompanyPayment = (req, res) => {
    const {name,amount,date,type} = req.body
    // validate fields
    if(!name || !amount|| !date|| !type) {
        return res.status(400).json({
            error: "All fields are required"
        });
    }

    CompanyPayment.create({name,amount,date,type},(err,name) => {
        if(err) {
            return res.status(400).json({
                error: 'Error Found'
            });
        }
        res.json(name);
    });
}

/**
 * Get all Company Payments controller
 * @param req
 * @param res
 * @returns {Promise<any>}
 */
const getAllCompanyPayment = (req, res) => {
    let order = req.query.order ? req.query.order : 'asc'
    let sortBy = req.query.sortBy ? req.query.sortBy : '_id'

    CompanyPayment.find()
        .sort([[sortBy, order]])
        .exec((err, companyPayments) => {
            if(err) {
                return res.status(400).json ({
                    error: 'No company Payment Found'
                });
            }
            res.json(companyPayments);
        });
}

/**
 * Get a specific Company payment controller
 * @param req
 * @param res
 * @param next
 * @param id
 * @returns {Promise<any>}
 */
const companyPaymentById = async (req, res) => {
    if (req.params && req.params.id) {
        await CompanyPayment.findById(req.params.id)
            .then(response => {
                res.status(200).send({data: response});
            })
            .catch(error => {
                res.status(500).send({error: error.message});
            });
    }
};

/**
 * Update the company payment controller
 * @param req
 * @param res
 * @returns {Promise<any>}
 */
const updateById = async(req, res) => {
    const { slug } = req.params
    const {name,amount,date,type} = req.body
    CompanyPayment.findOneAndUpdate({slug}, {name,amount,date,type}, {new: true})
        .exec((err,topic) => {
            if(err) console.log(err)
            res.json(topic);
        })
};

/**
 * Delete company Payment controller
 * @param req
 * @param res
 * @returns {Promise<any>}
 */
const deleteById = async (req, res) => {
    const id  = req.params.id
    await CompanyPayment.findByIdAndRemove(id).exec()
    res.send("Payment Deleted successfully");
};

/**
 * export controllers
 * @type {{companyPaymentById: companyPaymentById,
 * createCompanyPayment: createCompanyPayment,
 * getAllCompanyPayment: getAllCompanyPayment,
 * updateById: updateById,
 * deleteById: deleteById}}
 */
module.exports = {
    companyPaymentById,
    createCompanyPayment,
    getAllCompanyPayment,
    updateById,
    deleteById
}