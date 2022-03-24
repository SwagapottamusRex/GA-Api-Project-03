import express from 'express';
import podcastsController from '../controllers/podcastsController.js';
import userController from '../controllers/userController.js';
const router = express.Router();

router
  .route('/');

router
  .route('/podcasts/')
  .get(podcastsController.getAllPodcasts)
  .post(podcastsController.createPodcast);

router
  .route('/podcasts/:id')
  .get(podcastsController.getPodcastById)
  .put(podcastsController.updatePodcast) // user who added only
  .delete(podcastsController.deletePodcast); // user who added only

router.route('/podcasts/:id/comments');
// .post(commentsController.createComment);

router.route('/podcasts/:id/comments/:commentId');
// .delete(secureRoute, commentsController.deleteComment)
// .put(secureRoute, commentsController.updateComment);

router.route('/register').post(userController.registerUser);

router.route('/login').post(userController.loginUser);

export default router;
