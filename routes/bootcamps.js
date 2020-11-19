const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({sucess: true , message : "show all bootcamps"});
});


router.post('/', (req, res) => {
    res.status(200).json({sucess: true , message : "create new bootcamps"});
});
router.get('/:id', (req, res) => {
    res.status(200).json({sucess: true , message : `display bootcamp get  ${req.params.id}`});
});

router.put('/:id', (req, res) => {
    res.status(200).json({sucess: true , message : `update bootcamp put  ${req.params.id}`});
});


router.delete('/:id', (req, res) => {
    res.status(200).json({sucess: true , message : `delete  bootcamps  ${req.params.id}`});
});

module.exports = router;