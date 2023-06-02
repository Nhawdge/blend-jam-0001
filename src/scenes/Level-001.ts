import { ASSETS } from "../assets"

export var level1 = [
"                                                     @                                                                                     @ ",
"                                              [ggg]                                                                               [ggg] ",
"",
"",
"                             [ggg]                                                                                       [ggg] ",
"",
"                                                                                         @",
"              [ggg]                             [ggg]               [ggg]               [ggg]               [ggg]                                                       <#",
"                                                                                                                                                 [ggg]                   #",
"                                                                                                                                                                         #",
"                                                                                                                                                                         #",
"                                                                                                                                                                         #",
"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",

]


export var levelOptions = {
    width: 32,
    height: 32,

    x: () => [
        rect(32, 32),
        outline(2, "black"),
        //sprite("tiles", { frame: 9, width: 32, height: 32 }),
        area(), solid(), "block"
    ],
    g: () => [
        rect(32, 32),
        sprite(ASSETS.HIDDEN_MIDDLE),
        //sprite("tiles", { frame: 9, width: 32, height: 32 }),
        area(),
        "unpainted"
    ],
    '[': () => [
        rect(32, 32),
        area(),
        sprite(ASSETS.HIDDEN_LEFT),
        'unpainted',
    ],
    ']': () => [
        rect(32, 32),
        area(),
        sprite(ASSETS.HIDDEN_RIGHT),
        'unpainted',
    ],

    //" ": () => [sprite("tiles", { frame: 5, width: 32, height: 32 })],
}