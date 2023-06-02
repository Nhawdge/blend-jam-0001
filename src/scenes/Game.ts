import k from '../kaboom';
import assets, { ASSETS, SOUNDS } from '../assets';
import Helicopter from '../Entities/Helicopter.js';
import Player from '../Entities/Player.js';
import Camera, { camera } from '../Entities/Camera.js';
import { Rect } from 'kaboom';

export default function Game() {
    const {
        add,
        pos,
        origin,
        width,
        height,
        sprite
    } = k;

    const world = [[
        "",
        "",
        "",
        "",
        "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    ]]

    const leveloptions = {
        width: 64,
        height: 64,

        x: () => [
            rect(64, 64),
            outline(2, "black"),
            //sprite("tiles", { frame: 9, width: 32, height: 32 }),
            area(), solid(), "block"
        ],

        //" ": () => [sprite("tiles", { frame: 5, width: 32, height: 32 })],
    }

      layer(["bg", "bg2", "world", "ui"], "obj");
      
      var bgArrayLayer1 = [];
      var bgArrayLayer2 = [];

      bgArrayLayer1.push(add([
        sprite(ASSETS.BACKGROUND),
        layer("bg"),
        "bg",
        pos(0,0),
        scale(2,2)
      ]));
      bgArrayLayer2.push(add([
        sprite(ASSETS.BACKGROUND2),
        layer("bg2"),
        "bg2",
        pos(0,0),
        scale(2,2)
      ]));

      for (let i = 1; i < 30; i++) {
          var bg = add([
            sprite(ASSETS.BACKGROUND),
            layer("bg"),
            "bg",
            pos(bgArrayLayer1[(i - 1)].pos.x + 32, 0),
            move(-1,0),
            scale(2,2),
          ]);
          var bg2 = add([
            sprite(ASSETS.BACKGROUND2),
            layer("bg2"),
            "bg2",
            pos(bgArrayLayer2[(i - 1)].pos.x + 32, 0),
            move(-2,0),
            scale(2,2),
          ]);

          bgArrayLayer1.push(bg);
          bgArrayLayer2.push(bg2);
      };
      addLevel(world[0], leveloptions);

      bg.onUpdate(() => {   
        if (bgArrayLayer1[0].pos.x <= camera.pos.x - 500) {
            destroy(bgArrayLayer1.shift());
            var newBgTile = add([
                sprite(ASSETS.BACKGROUND),
                layer("bg"),
                "bg",
                pos(bgArrayLayer1[(bgArrayLayer1.length - 1)].pos.x + 32, 0),
                move(-1,0),
                scale(2,2)
            ]);
            bgArrayLayer1.push(newBgTile);
            console.log("total size layer 1: ", bgArrayLayer1.length)
        }
      });
      bg2.onUpdate(() => {   
        // bgArrayLayer2.forEach(element => {
        //     element.pos.x -= 2;
        // });
        if (bgArrayLayer2[0].pos.x <= camera.pos.x - 500) {
            destroy(bgArrayLayer2.shift());
            var newBgTile = add([
                sprite(ASSETS.BACKGROUND2),
                layer("bg2"),
                "bg2",
                pos(bgArrayLayer2[(bgArrayLayer2.length - 1)].pos.x + 32, 0),
                move(-2,0),
                scale(2,2)
            ]);
            bgArrayLayer2.push(newBgTile);
            console.log("total size layer 2: ", bgArrayLayer2.length)
        }
      });
    Player();
    Camera();
    play(SOUNDS.BgMusic, { loop: true, volume: 0.5, })

};

