const mongoose = require('mongoose');

const mongoURL = 'mongodb+srv://krishnapate299:vkvcHxxTeOi9H4PT@cluster0.5amlvzd.mongodb.net/HungryGo?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURL);
        console.log('connected');
        const fetched_data = await mongoose.connection.db.collection("food");
        fetched_data.find({}).forEach(element => {
            
                            console.log(element);
                        });
        
    } catch (err) {
        console.error('problem', err);
    }
};

module.exports = mongoDB;




// const mongoose = require('mongoose');

// const mongoURL = 'mongodb+srv://krishnapate299:vkvcHxxTeOi9H4PT@cluster0.5amlvzd.mongodb.net/HungryGo?retryWrites=true&w=majority&appName=Cluster0';

// const mongoDB = async () => {
//     try {
//         await mongoose.connect(mongoURL);
//         console.log('connected');
//         const fetched_data = await mongoose.connection.db.collection("food").find({});
//         fetched_data.forEach((doc) => {
//             console.log(doc);
//         });
//     } catch (err) {
//         console.error('problem', err);
//     }
// };

// module.exports = mongoDB;



// const mongoose = require('mongoose');

// const mongoURL = 'mongodb+srv://krishnapate299:vkvcHxxTeOi9H4PT@cluster0.5amlvzd.mongodb.net/HungryGo?retryWrites=true&w=majority&appName=Cluster0';

// const mongoDB = async () => {
//     try {
//         await mongoose.connect(mongoURL);
//         console.log('connected');
//         const fetched_data = await mongoose.connection.db.collection("food");
//         fetched_data.find({}).toArray((err, data) => {
//             if (err) {
//                 console.log("__", err);
//             } else {
//                 console.log(data);
//             }
//         });
//     } catch (err) {
//         console.error('problem', err);
//     }
// };
     
// module.exports = mongoDB;

// const mongoose = require('mongoose');

// const mongoURL='mongodb+srv://krishnapate299:vkvcHxxTeOi9H4PT@cluster0.5amlvzd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';



// const mongoDB =async()=>{
//    await mongoose.connect(mongoURL,{useNewUrlParser:true},(err,result)=>{

//     if(err){
//         console.log('problem');
//     }
//         console.log('connected');
// });
// }


// module.exports = mongoDB;