const { model, Schema } = require("mongoose");

const CartSchema = new Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product" 
            },
            quantity: {
                type: Number,
                default: 1,
            },     
            _id: false     
        }, 
    ],
    deleted: {
        type: Boolean,
        default: false,
    }
},{
    versionKey: false
})


const Cart = model("CartSchema", CartSchema);

module.exports = Cart;