import {Schema, model} from 'mongoose';

const UserSchema = new Schema({
    id: { type:String, required: true },
    name: { type: String, required: true },
    age: { type: String, required: true },
    password: { type: String, required: true },
    creationDate: { type: Date, default:Date.now },
    event: { type: Schema.Types.ObjectId, ref: 'Event' }
})
export default model('User', UserSchema);