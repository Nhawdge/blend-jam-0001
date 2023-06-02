import k from '../kaboom';
import assets, { ASSETS, SOUNDS } from '../assets';


const STARTINGPAINTAMOUNT = 100;

export default function PaintBar(){


    add([
        text("REMAINING PAINT: ", { size: 8, font: "sink" }),
        pos(300, 10),
        origin("center"),
        layer("ui"),
        fixed(),
      ]);

      const paintBarOutline = add([
        rect(52, 12),
        pos(350, 10),
        color(100, 100, 100),
        origin("center"),
        layer("ui"),
      ]);
      
      const paintBarInside = add([
        rect(50, 10),
        pos(350, 10),
        color(0, 0, 0),
        origin("center"),
        layer("ui"),
      ]);

      const paintBar = add([
        rect(50, 10),
        pos(325, 5),
        color(0,255,0),
        layer("ui"),
      ]);
}
