const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js')

// DO NOT MODIFY THIS FILE FOR BASE MODE

//post to add image url to database
router.post('/', (req, res) =>{
    console.log('POST request');
    console.log(req.body)
    const queryText=`INSERT INTO "images" ("path","description") VALUES ($1,$2)`
    pool.query(queryText,[req.body.path, req.body.description]).then(response => res.sendStatus(201)).catch(err => {
        console.log('ERROR in POST to /gallery', err);
        res.sendStatus(400);
    })
})



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

router.put('/heart/:id', (req, res) => {
    console.log(req.params.id);
    const galleryId = req.params.id;
    const queryText = `UPDATE "images" SET "hearts"= hearts+1 WHERE "id"=$1;`
    pool.query(queryText, [galleryId]).then(response => res.sendStatus(200)).catch(
        err => {
            console.log('ERROR in PUT to /gallery/like/:id', err);
            res.sendStatus(400);
        }
    )
});

module.exports = router;