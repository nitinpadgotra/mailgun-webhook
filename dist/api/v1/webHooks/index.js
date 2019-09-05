import * as express from 'express';
import { webHookController } from './webHook.controller';
import { universalFunctions } from '../../../utils/universalFunctions';
export class webHookRoutes {
    constructor() {
        this.router = express.Router();
        this.webHookController = new webHookController();
        this.universalFunction = new universalFunctions();
        this.intializeRoutes();
    }
    intializeRoutes() {
        this.router.post('/webhook/', this.universalFunction.verifyWebHook, this.webHookController.dumpRequest);
        this.router.get('/webhook/', this.webHookController.getWebHooksData);
    }
}
//# sourceMappingURL=index.js.map