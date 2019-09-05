/*
* @file: server.js  ain file to handle server creation and loading modules to server
* @date: 02/09/2019
* @author: Nitin Padgotra
* */

import * as express from 'express';
import * as http from "http";
import * as config from "./config/app.json";
import * as env from "./env.json";

import * as cors from "cors";
import DB from "./db";
import * as Promise from 'bluebird';
import * as Mongoose from 'mongoose';


class Server extends DB {
    public app: express.Application;
    public server;
    public port: number;

    constructor(controllers) {
        super(Promise, Mongoose, env, config);
        this.app = express();
        this.server = http.createServer(this.app);
        this.port = config[env.instance].port;

        this.initializeMiddlewares();
        this.initializeRoutes(controllers);
        this.initializeDatabase();
    }

    private initializeMiddlewares() {
        this.app.use(express.json());
        this.app.use(
            express.urlencoded({
                extended: false
            })
        );
        this.app.use(cors());

    }

    private initializeRoutes(Routes) {

        Routes.forEach((route) => {
            this.app.use('/api/v1', route.router);
        });

    }

    private initializeDatabase() {
        super.connectDB();
    }

    public start() {
        this.server.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }
}

export default Server;
