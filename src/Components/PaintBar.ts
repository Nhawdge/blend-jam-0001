import k from '../kaboom';
import assets, { ASSETS, SOUNDS } from '../assets';


export default function PaintBar(){
    add([
        text("REMAINING PAINT: ", { size: 8, font: "sink" }),
        pos(300, 10),
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