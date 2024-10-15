 import { Schema,model } from "mongoose"; //importamos schema y model desde mongoose

 let collection = "stores" //Definimos una coleccion, como se agruparan los datos 
 let schema = new Schema({
    name:{type:String,required:true},
    address:{type:String,required:true},
    phone:{type:Number,required:true},
    openOnWeekends:{type:Boolean,required:true},
    employees:{type:Number,required:true},
 },{
   timestamps:true
 })

 let Store = model(collection,schema) //Modelo a que coleccion pertenece y datos, cual es el esquema de cada modelo

 export default Store