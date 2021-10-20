const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://juangomezp:Gala2525@otldbtestingarea.3tc7z.mongodb.net/otl-calendars-test')
    .then(db => console.log("Db is conected"))
    .catch(error => console.error)