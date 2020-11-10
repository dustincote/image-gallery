# React Gallery

## Installation
    * Fork and Clone the repository
    * Run npm install in your terminal
    * Create a database called react_gallery 
    * using the provided SQL in the database.sql file create the table and insert the data into the table
    * Run npm run server in your terminal
    * Open a second terminal and run npm run client
    * Visit localhost:3000 and have fun with the page(be sure to try and give a picture 2 "hearts")

## Description

This is my first attempt at a react project.  It is a simple image gallery that displays images with a "like" button "heart" button
and a trash can that will delete the image.

The "like" and "heart" buttons will perform an axios put to the server and update the server with a like or a heart for the
image the buttons are contained in.  Once the server is updated we will run an axios get request to refresh the numbers
on the dom.

The trash can will remove the image from the database which will remove it form the page.

The input fields are both required to be filled out before it will submit the form to the server.

use absolute URL to add a picture to the gallery.  The url and description will be stored in the database.

I used flexbox to make the page responsive to screen size.  It will attempt to put as many items
on one line as it can and additional items then get pushed down to the next line.


