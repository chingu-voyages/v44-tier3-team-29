import {model, Schema, Types} from 'mongoose';

interface IPost{
    title: string;
    description: string;
    created_at : Date;
    //created_by?: string;
    //animal: Types.ObjectId;

}


const PostSchema: Schema = new Schema({
    title:{type:String,required: true},
    description:{type:String, required: true},
    created_at: {type:Date,default: Date.now},
   // animal: {type: Schema.Types.ObjectId, ref:'Animal'}
});


export const Post = model<IPost>('Post',PostSchema);




