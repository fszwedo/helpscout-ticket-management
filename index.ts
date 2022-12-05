var express = require('express')
var mongoose = require('mongoose')
var cors = require('cors');
require('dotenv').config()
import cron from 'cron'

import assignNewTickets from './src/controllers/ticketAssignmentController';
//import sendEmail1 from './src/controllers/sendEmailController';
import shiftRota from './src/routes/shiftRota';

//import filterTicketsByKeyword from 'src/services/zendesk/filterTicketsByKeyword';

import logModel from './src/models/logModel';
import LoggerRepository from './src/repositories/logRepository';
import LoggerService from './src/services/loggerService';

import shiftRotaModel from './src/models/shiftRotaModel';
import ShiftRotaRepository from './src/repositories/shiftRotaRepository';
import ShiftRotaService from './src/services/shiftRotaService';
import ShiftRotaController from './src/controllers/shiftRotaController';

import shiftChangeRequestModel from './src/models/shiftChangeRequestModel';
import ShiftChangeRepository from './src/repositories/shiftChangeRequestRepository';
import ShiftChangeService from './src/services/shiftChangeService';
import ShiftChangeController from './src/controllers/shiftChangeController';
import shiftChangeRoute from './src/routes/shiftChangeRequest';
import sendEmailstoAgents from './src/controllers/sendEmailController';

const shiftRota2 = new ShiftRotaService(new ShiftRotaRepository(shiftRotaModel));
const shiftRotaRepository = new ShiftRotaRepository(shiftRotaModel);
const shiftRotaService = new ShiftRotaService(shiftRotaRepository);
const shiftRotaController = new ShiftRotaController(shiftRotaService);


const shiftChangeRepository = new ShiftChangeRepository(shiftChangeRequestModel);
const shiftChangeService = new ShiftChangeService(shiftChangeRepository, shiftRotaRepository);
const shiftChangeController = new ShiftChangeController(shiftChangeService);
//
console.log('starting for ' + process.env.URL)

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/shiftRota', shiftRota(shiftRotaController));
app.use('/api/shiftChangeRequest', shiftChangeRoute(shiftChangeController)); 

const logger = new LoggerService(new LoggerRepository(logModel));

const mongooseConnection = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.MONGOLOGIN}:${process.env.MONGOPW}@cluster0.mgkhb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
    .then(() => console.log('Connected to MongoDB...'))
    .catch(error => console.error('Could not connect to MongoDB!', error))
}
mongooseConnection();

app.listen(process.env.PORT, () => {
     console.log(`listening on ${process.env.PORT}`)
})

logger.saveLog({
        type: 'info/restart',
        message: 'App started at '+ new Date().toUTCString()
    })

//const job = new cron.CronJob('1/10 * 6-22 * * *',  async function () {
 //   assignNewTickets(logger);
 
//});
//job.start();


//const emailJob = new cron.CronJob('0 12 * * 5',  async function () {
   sendEmailstoAgents(shiftRota2);
 
//});
//emailJob.start();