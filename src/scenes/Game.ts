import k from '../kaboom';
import assets from '../assets';
import Helicopter from '../Entities/Helicopter.js';
import Player from '../Entities/Player.js';

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
        "",
        "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    ]]

    const leveloptions = {
        width: 32,
        height: 32,

        x: () => [
            rect(64, 64),

            outline(2, "black"),
            //sprite("tiles", { frame: 9, width: 32, height: 32 }),
            area(), solid(), "block"
        ],

        //" ": () => [sprite("tiles", { frame: 5, width: 32, height: 32 })],
    }

    //   layer(["bg", "world", "ui"], "obj");
    //   add([
    //     sprite("background", "bg"),
    //     layer("bg"),
    //     "bg",
    //     fixed(),
    //   ])
    addLevel(world[0], leveloptions);

    Player();

};

