const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js')

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params.id);
    const galleryId = req.params.id;
    const queryText =`UPDATE "images" SET "likes"= likes+1 WHERE "id"=$1;`
    pool.query(queryText, [galleryId]).then(response => res.sendStatus(200)).catch(
        err => {
            console.log('ERROR in PUT to /gallery/like/:id', err);
            res.sendStatus(400);
        }
    )
    }); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    console.log('GET from /gallery');
    pool.query('SELECT * FROM "images"ORDER BY "id" ASC;').then(response=> res.send(response.rows)).catch(
        err=>{
            console.log('Error in GET:', err)
            res.sendStatus(400);
        })
    
}); // END GET Route

module.exports = router;