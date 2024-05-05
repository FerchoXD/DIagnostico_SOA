import mongoose from 'mongoose';
import "dotenv/config";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`);
    console.log('Conectado a MongoDB exitosamente.');
  } catch (error) {
    console.error('Error al conectar con MongoDB:', error);
  }
};

export default connectMongoDB;