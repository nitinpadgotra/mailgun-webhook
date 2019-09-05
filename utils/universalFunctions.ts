import { Request, Response, NextFunction } from 'express';
import * as crypto from "crypto-js";
import * as env from "../env.json";
import * as config from "../config/app.json";

const mailGunApiKey = config[env.instance].mailGunApiKey;
var key = '';
export class universalFunctions {

    public verifyWebHook (req: Request, res: Response, next: NextFunction)  {

        key = crypto.HmacSHA256(req.body.signature.timestamp + req.body.signature.token, mailGunApiKey);

        if(req.body.signature.signature == key) {
            next()
        } else {
            res.status(406).json({status: 'error', message: 'source not verified'})
        }
    }

}
