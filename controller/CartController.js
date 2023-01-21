const cartSchema  =require('../model/CartSchema');

exports.createCart = (req,res)=>{

    const cart = new cartSchema(req.body);
    cart.save((err,success)=>{
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

exports.getAllCart = (req,res)=>{


        cartSchema.find().populate('products').exec((err,success)=>{

            if(err){
                res.status(500).json({
                    message: "Error in getting cart",
                })
            }
            else{
                res.status(200).json({
                    message: "Cart fetched successfully",
                    data: success
                })
            }
        })

}
exports.getCartById = (req,res)=>{


    cartSchema.findById(req.params.id).populate('user').populate('products').exec((err,data)=>{
        if(err){
            res.status(500).json({
                message: "Error in getting cart",
            })
        }
        else{
            res.status(200).json({
                message: "Cart fetched successfully",
                data: data
            })
        }
    })


}