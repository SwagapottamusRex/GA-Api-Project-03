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
    const userId = {
      ...req.body,
      createdBy: req.currentUser._id
    }
    const podcast = await Podcast.create(userId);


    return res.status(201).json(podcast);
  } catch (err) {
    console.log(err);
  }
};

const deletePodcast = async (req, res, next) => {
  try {
    const id = req.params;
    const podcast = await Podcast.findByIdAndDelete(req.params.id);

    if (!podcast) {
      return res.status(404).send({ message: 'Podcast not found' });
    }


    if (!podcast.createdBy.equals(req.currentUser._id)) {
      return res
        .status(401)
        .send({
          message: 'Unathorized action, you are not the owner of the podcast',
        });
    }

    return res
      .status(200)
      .json({ message: 'Successfully deleted podcast ' + req.params.id });
  } catch (err) {
    next(err);
  }
};

const updatePodcast = async (req, res) => {
  try {
    const {id}  = req.params
    const podcast = await Podcast.findById(id);
    if (!podcast) {
      return res.status(404).send({ message: 'Podcast not found' });
    }
  

    if (!podcast.createdBy.equals(req.currentUser._id)) {
      return res
        .status(401)
        .send({
          message: 'Unathorized action, you are not the owner of the podcast',
        });
    }

    podcast.set(req.body);
    const savedPodcast = await podcast.save();
    return res.status(200).json(savedPodcast);
  } catch (err) {
    console.log(err);
  }
};


async function getPodcastByTitle(req, res, next) {
  console.log('QUERY BATMAN', req.query)
  // try {
  //   const { q } = req.query;
  //   console.log('HEY ROBIN, Q IS: ', q);
  //   const regex = new RegExp(q, 'i');

  //   const query = await Podcast.find();
  //   query.where({
  //     $or: [{ title: regex }, { description: regex }],
  //   });

  //   const movies = query;

  //   console.log('HEY ROBIN, MOVIES IS: ', movies);
  //   return res.status(200).json(movies);
  // } catch (err) {
  //   next(err);
  // }
}



export default {
  getAllPodcasts,
  getPodcastById,
  createPodcast,
  deletePodcast,
  updatePodcast,
  getPodcastByTitle,
};
