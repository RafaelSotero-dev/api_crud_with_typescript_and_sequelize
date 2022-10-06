import app from './app';
import dotenv from 'dotenv';
import dbInit from './database';

dotenv.config();

const port: number = Number(process.env.PORT) || 3000;

app.listen(port, () => {
  dbInit();
  console.log(`Server up on port ${port}!`);
});
