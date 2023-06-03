import k from '../kaboom';
import assets, { ASSETS, SOUNDS } from '../assets';
import Player from '../Entities/Player.js';
import Camera, { camera } from '../Entities/Camera.js';
import { AudioPlay, Rect } from 'kaboom';
import { level1, levelOptions } from './Level-001.js';
import LevelBackground from '../Entities/LevelBackground';

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

    let player = Player();
    Camera();
    LevelBackground();
    
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

