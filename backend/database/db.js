const mongoose = require("mongoose");

const uri = "mongodb+srv://GUNEY:Galatasaray19@eticaretedb.ykewixf.mongodb.net/?appName=ETicareteDb";
const connection = () =>{
    mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=> console.log("MongoDb bağlantısı başarılı"))
    .catch((err)=> console.log("Bağlantı Hatası! Hata: "+err.message))
}
module.exports =connection;