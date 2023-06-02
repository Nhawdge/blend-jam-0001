// import k from '../kaboom';
// import assets from '../assets';
// import Helicopter from '../Entities/Helicopter.js';
// import Player from '../Entities/Player.js';

// export default function Game() {
//   const {
//     add,
//     pos,
//     origin,
//     width,
//     height,
//     sprite
//   } = k;

//   const world = [[
//     "qwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwe",
//     "a                                                              ",
//     "a                                                              ",
//     "a                                                              ",
//     "a                                                              ",
//     "a                                                              ",
//     "a           x                                                  ",
//     "a          xxx                                                 ",
//     "a         xxxxx                                                 ",
//     "zxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxc"
//   ]]

//   const leveloptions = {
//     width: 32,
//     height: 32,
//     q: () => [
//       sprite("tiles", { frame: 3, width: 32, height: 32 }),
//       area(), solid(), "block"
//     ],
//     w: () => [
//       sprite("tiles", { frame: 4, width: 32, height: 32 }),
//       area(), solid(), "block"
//     ],
//     e: () => [
//       sprite("tiles", { frame: 5, width: 32, height: 32 }),
//       area(), solid(), "block"
//     ],

//     a: () => [
//       sprite("tiles", { frame: 12, width: 32, height: 32 }),
//       area(), solid(), "block"
//     ],
//     d: () => [
//       sprite("tiles", { frame: 6, width: 32, height: 32 }),
//       area(), solid(), "block"
//     ],

//     z: () => [
//       sprite("tiles", { frame: 7, width: 32, height: 32 }),
//       area(), solid(), "block"
//     ],
//     x: () => [
//       sprite("tiles", { frame: 8, width: 32, height: 32 }),
//       area(), solid(), "block"
//     ],
//     c: () => [
//       sprite("tiles", { frame: 9, width: 32, height: 32 }),
//       area(), solid(), "block"
//     ],

//     //" ": () => [sprite("tiles", { frame: 5, width: 32, height: 32 })],
//   }

//   layer(["bg", "world", "ui"], "obj");
//   add([
//     sprite("background", "bg"),
//     layer("bg"),
//     "bg",
//     fixed(),
//   ])
//   addLevel(world[0], leveloptions);

//   Player();

//   scoreboard = add([
//     fixed(),
//     text(`Score: 0000`, {
//       size: 12
//     }),
//     pos(10, 10),
//     { value: 0 },
//     {
//       addScore() {
//         this.value++;
//         this.text = `Score: ${this.value.toString().padStart(4, "0")}`;

//       }
//     },
//     z(100)
//   ])

//   add([
//     loop(10, () => {
//       console.log("spawn")
//       let target = add([
//         health(5),
//         pos(randi(0, 1000), randi(0, 1000)),
//         sprite("target"),
//         area(),
//         "target",
//       ]);
//       target.onDeath(() => {
//         destroy(target);
//         //obj.shootspeed += 1;
//         scoreboard.addScore()
//       })
//       Helicopter();

//     })
//   ])

//   onCollide("laser", "target", (l, t) => {
//     destroy(l);
//     t.hurt(1);
//   })
// };

// export var scoreboard