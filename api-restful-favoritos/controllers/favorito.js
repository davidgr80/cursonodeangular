/**
 * Created by drodriguez on 04/10/17.
 */
'use strict'

var Favorito = require('../models/favorito');

function getFavorito(req, res) {
    var favoritoId = req.params.id;
    Favorito.findById(favoritoId,(err, favorito) => {
        if(err){
            res.status(500).send({message: 'Error al listar el favorito'});
        } else {
            res.status(200).send({favorito});
        }
    })
}
function getFavoritos(req, res) {
    Favorito.find({},(err,favoritos) => {
        if(err){
            res.status(500).send({message: 'Error al listar los favoritos'});
        } else {
            res.status(200).send({favoritos});
        }
    })
}

function saveFavorito(req, res) {
    var favorito = new Favorito();
    var params = req.body;
    favorito.title = params.title;
    favorito.description = params.description;
    favorito.url = params.url;

    favorito.save((err,favoritoStored) => {
        if(err){
            res.status(500).send({message: 'Error al guardar el favorito'});
        } else {
            res.status(200).send({favorito: favoritoStored});
        }
    })
}
function updateFavorito(req, res) {
    var favoritoId = req.params.id;
    var update = req.body;
    Favorito.findByIdAndUpdate(favoritoId, update, (err, favoritoUpdated) => {
        if(err){
            res.status(500).send({message: 'Error al actualizar el favorito'});
        } else {
            res.status(200).send({favoritoUpdated});
        }
    })
}

function deleteFavorito(req, res) {
    var favoritoId = req.params.id;

    Favorito.findById(favoritoId, (err,favorito) => {
        if(err) {
            res.status(500).send({message: 'Error al borrar favorito'});
        } else {
            favorito.remove((err) => {
                if(err){
                    res.status(500).send({message: 'No se pudo eliminar el favorito'});
                } else {
                    res.status(200).send({message: 'El favorito fue eliminado con exito'});
                }
            });
        }
    });
}


module.exports = {
    getFavorito,
    getFavoritos,
    saveFavorito,
    updateFavorito,
    deleteFavorito
}
