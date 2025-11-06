



// Add new product

const addProduct = async (req,res)=>{
    res.json({msg:"Product ADD API WORKING"})
}
// list all product

const listProduct = async (req,res)=>{
    res.json({msg:"Product LISTING API WORKING"})
    
}
// Delete  product

const deleteProduct = async (req,res)=>{
    res.json({msg:"Product DELETE API WORKING"})

}
// Single Product
const singleProduct = async (req,res)=>{
    res.json({msg:"Single Product API WORKING"})

}


export {addProduct,listProduct,deleteProduct,singleProduct}