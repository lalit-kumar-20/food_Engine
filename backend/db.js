


const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017';

module.exports = async function () {
  try {
    const connection = await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log('Connected to MongoDB');
    
    if (!connection) {
      throw new Error('MongoDB connection not established yet.');
    }

    const db = connection.connection.db; // Access the database instance

    const foodCollection = db.collection(db.food_items);
    console.log(foodCollection)
    const data = await foodCollection.find({}).toArray();

    const categoryCollection = db.collection('foodcategary');
    const Catdata = await categoryCollection.find({}).toArray();

    return { data, Catdata };
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    throw err; // Rethrow the error for handling at a higher level if needed.
  }
};