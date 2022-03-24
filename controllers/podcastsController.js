import Podcast from '../models/podcasts.js';

const getAllPodcasts = async (req, res) => {
  try {
    const podcasts = await Podcast.find();
    return res.status(200).json(podcasts);
  } catch (err) {
    console.log(err);
  }
};

const getPodcastById = async (req, res) => {
  try {
    const podcast = await Podcast.findById(req.params.id);
    !podcast ? res.status(404) : res.status(200).json(podcast);
  } catch (err) {
    console.log(err);
  }
};

const createPodcast = async (req, res) => {
  try {
    const podcast = await Podcast.create(req.body);
    return res.status(201).json(podcast);
  } catch (err) {
    console.log(err);
  }
};

const deletePodcast = async (req, res, next) => {
  try {
    const podcast = await Podcast.findByIdAndDelete(req.params.id);

    // if (!podcast.createdBy.equals(req.currentUser._id)) {
    //   return res
    //     .status(401)
    //     .send({
    //       message: 'Unathorized action, you are not the owner of the podcast',
    //     });
    // }

    return res
      .status(200)
      .json({ message: 'Successfully deleted podcast ' + req.params.id });
  } catch (err) {
    next(err);
  }
};

const updatePodcast = async (req, res) => {
  try {
    const podcast = await Podcast.findById(req.params.id);
    // if (!podcast.createdBy.equals(req.currentUser._id)) {
    //   return res
    //     .status(401)
    //     .send({
    //       message: 'Unathorized action, you are not the owner of the podcast',
    //     });
    // }

    podcast.set(req.body);
    const savedPodcast = await podcast.save();
    return res.status(200).json(savedPodcast);
  } catch (err) {
    console.log(err);
  }
};

export default {
  getAllPodcasts,
  getPodcastById,
  createPodcast,
  deletePodcast,
  updatePodcast,
};
