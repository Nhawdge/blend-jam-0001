import k from '../kaboom';
import assets, { ASSETS, SOUNDS } from '../assets';

const STARTINGPAINTAMOUNT = 100;

export default function PaintBar(){
    let remainingPaint = STARTINGPAINTAMOUNT;

    add([
        text("REMAINING PAINT: ", { size: 8, font: "sink" }),
        pos(300, 10),
        origin("center"),
        layer("ui"),
        fixed(),
      ]);

      const paintBarOutline = add([
        rect(52, 12),
        pos(375, 10),
        color(100, 100, 100),
        origin("center"),
        layer("ui"),
        fixed(),
      ]);
      
      const paintBarInside = add([
        rect(50, 10),
        pos(375, 10),
        color(0, 0, 0),
        origin("center"),
        layer("ui"),
        fixed(),
      ]);

      const paintBar = add([
        rect(50, 10),
        pos(350, 5),
        color(0,0,255),
        layer("ui"),
        fixed(),
      ]);

      return{
        id: "paintBar",
        updatePaintBar(paintAmount: number) {
          this.subtractPaint(paintAmount);
          paintBar.width = 50 * (this.paintAmt() / 100);
          console.log("Paint bar updating")
        },
      }
}
