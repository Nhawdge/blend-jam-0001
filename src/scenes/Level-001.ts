
export var level1 = [
    "    @                                                                                     @ ",
    "    ggggg                                                                               ggggg ",
    "",
    "",
    "ggggg                                                                                       ggggg ",
    "                           ",
    "                                               @",
    "ggggg                             ggggg               ggggg               ggggg               ggggg                                                         <#",
    "                                                                                                       ggggg                      #",
    "                                                                                                                                  #",
    "                                                                                                                                  #",
    "      p                                                                                                                                                                 #        ",
    "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
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
        outline(2, "black"),
        //sprite("tiles", { frame: 9, width: 32, height: 32 }),
        area(), solid(), "block"
    ],
    

    //" ": () => [sprite("tiles", { frame: 5, width: 32, height: 32 })],
}