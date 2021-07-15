const productos = require('../models/producto')
const Control ={}

Control.leer=(req,res)=>{
    productos.findAll().then(productos => {
        res.json(productos);})     
}

//Control.registrar=(req,res)=>{
 //   productos.create({
   //     nombre: req.body.nombre,
     //   categoria: req.body.categoria,
       // precio: req.body.precio,
        //cantidad: req.body.cantidad
    //}).then(productos =>{
    //    res.json(productos)
    //})
    //console.log('Producto registrado')
//}

Control.crear=async(req,res)=>{
    const {nombre,categoria,precio,cantidad}=req.body
    const nuevoRegistro = new productos({
        nombre,
        categoria,
        precio,
        cantidad
    })

    await nuevoRegistro.save()
    res.json({
        mensaje: 'Producto Guardado'
    })
}

Control.actualizar=(req,res)=>{
    res.send("Listo para actualizar ?!")
}

Control.eliminar=(req,res)=>{
    res.send("Listo para eliminar ?!")
}

module.exports = Control;