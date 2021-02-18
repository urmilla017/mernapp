const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true
})
.then(()=>{
    console.log("connected to db");
})
.catch((err)=>{
    console.log("error:",err);
})

const User = mongoose.model('user', {
    username: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
});

const Article = mongoose.model('articles', {
    title: {
        type: String,
        required: true,
        trim: true
    },
    subtitle: {
        type: String,
        required: false,
    },
    type: {
        type: String,
        required: true,
    },
    publication: {
        type: String,
        required: false,
    },
    date: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: true,
    },
    articleURL: {
        type: String,
        required: false,
    },
    imageURL: {
        type: String,
        required: false,
    }
});