import k from '../kaboom';
import assets, { ASSETS, SOUNDS } from '../assets';
import Player from '../Entities/Player.js';
import Camera, { camera } from '../Entities/Camera.js';
import { AudioPlay, Rect } from 'kaboom';
import { level1, levelOptions } from './Level-001.js';

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


    var bg1 = add([
        sprite(ASSETS.BACKGROUND, { tiled: true, width: 6000, height: 3000 }),
        layer("bg"),
        "bg",
        pos(0, 0),
        scale(1, 1),
        z(-10),
        fixed(),
        move(-1, 0)
    ]);
    var bg2 = add([
        sprite(ASSETS.BACKGROUND2, { tiled: true, width: 6000, height: 3000 }),
        layer("bg2"),
        "bg2",
        pos(0, 0),
        scale(1, 1),
        z(-20),
        fixed(),
        move(-2, 0)
    ]);

    bg1.onUpdate(() => {
        bg1.pos.x -= 1;
    })
    bg2.onUpdate(() => {
        bg2.pos.x -= 2;
    })

    let player = Player();
    Camera();

    let bgMusic: AudioPlay | null = null;
    onLoad(() => {
        const rnd = Math.random();
        console.log(rnd);
        const music_to_play = rnd <= 0.5 ? SOUNDS.BgMusic2 : SOUNDS.BgMusic;
        bgMusic = play(music_to_play, { loop: true, volume: 0.5, });
    })

    player.on('died', () => {
        go("menu");
        bgMusic?.stop();
    });

};

