const Alumno = require(`../models/alumno`)

async function listar(req, res){
    try {
        const arrayAlumnos = await Alumno.find();
        res.render("alumno", {
            listaAlumnos: "Listado de alumnos",
            arrayAlumnos
        })
    } catch (error) {
        console.log('error',error)
    }
}

async function registrar(req, res){
    const body = req.body
    try {
        await Alumno.create(body)
        res.redirect('/alumnos/listar')
    } catch (error) {
        console.log('error',error)
    }
}

module.exports = {
    listar,
    registrar
};