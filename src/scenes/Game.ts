import k from '../kaboom';
import assets, { ASSETS, SOUNDS } from '../assets';
import Helicopter from '../Entities/Helicopter.js';
import Player from '../Entities/Player.js';
import Camera, { camera } from '../Entities/Camera.js';
import { Rect } from 'kaboom';
import { level1, levelOptions } from './Level-001.js';
import PaintBar from '../Components/PaintBar';
import { playerEntity } from "../Entities/Player.js";

export default function Game() {
    const {
        add,
        pos,
        origin,
        width,
        height,
        sprite
    } = k;

    const world = level1;
    addLevel(world, levelOptions);

    layer(["bg2", "bg", "world", "ui"], "obj");

    var bgArrayLayer1 = [];
    var bgArrayLayer2 = [];

    bgArrayLayer1.push(add([
        sprite(ASSETS.BACKGROUND),
        layer("bg"),
        "bg",
        pos(0, 0),
        scale(1, 1),
        z(-10),
    ]));
    bgArrayLayer2.push(add([
        sprite(ASSETS.BACKGROUND2),
        layer("bg2"),
        "bg2",
        pos(0, 0),
        scale(1, 1),
        z(-20),
    ]));

    for (let i = 1; i < 3; i++) {
        var bg = add([
            sprite(ASSETS.BACKGROUND),
            layer("bg"),
            "bg",
            pos(bgArrayLayer1[(i - 1)].pos.x + 600, 0),
            scale(1, 1),
            z(-10)
        ]);
        var bg2 = add([
            sprite(ASSETS.BACKGROUND2),
            layer("bg2"),
            "bg2",
            pos(bgArrayLayer2[(i - 1)].pos.x + 600, 0),
            scale(1, 1),
            z(-20)
        ]);

        bgArrayLayer1.push(bg);
        bgArrayLayer2.push(bg2);
    };

    onUpdate(() => {
        console.log("camera pos: ", camera.pos.y);
        bgArrayLayer1.forEach(element => {
            element.pos.x -= 1;
            element.pos.y = playerEntity.pos.y - 150;
        });
        if (bgArrayLayer1[0].pos.x <= camera.pos.x - 1500) {
            destroy(bgArrayLayer1.shift());
            var bg = add([
                sprite(ASSETS.BACKGROUND),
                layer("bg"),
                "bg",
                pos(bgArrayLayer1[(bgArrayLayer1.length - 1)].pos.x + 600, 0),
                scale(2, 2),
                z(-10)
            ]);
            bgArrayLayer1.push(bg);
        }

        bgArrayLayer2.forEach(element => {
            element.pos.x -= 2;
            element.pos.y = playerEntity.pos.y - 150;
        });
        if (bgArrayLayer2[0].pos.x <= camera.pos.x - 1500) {
            destroy(bgArrayLayer2.shift());
            var bg2 = add([
                sprite(ASSETS.BACKGROUND2),
                layer("bg2"),
                "bg2",
                pos(bgArrayLayer2[(bgArrayLayer2.length - 1)].pos.x + 600, 0),
                scale(2, 2),
                z(-20)
            ]);
            bgArrayLayer2.push(bg2);
        }
    })

    Player();
    Camera();
    play(SOUNDS.BgMusic, { loop: true, volume: 0.5, })

};

