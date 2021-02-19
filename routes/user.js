const express = require("express");
const  router = express.Router();

const {
  createUser,
  getuser, 
  deleteUser,
  
  getuserById,
  
  } = require("../controllers/user");

  const { protect } = require("../middleware/auth");

  router
  .route("/")
  .get(protect,getuser)
  .post(protect,createUser);

//   router
//   .route("/:id/photo")
//   .put(protect, UserPhotoUpload);

  router
  .route("/:id")
  .get(protect,getuserById)
  .delete(protect, deleteUser);


  module.exports = router

