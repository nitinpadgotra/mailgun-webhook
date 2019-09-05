import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;
export const webHookSchema = new Schema({
    event: { type: String, default: '' },
    recipient: { type: String, default: '' },
    signature: {
        "timestamp": { type: String, default: '' },
        "token": { type: String, default: '' },
        "signature": { type: String, default: '' },
    },
    eventData: { type: String, default: '' },
    created_at: { type: Number, default: Date.now }
});
//# sourceMappingURL=webHook.model.js.map