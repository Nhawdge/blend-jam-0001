var colors = [
    [255, 0, 0],
    [0, 255, 0],
    [0, 0, 255],
    [255, 255, 0]
]

export default function Player() {

    var paint = colors[randi(0, 3)];
    
    add([
        area(),
        sprite(ASSETS.PAINTDROP),
        color(paint[0], paint[1], paint[2]),
        //scale(0.25),
        rotate(angle - 90),
        pos(player.pos),
        origin("center"),
        move(velocity, 500),
        cleanup(),
        "paint",
        body(),
    ])
}