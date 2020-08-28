const express = require('express')

const router = express.Router()

const Subject = require('../models/Subject')

//@desc get all semesters
//@route GET /
router.get('/', async (req, res) => {
    try {
        const sems = await Subject.find()
        console.log(sems);
    } catch (err) {
        console.log(err);
        return res.status(400).json({
            success: 0,
            message: err
        })
    }
})

module.exports = router