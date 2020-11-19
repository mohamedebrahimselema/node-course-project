// @desc      Get all bootcamps
// @route     GET /api/v1/bootcapms
// @access    public
exports.getBootcamps = (req,res,next) =>{
    res.status(200).json({sucess: true , message : "show all bootcamps"});
}

// @desc      Get single bootcamp
// @route     GET /api/v1/bootcapms/:id
// @access    public
exports.getBootcamp = (req,res,next) =>{
    res.status(200).json({sucess: true , message : `display bootcamp get  ${req.params.id}`});
}

// @desc      create new  bootcamp
// @route     POST /api/v1/bootcamps
// @access    private
exports.createBootcamp = (req,res,next) =>{
    res.status(200).json({sucess: true , message : "create new bootcamps"});
}
// @desc      update  bootcamp
// @route     PUT /api/v1/bootcapm/:id
// @access    private
exports.updateBootcamps = (req,res,next) =>{
    res.status(200).json({sucess: true , message : `update bootcamp put  ${req.params.id}`});
}
// @desc      delete bootcamps
// @route     DELETE /api/v1/bootcapm/:id
// @access    public
exports.deleteBootcamps = (req,res,next) =>{
    res.status(200).json({sucess: true , message : `delete  bootcamps  ${req.params.id}`});
}