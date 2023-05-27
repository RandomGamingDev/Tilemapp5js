# Tilemapp5js
A tilemap library for p5 js

To use the library simply create a new instance of the pixy class with the position, size, resolution, image and tile list, (optional) offset (manages where the tile rendering starts from and is by default [0, 0]) (they're all arrays with 2 elements, except for the last 2, with the 2nd last being an image and the last being a 2d array with each array of the main array having a length of 4) (put the p5.js instance that you want to use in the last parameter slot if you want to use p5.js instances) and then just change the Pixy.pixels array and execute Tilemap.display() in order to display!

To use it you can simply include https://cdn.jsdelivr.net/gh/RandomGamingDev/Tilemapp5js/tilemap.js in your HTML file! If you want to you can also just download the file and include it in your HTML file that way.

btw stuff updates so remember to specify a version/commit for your library if you want to use a link and don't want your code to automatically update to the newest version of the library
