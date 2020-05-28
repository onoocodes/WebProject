const mongoose = require('mongoose');
const applicationSchema = mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    discription : {
        type : String,
        require : true
    }

});

module.exports = mongoose.model('applications',applicationSchema);