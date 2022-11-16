class Tilemap {
  constructor(off, size, res, img, tiles) {
    this.off = off;
    this.size = size;
    this.res = res;
    this.img = img;
    this.tiles = tiles;
    this.tilemap = [];
    for (let i = 0; i < this.res[0]; i++) {
      this.tilemap.push([]);
      for (let j = 0; j < this.res[1]; j++)
        this.tilemap[i].push(0);
    }
  }
  
  display() {
    push();
    for (let i = 0; i < this.res[0]; i++)
      for (let j = 0; j < this.res[1]; j++)
        if (this.tilemap[i][j] != 0) {
          let pixelSize = [this.size[0] / this.res[0], this.size[1] / this.res[1]];
          let currentTile = this.tiles[this.tilemap[i][j] - 1];
          image(
                this.img,
                this.off[0] + pixelSize[0] * i,
                this.off[1] + pixelSize[1] * j,
                pixelSize[0],
                pixelSize[1],
                currentTile[0],
                currentTile[1],
                currentTile[2],
                currentTile[3]
               );
        }
    pop();
  }
}