
import mongoose,{Schema, model} from "mongoose";

const ShowSchema= new Schema({
    movie:{type:String,requird:true, ref:"Movie"},
    showDateTime:{type:Date ,requird:true},
    showPrice:{type:Number,requird:true},
    occuopiedSeats:{type:Object,default:{}},
   // user:{type:Schema.Types.ObjectId, ref:"User",required:true}
},{minimize :false})


export const Show= model("Show", ShowSchema);