class Tilemap {
  constructor(pos, size, res, img, tiles, off = [0, 0], rdr = window) {
    this.pos = pos;
    this.size = size;
    this.res = res;
    this.img = img;
    this.tiles = tiles;
    
    this.tilemap = new Array(this.res[0]);
    for (let i = 0; i < this.res[0]; i++)
      this.tilemap[i] = new Array(this.res[1]).fill(0);
   
    this.off = off;
    
    this.rdr = rdr;
  }
  
  display() {
    push();
    for (let i = this.off[0]; i < this.res[0]; i++)
      for (let j = this.off[1]; j < this.res[1]; j++) {
        const tile = this.tilemap[i][j];
        if (tile == 0 || tile == undefined)
          continue;
        
        const pixelSize = new Array(this.size.length);
        for (let i = 0; i < this.size.length; i++)
          pixelSize[i] = this.size[i] / this.res[i];
        const dispTile = this.tiles[tile - 1];
        
        this.rdr.image(
          this.img,
          this.pos[0] + pixelSize[0] * i,
          this.pos[1] + pixelSize[1] * j,
          pixelSize[0],
          pixelSize[1],
          dispTile[0],
          dispTile[1],
          dispTile[2],
          dispTile[3]
        );
      }
    pop();
  }
}
