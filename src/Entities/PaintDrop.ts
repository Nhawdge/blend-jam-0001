import { ASSETS } from "../assets.js";

const colors = [
    [255, 0, 0],
    [0, 255, 0],
    [0, 0, 255],
    [255, 255, 0]
]

export default function PaintDrop(player) {

    var paint = colors[randi(0, 3)];

    var mousePos = mouseWorldPos();
    //var mousePos = toWorld(mousePos())

    var velocity = mousePos.sub(player.pos).unit().scale(40);
    var angle = velocity.angle();


    var drop = add([
        area(),
        sprite(ASSETS.PAINTDROP),
        color(paint[0], paint[1], paint[2]),
        //scale(0.25),
        rotate(angle - 90),
        pos(player.pos),
        origin("center"),
        move(velocity, 500),
        // cleanup(),
        "paint",

    ])

    wait(0.5, () => {
        drop.use(body());
    })
}