import k from '../kaboom';
import assets, { ASSETS, SOUNDS } from '../assets';
import { AudioPlay } from 'kaboom';

export default function Menu() {
    const {
        add,
        pos,
        origin,
        width,
        height,
        sprite,
        text
    } = k;

    var start = add([
        text("Start"),
        pos(center()),
        origin("center"),
        "start",
        area(),
        z(100),
    ]);


    onClick("start", () => {
        go("game");
        bgMusic?.stop();
    })

    on

    add([
        fixed(),
        sprite(ASSETS.MENUBG),
        
    ])

    // var bgmusic = play(SOUNDS.BgMusic, { loop: true, })
    let bgMusic:AudioPlay | null = null;
    onLoad(() => {
        bgMusic = play(SOUNDS.MenuMusic, { loop: true, volume: 0.5, });
    })

}