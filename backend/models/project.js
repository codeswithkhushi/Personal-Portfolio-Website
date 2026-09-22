const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    github: {
        type: String,
        default: ""
    },

    demo: {
        type: String,
        default: ""
    }

});

module.exports = mongoose.model("Project", projectSchema);