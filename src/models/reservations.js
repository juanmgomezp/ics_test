const { model, Schema } = require('mongoose');

const reservationSchema = new Schema({
    guest: {
        type: String,
        required: true
    },
    start: {
        type: String,
        required: true
    },
    end: {
        type: String,
        required: true
    },  
    sequence: {
        type: Number,
        required: true        
    },
    room: {
        ref: "Room",
        type: Schema.Types.ObjectId,
        required: true,
    }    
},{
    timestamps: true,
    versionKey: false,
}
);

module.exports = model("Reservation", reservationSchema);