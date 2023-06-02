import k from '../kaboom';
import assets, { ASSETS, SOUNDS } from '../assets';

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
        go("game")
        bgmusic.stop();
    })

    add([
        fixed(),
        sprite(ASSETS.MENUBG),
        scale(0.15)
    ])

    var bgmusic = play(SOUNDS.BgMusic, { loop: true, })

}