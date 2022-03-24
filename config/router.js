import express from 'express';
import podcastsController from '../controllers/podcastsController.js';
const router = express.Router();

router.home('/');

router
  .route('/podcasts/')
  .get(podcastsController.getAllPodcasts)
  .post(podcastsController.createPodcast);

router
  .route('/podcasts/:id')
  .get(podcastsController.gePodcastById)
  .put(podcastsController.updatePodcast) // user who added only
  .delete(podcastsController.deletePodcast); // user who added only

router.route('/podcasts/:id/comments');
// .post(commentsController.createComment);

router.route('/podcasts/:id/comments/:commentId');
// .delete(secureRoute, commentsController.deleteComment)
// .put(secureRoute, commentsController.updateComment);

// router.route('/register').post(userController.registerUser);

// router.route('/login').post(userController.loginUser);

export default router;
