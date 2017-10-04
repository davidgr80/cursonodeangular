/**
 * Created by drodriguez on 04/10/17.
 */
'use strict'

function getFavorito(req, res) {
    var favoritoId = req.params.id;
    res.status(200).send({data: favoritoId});
}
function getFavoritos(req, res) {

}
function saveFavorito(req, res) {
    var params = req.body;
    res.status(200).send({favorito: params});
}
function updateFavorito(req, res) {
    var params = req.body;
    res.status(200).send({favorito: params});
}
function deleteFavorito(req, res) {
    var favoritoId = req.params.id;
    res.status(200).send({data: favoritoId});
}


module.exports = {
    getFavorito,
    getFavoritos,
    saveFavorito,
    updateFavorito,
    deleteFavorito
}
