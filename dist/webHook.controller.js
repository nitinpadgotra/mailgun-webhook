import { webHookSchema } from './webHook.model';
export class webHookController {
    dumpRequest(req, res) {
        webHookSchema({
            signature: req.signature,
            event: req['event-data'].event,
            recipient: req['event-data'].recipient,
            eventData: JSON.stringify(req['event-data']),
        }).save((err, res) => {
            if (err) {
                res.status(200).json({ status: 'success', message: 'record added successfully' });
            }
            else {
                console.log('error', err);
                res.status(400).json({ status: 'error', message: 'error adding record to database' });
            }
        });
    }
}
//# sourceMappingURL=webHook.controller.js.map