const Bootcamp = require('../models/Bootcamp');

// @route     GET /api/v1/bootcapms
// @access    public
exports.getBootcamps = async (req,res,next) =>{
  //  res.status(200).json({sucess: true , message : "show all bootcamps"});

  try{
  const bootcamps = await Bootcamp.find();
  res.status(200).json({
      sucess : true ,
      data : bootcamps ,
      count : bootcamps.length
  });

}catch(err){
    res.status(400).json({
        sucess : false ,
        error : err.message
    });
  }
};

// @desc      Get single bootcamp
// @route     GET /api/v1/bootcapms/:id
// @access    public
exports.getBootcamp = async (req,res,next) =>{
   // res.status(200).json({sucess: true , message : `display bootcamp get  ${req.params.id}`});
   try{
       const bootcamp = await Bootcamp.findById(req.params.id);
    
       if (!bootcamp){
           return res.status(400).json({sucess : false});
        }
       res.status(200).json({
           sucess : true ,
           data : bootcamp
       });
   }catch(err){
    res.status(400).json({
        sucess : false ,
        error :  err.message
    });
   }
};

// @desc      create new  bootcamp
// @route     POST /api/v1/bootcamps
// @access    private
exports.createBootcamp = async (req,res,next) =>{
    console.log(req.body);
  //  res.status(200).json({sucess: true , message : "create new bootcamps"});

  try{

    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({
        sucess : true,
        data : bootcamp
    });
  }catch(err){
      res.status(400).json({
          sucess : false,
          error  : err.message
      })
  }
};
// @desc      update  bootcamp
// @route     PUT /api/v1/bootcapm/:id
// @access    private
exports.updateBootcamps =async (req,res,next) =>{
  //  res.status(200).json({sucess: true , message : `update bootcamp put  ${req.params.id}`});
  try{
      
  const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id , req.body, {
    new : true ,
    runValidators : true
});
if (!bootcamp){
    return res.status(400).json({sucess : false});
}
res.status(200).json({
    sucess : true ,
    data : bootcamp
});
      }catch(err){
          res.status(400).json({
              sucess:false,
              error : err.message 
          });
      }
};
// @desc      delete bootcamps
// @route     DELETE /api/v1/bootcapm/:id
// @access    public
exports.deleteBootcamps =async (req,res,next) =>{
  //  res.status(200).json({sucess: true , message : `delete  bootcamps  ${req.params.id}`});
  try{
      
    const bootcamp = await Bootcamp.findByIdAndRemove(req.params.id);
  if (!bootcamp){
      return res.status(400).json({sucess : false});
  }
  res.status(200).json({
      sucess : true ,
      data : {}
  });
        }catch(err){
            res.status(400).json({
                sucess:false,
                error : err.message 
            });
        }
  

};