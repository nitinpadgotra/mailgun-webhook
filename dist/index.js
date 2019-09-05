/*import * as express from 'express';
import { webHookController } from 'webHook.controller';

export class webHookRoutes {

    public router = express.Router();
    public webHookController: webHookController = new webHookController();

    constructor() {

        this.intializeRoutes();
    }

    public intializeRoutes() {
        this.router.post('/', this.webHookController.dumpRequest);
    }

} */
export class webHookRoutes {
    routes(app) {
        app.route('/')
            .get((req, res) => {
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            });
        });
    }
}
//# sourceMappingURL=index.js.map