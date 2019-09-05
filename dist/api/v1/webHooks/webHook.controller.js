import { webHookModel } from './webHook.model';
export class webHookController {
    dumpRequest(req, res) {
        webHookModel({
            signature: req.body.signature,
            event: req.body['event-data'].event,
            recipient: req.body['event-data'].recipient,
            eventData: JSON.stringify(req.body['event-data']),
        }).save((err, result) => {
            if (!err) {
                res.status(200).json({ status: 'success', message: 'record added successfully' });
            }
            else {
                console.log('error', err);
                res.status(400).json({ status: 'error', message: 'error adding record to database' });
            }
        });
    }
    getWebHooksData(req, res) {
        webHookModel.find({}, (err, result) => {
            if (!err) {
                res.status(200).json({ status: 'success', message: 'Records fetched successfully', data: result });
            }
            else {
                console.log('error', err);
                res.status(400).json({ status: 'error', message: 'error getting records from database' });
            }
        });
    }
}
//# sourceMappingURL=webHook.controller.js.map