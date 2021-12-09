import express from 'express';
import 'dotenv/config';
import { CronJob } from 'cron';
import assignNewTicket from './src/controllers/ticketAssignmentController.js';
import shiftRota from './src/routes/shiftRota.js';


const app = express();
app.use(express.json());
app.use('/api/shiftRota', shiftRota);


console.log('App started at '+ new Date().toLocaleString())

let lastAssignedUserId = 0;

app.listen(process.env.PORT, () => {
     console.log(`listening on ${process.env.PORT}`)
})

const job = new CronJob('1/10 * * * * *',  async function () {
    lastAssignedUserId = await assignNewTicket('./src/lastAssignmentTimestamps.csv', lastAssignedUserId);
});
job.start();
