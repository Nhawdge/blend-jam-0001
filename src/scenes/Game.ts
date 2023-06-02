import k from '../kaboom';
import assets, { ASSETS, SOUNDS } from '../assets';
import Helicopter from '../Entities/Helicopter.js';
import Player from '../Entities/Player.js';
import Camera from '../Entities/Camera.js';

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

    layer(["bg", "world", "ui"], "obj");

    var bg = add([
        sprite(ASSETS.BACKGROUND),
        layer("bg"),
        "bg",
        pos(0, 0),
    ])
    bg.onUpdate(() => {
        pos(bg.pos.x - 1, bg.pos.y);
    })
    addLevel(world[0], leveloptions);

    Player();
    Camera();
    play(SOUNDS.BgMusic, { loop: true, volume: 0.5, })

};

