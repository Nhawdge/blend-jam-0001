import k from '../kaboom';
import assets from '../assets';

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
    ]);

    onClick("start", () => {
        go("game")
    })

}