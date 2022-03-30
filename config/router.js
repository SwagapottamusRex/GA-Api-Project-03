import express from 'express';
import podcastsController from '../controllers/podcastsController.js';
import userController from '../controllers/userController.js';
import secureRoute from '../middleware/secureRoute.js';
import commentController from '../controllers/commentController.js';
import user from '../models/user.js';
const router = express.Router();


router
  .route('/podcasts')
  .get(podcastsController.getAllPodcasts)
  .post(secureRoute, podcastsController.createPodcast);

router
  .route('/user/:id')
  .get(secureRoute, userController.getUserById)
  .put(userController.updateUser);

router
  .route('/users')
  .get(secureRoute, userController.getAllUsers);

//Put before /:id
router
  .route('/podcasts/search')
  .get(podcastsController.getPodcastByTitle);

router
  .route('/podcasts/:id')
  .get(podcastsController.getPodcastById)
  .put(secureRoute, podcastsController.updatePodcast) // user who added only
  .delete(secureRoute, podcastsController.deletePodcast); // user who added only

router.route('/podcasts/:id/comments')
  .post(secureRoute, commentController.createComment);


router
  .route('/podcasts/:id/comments/:commentId')
  .delete(secureRoute, commentController.deleteComment)
  .put(secureRoute, commentController.updateComment);



router.route('/register').post(userController.registerUser);

router.route('/login').post(userController.loginUser);

export default router;
