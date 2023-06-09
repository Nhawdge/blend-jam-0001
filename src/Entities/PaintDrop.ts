import { ASSETS } from "../assets.js";

const colors = [
    [255, 0, 0],
    [0, 255, 0],
    [0, 0, 255],
    [255, 255, 0]
]

const LIFESPAN = 2;

export default function PaintDrop(player, random) {

    var paint = colors[randi(0, 3)];

    var mousePos = mouseWorldPos();
    //var mousePos = toWorld(mousePos())
    var velocity = mousePos.sub(player.pos).unit().scale(40);

    if (random) {
        velocity = vec2(randi(-5, 5), 0).unit()
    }

    var angle = velocity.angle();
    var drop = add([
        area(),
        sprite(ASSETS.PAINTDROP),
        color(paint[0], paint[1], paint[2]),
        //scale(0.25),
        rotate(angle),
        pos(player.pos),
        origin("center"),
        move(velocity, 500),
        cleanup({ delay: 10 }),
        "paint",
    ])
    drop.onUpdate(() => {
//FIX ME
        drop.angle = drop.pos.angle();
    })

    onCollide('paint', 'unpainted', (a, b) => {
        b.unuse('sprite');
        b.use(sprite(ASSETS.PAINTED_MIDDLE));
        b.use(solid());
        destroy(drop);
    });

    onCollide('paint', 'block', (a, b) => {
        destroy(drop);
    });

    let life = LIFESPAN;
    onUpdate(() => {
        life -= dt();
        if (life < 0)
            destroy(drop);
    });

    wait(0.1, () => {
        drop.use(body({ weight: 0.5 }));
    })
}