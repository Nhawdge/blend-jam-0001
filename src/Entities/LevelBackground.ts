import assets, { ASSETS } from '../assets';

export default function LevelBackground() {
    
    var bgForeground = add([
        sprite(ASSETS.BACKGROUND, { tiled: true, width: 12000, height: 3000 }),
        layer("bg"),
        "bg",
        pos(0, 0),
        scale(1, 1),
        z(-10),
        fixed(),
        move(-1, 0)
    ]);
    var bgBackground = add([
        sprite(ASSETS.BACKGROUND2, { tiled: true, width: 20000, height: 3000 }),
        layer("bg2"),
        "bg2",
        pos(0, 0),
        scale(1, 1),
        z(-20),
        fixed(),
        move(-2, 0)
    ]);

    bgForeground.onUpdate(() => {
        bgForeground.pos.x -= 1;
    })
    bgBackground.onUpdate(() => {
        bgBackground.pos.x -= 2;
    })
}