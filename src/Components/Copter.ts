import { AudioPlay } from 'kaboom';
import { SOUNDS } from '../assets';
import k from '../kaboom';

enum State {
    Idle,
    StartCopter,
    LoopCopter,
    EndCopter
}

const START_COPTER_TIME = 0.3;

export default function copter() {
    let state = State.Idle;
    let shift_down = false;
    let time_in_state = 0;
    let sfx:AudioPlay | null = null;

    // Events
    let on_copter:() => void | null;
    let off_copter:(is_grounded:boolean) => void | null;

    return {
        id: 'copter',
        require: [ "body", "pos", ],
        add() {
            k.onKeyDown('shift', () => shift_down = true);
            k.onKeyRelease('shift', () => shift_down = false);
        },
        update() {
            const is_grounded = this.isGrounded();
            const should_be_coptering = shift_down && !is_grounded;
            const delta = dt();
            time_in_state += delta;


            if (should_be_coptering) {
                if (state == State.Idle) {
                    // ENTER COPTER
                    state = State.StartCopter;
                    sfx?.stop();
                    sfx = play(SOUNDS.ChopperStart);
                    time_in_state = 0;
                    if (on_copter != null)
                        on_copter();
                } else if (state == State.StartCopter) {
                    if (time_in_state >= START_COPTER_TIME) {
                        // Transition to loop
                        state = State.LoopCopter;
                        time_in_state = 0;
                        sfx?.stop();
                        sfx = play(SOUNDS.ChopperLoop, { loop: true });
                    }
                }
            } else if (state != State.Idle) {
                sfx?.stop();
                //this.gravityScale = 1;
                if (is_grounded) {
                    sfx = play(SOUNDS.ChopperEnd);
                }
                state = State.Idle;
                if (off_copter != null)
                    off_copter(is_grounded);
            }
        },
        onEnterCopter(callback:()=>void) { on_copter = callback; },
        onExitCopter(callback:(is_grounded:boolean)=>void) { off_copter = callback; },
    };
}

/*
export default function copter() {
    let was_choppering = false;
    let shift_down = false;
    let on_copter:() => void | null;
    let off_copter:(is_grounded:boolean) => void | null;

    return {
        id: 'copter',
        require: [ "body", ],
        setShiftDown: (isShiftDown:boolean) => shift_down = isShiftDown,
        getShiftDown: () => shift_down,
        add() {
            k.onKeyDown('shift', () => shift_down = true);
            k.onKeyRelease('shift', () => shift_down = false);
        },
        onEnterCopter(callback:()=>void) {
            on_copter = callback;
        },
        onExitCopter(callback:(is_grounded:boolean)=>void) {
            off_copter = callback;
        },
        update() {
            let is_choppering = shift_down && !this.isGrounded();
            if (was_choppering != is_choppering) {
                if (was_choppering && off_copter != null) {
                    off_copter(this.isGrounded());
                } else if (!was_choppering && on_copter != null) {
                    on_copter();
                }
            }
            was_choppering = is_choppering;
        }
    };
}
*/