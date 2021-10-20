const { model, Schema } = require('mongoose');

const roomSchema = new Schema({
    name: {
        type: String,
        required: true
    },
},{
    timestamps: true,
    versionKey: false,
}
);

module.exports = model("Room", roomSchema);