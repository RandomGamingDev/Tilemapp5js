new p5(p => {
    let canvas;
    let texture_atlas;
    let tilemap;

    p.preload = function () {
        texture_atlas = p.loadImage("https://raw.githubusercontent.com/RandomGamingDev/Tilemapp5js/main/documentation/tilemap.png");
    }

    p.setup = function () {
        // Create the canvas to draw onto
        canvas = p.createCanvas(700, 400);
        canvas.parent("sketch-holder");
        p.fill(255);
        p.textFont("Arial");

        // Create the tilemap (works in instance mode like this :D)
        tilemap = new Tilemap([0, 0], [p.width, p.height], [28, 16], texture_atlas, [], [0, 0], p);
        // Create a list containing the tile coordinates and size
        for (let i = 0; i < 20; i++)
            for (let j = 0; j < 20; j++)
                tilemap.tiles.push([j * 64, i * 64, 64, 64])

        // Load the tilemap from the Tiled file
        const tiled_tilemap = 
            fetch("https://raw.githubusercontent.com/RandomGamingDev/Tilemapp5js/main/documentation/example-tilemap.json", {cache: "no-cache"})
                .then(res => res.json())
                .then(json => {
                    const data = json["layers"][0]["data"];
                    for (let i = 0; i < tilemap.res[0]; i++)
                        for (let j = 0; j < tilemap.res[1]; j++)
                            tilemap.tilemap[i][j] = data[j * tilemap.res[0] + i];
                });

    };

    p.draw = function () {
        p.background(0);

        // Display the tilemap and measure the time
        const start = performance.now();
        tilemap.display();
        const render_time = performance.now() - start;

        // Draw text showing how much time it took to render
        p.text(`Render Time (ms): ${ render_time }`, 10, 20);
    };
});