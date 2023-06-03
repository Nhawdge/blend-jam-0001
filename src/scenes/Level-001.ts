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
        sprite(ASSETS.GROUND),
        area(),
        solid(),
        "block"
    ],
    g: () => [
        sprite(ASSETS.HIDDEN_MIDDLE),
        area(),
        "unpainted"
    ],
    '[': () => [
        area(),
        sprite(ASSETS.HIDDEN_LEFT),
        'unpainted',
    ],
    ']': () => [
        area(),
        sprite(ASSETS.HIDDEN_RIGHT),
        'unpainted',
    ],

    //" ": () => [sprite("tiles", { frame: 5, width: 32, height: 32 })],
}