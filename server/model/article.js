const mongoose = require('mongoose');

const Article = mongoose.model('Article', {
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

module.exports = Article;