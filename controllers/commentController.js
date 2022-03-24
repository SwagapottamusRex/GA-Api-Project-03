import Podcast from '../models/podcasts.js';

const createComment = async (req, res, next) => {
  try {
    // ! Populating comments.createdBy
    const podcast = await Podcast.findById(req.params.id);

    if (!podcast) {
      return res.status(404).send({ message: 'Podcast not found' }); 
    }

    const newComment = {
      ...req.body,
      // ! We've changed createdBy to just pass the user id.
      createdBy: req.currentUser._id,
    };

    podcast.comments.push(newComment);
    const savedPodcast = await podcast.save();

    return res.status(201).json(savedPodcast);
  } catch (error) {
    next(error);
  }
};

const deleteComment = async (req, res, next) => {
  try {
    const { id, commentId } = req.params;

    const podcast = await Podcast.findById(id);

    if (!podcast) {
      return res.status(404).send({ message: 'Podcast not found' });
    }

    const comment = podcast.comments.id(commentId);

    if (!comment) {
      return res.status(404).send({ message: 'Comment not found' });
    }

    if (!comment.createdBy.equals(req.currentUser._id)) {
      return res.status(401).send({ message: 'Unauthorized action' });
    }

    comment.remove();

    const savedPodcast = await podcast.save();

    return res.status(200).send(savedPodcast);
  } catch (error) {
    next(error);
  }
};

const updateComment = async (req, res, next) => {
  try {
    const { id, commentId } = req.params;
    const podcast = await Podcast.findById(id);

    if (!podcast) {
      return res.status(404).send({ message: 'Podcast not found' });
    }

    const comment = podcast.comments.id(commentId);

    if (!comment) {
      return res.status(404).send({ message: 'Comment not found' });
    }

    if (!comment.createdBy.equals(req.currentUser._id)) {
      return res.status(401).send({ message: 'Unauthorized action' });
    }

    comment.set(req.body);

    const savedPodcast = await podcast.save();
    return res.status(200).send(savedPodcast);
  } catch (error) {
    next(error);
  }
};

export default {
  createComment,
  deleteComment,
  updateComment,
};
