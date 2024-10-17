import { Schema,model } from "mongoose"; //importamos schema y model desde mongoose

let collection = "products" //Definimos una coleccion, como se agruparan los datos 
let schema = new Schema({
   name:{type:String,required:true},
   brand:{type:String,required:true},
   type:{type:String,required:true},
   price:{type:Number,required:true},
   available:{type:Boolean,required:true},
},{
  timestamps:true
})

let Product = model(collection,schema) //Modelo a que coleccion pertenece y datos, cual es el esquema de cada modelo

export default Product