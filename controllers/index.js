 function rutaGet(req, res)  {
    res.status(200).send("Ruta que hace la petision GET")
}

  function rutaPost(req, res)  {
    res.status(200).send("Ruta que hace la petision POST")
}


function rutaPut(req, res) {
    res.status(200).send("Ruta que hace la petision PUT")
}

 function rutaDelete(req, res) {
    res.status(200).send("Ruta que hace la petision DELETE")
}

module.exports = {
    rutaGet, 
    rutaPost,
    rutaPut,
    rutaDelete
}