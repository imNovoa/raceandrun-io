(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("nivel 1 tiledset format",
{ "height":200,
 "infinite":false,
 "layers":[
        {
         "id":2,
         "image":"level 1 beta.png",
         "name":"fondo",
         "opacity":1,
         "type":"imagelayer",
         "visible":true,
         "x":0,
         "y":0
        }, 
        {
         "height":200,
         "id":1,
         "name":"collisions",
         "opacity":0.6,
         "type":"tilelayer",
         "visible":true,
         "width":1500,
         "x":0,
         "y":0
        }],
 "nextlayerid":3,
 "nextobjectid":1,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.2.0",
 "tileheight":4,
 "tilesets":[
        {
         "firstgid":1,
         "source":"collision.tsx"
        }],
 "tilewidth":4,
 "type":"map",
 "version":1.2,
 "width":1500
});