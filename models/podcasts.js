import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema(
  {
    text: { type: String, required: true, maxLength: 300 },
    rating: { type: Number, required: true, min: 1, max: 5 },
    createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true }
);

const podcastSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true, maxLength: 100 },
  year: { type: Number, required: true },
  img: { type: String, required: true },
  duration: { type: Number, required: true },
  host: { type: String },
  guests: { type: String },
  genre: { type: String },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  comments: [commentSchema],
});

export default mongoose.model('Podcast', podcastSchema);
