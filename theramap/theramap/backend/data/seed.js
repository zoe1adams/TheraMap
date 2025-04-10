const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');
const Therapist = require('./models/Therapist');

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedTherapists = async () => {
  const data = JSON.parse(fs.readFileSync('./therapists.json', 'utf-8'));

  try {
    await Therapist.deleteMany();
    await Therapist.insertMany(data);
    console.log('Therapist data seeded!');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedTherapists();
