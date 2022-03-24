import express from 'express';
import podcastsController from '../controllers/podcastsController.js';
import userController from '../controllers/userController.js';
import secureRoute from '../middleware/secureRoute.js'
import commentController from '../controllers/commentController.js';
const router = express.Router();

router
  .route('/');

router
  .route('/podcasts/')
  .get(podcastsController.getAllPodcasts)
  .post(secureRoute, podcastsController.createPodcast);

router
  .route('/podcasts/:id')
  .get(podcastsController.getPodcastById)
  .put(secureRoute, podcastsController.updatePodcast) // user who added only
  .delete(secureRoute, podcastsController.deletePodcast); // user who added only

router.route('/podcasts/:id/comments')
  .post(secureRoute, commentController.createComment)


router
  .route('/podcasts/:id/comments/:commentId')
  .delete(secureRoute, commentController.deleteComment)
  .put(secureRoute, commentController.updateComment);
// .put(secureRoute, commentsController.updateComment);

router.route('/register').post(userController.registerUser);

router.route('/login').post(userController.loginUser);

export default router;
