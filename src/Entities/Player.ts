import assets, { ASSETS, SOUNDS } from "../assets.js";
import copter from '../Components/Copter' ;

export default function Player() {
    const DEFAULT_PLAYER_WEIGHT = 1;
    const COPTER_PLAYER_WEIGHT = 0.5;

    let player = add([
        pos(100, 150),
        origin('center'),
        sprite(ASSETS.HERO),
        area(),
        body({ jumpForce: 320, weight: DEFAULT_PLAYER_WEIGHT }),
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
        state("Idle", ["Idle", "Throw", "Floor", "Jump", "CopterStart", "Copter", "CopterEnd", "Land", "Slide",])
    ]);

    player.onEnterCopter(() => {
        player.enterState('Copter');
        console.log('Enter copter');
    });

    player.onExitCopter((is_grounded:boolean) => {
        console.log('Exit Copter');
        if (is_grounded) {
            player.enterState('CopterEnd');
        }
        else {
            player.enterState('Jump');
        }
    });

    player.onStateEnter("Throw", () => {
        player.play('Throw', { speed: 1, loop: false });
        play(SOUNDS.Swing1);
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


    player.play('Idle', { speed: 1, loop: true });

    var walkspeed = 100;
    var animationSpeed = 5;

    onKeyPress("space", function () {
        player.doubleJump();
        if (player.curAnim() != "Jump") {
            //player.play('Jump', { speed: animationSpeed, loop: true });
        }
    })

    onKeyDown("d", function () {
        player.move(walkspeed * (player.isRunning ? 2 : 1), 0);
        if (player.isGrounded()) {
            player.flipX(false);
            if (player.isRunning && player.curAnim() != "Run") {
                //player.play('Run', { speed: animationSpeed, loop: true });
            }
            else if (!player.isRunning && player.curAnim() != "Walk") {
                //player.play('Walk', { speed: animationSpeed, loop: true });
            }
        }
    })

    onKeyDown("a", function () {
        player.move(-walkspeed * (player.isRunning ? 2 : 1), 0);
        if (player.isGrounded()) {
            player.flipX(true);
            if (player.isRunning && player.curAnim() != "Run") {
                //player.play('Run', { speed: animationSpeed, loop: true });
            }
            else if (!player.isRunning && player.curAnim() != "Walk") {
                //player.play('Walk', { speed: animationSpeed, loop: true });
            }
        }
    })

    onKeyRelease(["w", "s", "a", "d"], function () {
        player.isRunning = false;
        player.play('Idle', { speed: 1, loop: true });
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
}