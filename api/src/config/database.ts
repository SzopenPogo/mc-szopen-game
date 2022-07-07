import mongoose from 'mongoose';
import 'colors';
import { connectionURL } from '../constants/app/database';

const connectDatabase = async () => {
  try {
    const connection = await mongoose.connect(connectionURL);
    console.log(`> MongoDB connected: ${connection.connection.host}`.cyan.underline.bgBlack.bold);
    console.log(`> MongoDB name: ${connection.connection.name}`.cyan.underline.bgBlack.bold);
    
    
  } catch (error) {
    console.log(`Error: ${error}`.red.underline.bold);
    process.exit(1);
  }
}

export default connectDatabase;