const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer')

const sql = require('../utils/sql');

//bio section
router.get('/', (req, res) => {
    // should really get the user data here and then fetch it thru, but let's try this asynchronously
    console.log('at the main route');

    let query = "SELECT *  FROM tbl_homepage";

    sql.query(query, (err, result) => {
        if (err) { throw err; console.log(err); }

        console.log(result); // should see objects wrapped in an array

        // render the home view with dynamic data
        res.render('home', { homepage: result });
    })
})



module.exports = router;