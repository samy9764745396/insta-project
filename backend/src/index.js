const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');


dotenv.config();
//connect to DB
mongoose.connect("mongodb+srv://sameerpawar:shivvaa@1@cluster0.ovfxycb.mongodb.net/insta?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to DB')
})   // change this part
// mongodb+srv://sameerpawar:shivvaa@1@cluster0.ovfxycb.mongodb.net/?retryWrites=true&w=majority




app.listen(process.env.PORT || 5000, () => console.log('Server running......'));
