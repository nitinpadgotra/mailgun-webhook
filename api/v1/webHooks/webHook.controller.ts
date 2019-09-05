import { Request, Response } from 'express';
import { webHookModel } from './webHook.model';

export class webHookController {

    public dumpRequest (req: Request, res: Response)  {

        webHookModel({
            signature: req.body.signature,
            event: req.body['event-data'].event,
            recipient: req.body['event-data'].recipient,
            eventData: JSON.stringify(req.body['event-data']),
        }).save((err, result) => {
            if(!err) {
                res.status(200).json({ status: 'success' , message: 'record added successfully'});
            } else {
                console.log('error', err);
                res.status(400).json({ status: 'error' , message: 'error adding record to database'});
            }
        });

    }

    public getWebHooksData(req: Request, res: Response) {

        webHookModel.find({}, (err, result) => {
            if(!err) {
                res.status(200).json({ status: 'success' , message: 'Records fetched successfully', data: result});
            } else {
                console.log('error', err);
                res.status(400).json({ status: 'error' , message: 'error getting records from database'});
            }
        });

    }

}

