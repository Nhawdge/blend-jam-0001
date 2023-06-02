// import assets from "../assets.js";

// export default function Player() {

//     let obj = add([
//         pos(100, 150),
//         origin('center'),
//         sprite("hero"),
//         area(),
//         body({ jumpForce: 320, weight: 1 }),
//         solid(),
//         {
//             shotsPerSecond: 10,
//             id: "canShoot",
//             value: true,
//             canShoot() { return this.value },
//             stopShoot() { this.value = false },
//             startShoot() { this.value = true }
//         },
//         outline(1, "black"),

//     ]);
//     var gun = add([
//         pos(obj.pos),
//         sprite("pistol", { frame: 0, width: 8, height: 8 }),
//         origin("left"),
//     ]);

//     gun.onUpdate(() => {
//         var mousePos = mouseWorldPos();
//         var velocity = mousePos.sub(obj.pos).unit();
//         var angle = velocity.angle();
//         gun.flipY(false);
//         if (angle > 90 || angle < -90) {
//             gun.flipY(true);
//         }
//         var radius = 8;
//         gun.pos = vec2(obj.pos.x + radius * Math.cos(angle * Math.PI / 180), obj.pos.y + radius * Math.sin(angle * Math.PI / 180));
//         gun.angle = angle
//     });
//     console.log({ gun });


//     // var arm = add([
//     //     pos(obj.pos),
//     //     sprite("hero1arm"),
//     // ]);


//     obj.onUpdate(() => {
//         camPos(new vec2(obj.pos.x, 150));
//     })

//     obj.play('Idle', { speed: 1, loop: true });

//     var walkspeed = 100;
//     var animationSpeed = 5;

//     onKeyPress("space", function () {
//         obj.doubleJump();
//         if (obj.curAnim() != "Jump") {
//             obj.play('Jump', { speed: animationSpeed, loop: true });
//         }
//     })

//     console.log(obj);
//     onKeyDown("d", function () {
//         obj.move(walkspeed * (obj.isRunning ? 2 : 1), 0);
//         if (obj.isGrounded()) {
//             obj.flipX(false);
//             if (obj.isRunning && obj.curAnim() != "Run") {
//                 obj.play('Run', { speed: animationSpeed, loop: true });
//             }
//             else if (!obj.isRunning && obj.curAnim() != "Walk") {
//                 obj.play('Walk', { speed: animationSpeed, loop: true });
//             }
//         }

//     })

//     onKeyDown("a", function () {
//         obj.move(-walkspeed * (obj.isRunning ? 2 : 1), 0);
//         if (obj.isGrounded()) {
//             obj.flipX(true);
//             if (obj.isRunning && obj.curAnim() != "Run") {
//                 obj.play('Run', { speed: animationSpeed, loop: true });
//             }
//             else if (!obj.isRunning && obj.curAnim() != "Walk") {
//                 obj.play('Walk', { speed: animationSpeed, loop: true });
//             }
//         }
//     })

//     onKeyRelease(["w", "s", "a", "d"], function () {
//         obj.isRunning = false;
//         obj.play('Idle', { speed: 0.2, loop: true });
//     })

//     onKeyPress("shift", function () {
//         obj.isRunning = true;
//     })

//     onMouseDown(() => {
//         if (obj.canShoot() == false) return;
//         obj.stopShoot();
//         wait(1 / obj.shotsPerSecond, () => {
//             obj.startShoot();
//         });
//         var mousePos = mouseWorldPos();
//         //var mousePos = toWorld(mousePos())

//         var velocity = mousePos.sub(obj.pos).unit().scale(40);
//         var angle = velocity.angle();

//         add([
//             area(),
//             sprite("laser"),
//             scale(0.25),
//             rotate(angle),
//             pos(gun.pos),
//             origin("center"),
//             move(velocity, 500),
//             cleanup(),
//             "laser"
//         ])
//     })
// }