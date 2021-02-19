const ErrorResponse = require("../utils/errorResponse");
const user = require('../model/user');
const asyncHandler = require("../middleware/async");
//To get the file name extension line .jpg,.png
const path = require("path");


//--------------------CREATE Student------------------

exports.createUser = asyncHandler(async (req, res, next) => {

  const user = await user.create(req.body);

  if (!user) {
    return next(new ErrorResponse("Error adding user"), 404);
  }

  res.status(201).json({
    success: true,
    data: user,
  });
});

//-------------------Display all students

exports.getuser = asyncHandler(async (req, res, next) => {
    const user = await user.find({});
  
    res.status(201).json({
      success: true,
      count: students.length,
      data: user,
    });
  });

  // -----------------FIND Student BY ID-------------------

exports.getuserById = asyncHandler(async (req, res, next) => {
    const user = await user.findById(req.params.id);
  
    if (!user) {
      return next(new ErrorResponse("user not found"), 404);
    }
  
    res.status(200).json({
      success: true,
      data: user,
    });
  });

  // -----------------DELETE STUDENT------------------------

exports.deleteUser = asyncHandler(async (req, res, next) => {
    const user = await Student.findById(req.params.id);
  
    if (!student) {
      return next(new ErrorResponse('No user found '), 404);
    }
  
    await user.remove();
  
    res.status(200).json({
      success: true,
      count: user.length,
      data: {},
    });
  });