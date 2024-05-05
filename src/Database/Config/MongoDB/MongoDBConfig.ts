import { DatabaseConfig } from '../IDatabaseConfig';
import connectMongoDB from './Database';

export class MongoConfig implements DatabaseConfig {
  async initialize(): Promise<void> {
    await connectMongoDB()
    console.log('MongoDB database synchronized.');
  }
}