import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const webHookSchema = new Schema({
    event: { type: String, default:''},
    recipient: { type: String, default:''},
    signature: {
        "timestamp" : { type: String, default: '' },
        "token" : { type: String, default: '' },
        "signature" : { type: String, default: '' },

    },
    eventData: { type: String, default: '' },
    created_at: { type: Number, default: Date.now }
});

export const webHookModel = mongoose.model('webhooks', webHookSchema);
