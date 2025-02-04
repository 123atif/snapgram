const postRouter = require("express").Router();
const { authenticateToken, isLoggedIn } = require("../middlewares/auth.js");
const upload = require("../middlewares/multer.js");
const {
  addPost,
  updatePost,
  deletePost,
  getAllPosts,
  getPostById,
  likePost,
} = require("../controllers/postController.js");

postRouter.post(
  "/add",
  authenticateToken,
  isLoggedIn,
  upload.single("file"),
  addPost
);
postRouter.put(
  "/update/:id",
  authenticateToken,
  isLoggedIn,
  upload.single("file"),
  updatePost
);

postRouter.delete("/delete/:id", authenticateToken, isLoggedIn, deletePost);
postRouter.get("/record", authenticateToken, isLoggedIn, getAllPosts);
postRouter.get("/record/:id", authenticateToken, isLoggedIn, getPostById);
postRouter.post("/like/:personId", authenticateToken, isLoggedIn, likePost);

module.exports = postRouter;
