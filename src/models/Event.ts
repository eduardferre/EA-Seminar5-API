import {Schema, model} from 'mongoose';

const EventSchema = new Schema({
    id: {type:String, required:true},
    name: {type: String, required:true},
    place: {type: String, required:true},
    eventDate: {type: String, required:true},
    creationDate: {type: Date, default:Date.now}
})
export default model('Event', EventSchema);