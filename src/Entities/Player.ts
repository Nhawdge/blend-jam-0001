import assets, { ASSETS, SOUNDS } from "../assets.js";
import copter from '../Components/Copter';
import PaintBar from "../Components/PaintBar.js";
import PaintDrop from "./PaintDrop.js";

export var playerEntity;



export default function Player() {
    const DEFAULT_PLAYER_WEIGHT = 1;
    const COPTER_PLAYER_WEIGHT = 0.25;
    const STARTINGPAINTAMOUNT = 100;
    const PAINTUSAGE = 5;

    let player = add([
        pos(100, 150),
        origin('center'),
        sprite(ASSETS.HERO),
        area(),
        body({ jumpForce: 640, weight: DEFAULT_PLAYER_WEIGHT }),
        solid(),
        {
            id: "paintAmount",
            paintAmount: STARTINGPAINTAMOUNT,
            subtractPaint(amt: number) { (this.paintAmount -= amt) },
            addPaint(amt: number) { (this.paintAmount += amt) },
            paintAmt() { return this.paintAmount }
        },
        cleanup(),
        copter(),
        PaintBar(),
        state("Idle", ["Idle", "Walk", "Throw", "Floor", "Jump", "CopterStart", "Copter", "CopterEnd", "Land", "Slide",]),
        { canThrow: true }
    ]);

    player.onEnterCopter(() => {
        player.enterState('Copter');
        player.weight = COPTER_PLAYER_WEIGHT;
        PaintDrop(player, true);
        wait(0.25, () => PaintDrop(player, true));
        wait(0.5, () => PaintDrop(player, true));
        wait(0.75, () => PaintDrop(player, true));
    });

    player.onExitCopter((is_grounded: boolean) => {
        player.weight = DEFAULT_PLAYER_WEIGHT;
        if (is_grounded) {
            player.enterState("Idle");
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
            player.canThrow = true;
            PaintDrop(player);
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
        if (player.curAnim() != "run" && player.curAnim() != "throw" && player.curAnim() != "jump") {
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


    player.onUpdate(() => {
        //camPos(new vec2(player.pos.x, 150));
    })

    player.onDestroy(() => {
        player.trigger('died');
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
        if (player.state !== "Walk" && player.isGrounded())
            player.enterState("Walk")
        player.flipX(false);
    })

    onKeyDown("a", function () {
        player.move(-walkspeed * (player.isRunning ? 2 : 1), 0);
        if (player.state !== "Walk" && player.isGrounded())
            player.enterState("Walk")
        player.flipX(true);
    })

    onKeyRelease(["w", "s", "a", "d"], function () {
        if (player.isGrounded())
            player.enterState("Idle");
    })


    onMouseDown(() => {
        if (player.canThrow && player.paintAmt() >= PAINTUSAGE) {
            player.canThrow = false
            player.enterState("Throw");
            player.updatePaintBar(PAINTUSAGE);
        }
    })

    playerEntity = player;
    return player;
}
