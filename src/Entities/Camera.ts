import { playerEntity } from "./Player.js";

export default function Player() {
    camera = add([
        { cameraSpeed: 1, },
        pos(0, 0),
    ]);


    camera.onUpdate(() => {
        var y = playerEntity.pos.y;
        camera.pos.x += camera.cameraSpeed;
        camPos(new vec2(camera.pos.x + 1, y));
    })
}

export var camera;