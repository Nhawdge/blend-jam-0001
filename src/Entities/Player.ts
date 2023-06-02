import assets, { ASSETS, SOUNDS } from "../assets.js";
import copter from '../Components/Copter';

export var playerEntity;



export default function Player() {
    const DEFAULT_PLAYER_WEIGHT = 1;
    const COPTER_PLAYER_WEIGHT = 0.25;

    let player = add([
        pos(100, 150),
        origin('center'),
        sprite(ASSETS.HERO),
        area(),
        body({ jumpForce: 640, weight: DEFAULT_PLAYER_WEIGHT }),
        solid(),
        {
            shotsPerSecond: 10,
            id: "canShoot",
            value: true,
            canShoot() { return this.value },
            stopShoot() { this.value = false },
            startShoot() { this.value = true }
        },
        cleanup(),
        copter(),
        state("Idle", ["Idle", "Walk", "Throw", "Floor", "Jump", "CopterStart", "Copter", "CopterEnd", "Land", "Slide",])
    ]);

    player.onEnterCopter(() => {
        player.enterState('Copter');
        player.weight = COPTER_PLAYER_WEIGHT;
    });

    player.onExitCopter((is_grounded: boolean) => {
        player.weight = DEFAULT_PLAYER_WEIGHT;
        if (is_grounded) {
            player.enterState('CopterEnd');
        }
        else {
            player.enterState('Jump');
        }
    });

    player.onStateEnter("Idle", () => {
        player.play('idle', { speed: 5, loop: true });
    })

    player.onStateEnter("Throw", () => {
        player.play('throw', { speed: 10, loop: false });
        play(SOUNDS.Swing1);
        wait(0.5, () => {
            player.enterState("Idle");
        });
    })

    player.onStateEnter("Floor", () => {
        player.play('slide', { speed: 1, loop: false });
    })

    player.onStateEnter("Jump", () => {
        if (player.curAnim() != "jump") {
            player.play('jump', { speed: 15, loop: false });
        }
    })

    player.onStateEnter("Walk", () => {
        console.log("walking")
        if (player.curAnim() != "run") {
            player.play("run", { speed: 15, loop: true });
        }
    })

    player.onStateEnter("Copter", () => {
        player.play('copter', { speed: 50, loop: true });
    })

    player.onStateEnter("Land", () => {
        player.play('land', { speed: 1, loop: false });
    })

    player.onStateEnter("Slide", () => {
        player.play('slide', { speed: 1, loop: false });
    })

    onMouseDown(() => {
        player.enterState("Throw");
    })

    player.onUpdate(() => {
        //camPos(new vec2(player.pos.x, 150));
    })

    player.onDestroy(() => {
        go("menu");
    })
    player.play('idle', { speed: 1, loop: true });

    var walkspeed = 100;

    onKeyPress("space", function () {
        player.doubleJump();
        if (player.curAnim() != "Jump") {
            //player.play('Jump', { speed: animationSpeed, loop: true });
        }
    })

    onKeyDown("d", function () {
        player.move(walkspeed * (player.isRunning ? 2 : 1), 0);
        player.enterState("Walk")
        player.flipX(false);
    })

    onKeyDown("a", function () {
        player.move(-walkspeed * (player.isRunning ? 2 : 1), 0);
        player.enterState("Walk")
        player.flipX(true);
    })

    onKeyRelease(["w", "s", "a", "d"], function () {
        player.enterState("Idle");
    })



    // onMouseDown(() => {
    //     if (player.canShoot() == false) return;
    //     player.stopShoot();
    //     wait(1 / player.shotsPerSecond, () => {
    //         player.startShoot();
    //     });
    //     var mousePos = mouseWorldPos();
    //     //var mousePos = toWorld(mousePos())

    //     var velocity = mousePos.sub(player.pos).unit().scale(40);
    //     var angle = velocity.angle();

    //     add([
    //         area(),
    //         sprite("laser"),
    //         scale(0.25),
    //         rotate(angle),
    //         pos(gun.pos),
    //         origin("center"),
    //         move(velocity, 500),
    //         cleanup(),
    //         "laser"
    //     ])
    // })

    playerEntity = player;
    return player;
}
