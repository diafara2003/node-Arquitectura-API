const mongoose = require('mongoose');

let EnumState = { values=["Aprobado", "Rechazado"] };

const LoansSchema = new mongoose.Schema({
    userId: {
        type: Number
    },

    amount: {
        type: Number
    },
    dateStart: {
        type: Date,

    },
    State: {
        type: String,
        default: "Aprobado",
        enum: EnumState
    },
    PaidLoan: {
        type: Boolean
    }
});

module.exports = Loans = mongoose.model("loans", LoansSchema);