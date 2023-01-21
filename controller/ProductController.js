const ProductSchema = require('../model/ProductSchema');


exports.addProduct = (req, res) => {
    const product = new ProductSchema(req.body);
    product.save((err,success)=>{
        if(err){
            res.status(500).json({
                message: "Error in adding product",
            })
        }
        else{
            res.status(201).json({
                message: "Product added successfully",
                data: success
            })
        }
    })
}