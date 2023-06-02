export default function Player() {
    var camera = add([
        { cameraSpeed: 1, },
        pos(0, 0),
    ]);


    camera.onUpdate(() => {
        camera.pos.x += camera.cameraSpeed;
        camPos(new vec2(camera.pos.x + 1, 150));
    })
}