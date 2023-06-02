
const assets = {
    load: function () {
        const promises = [
            loadAseprite(ASSETS.HERO, '/assets/painter-person-combined.png', '/assets/painter-person-combined.json'),
            // loadAseprite(TILES, '/assets/industrytiles.png', '/assets/industrytiles.json'),
            // loadAseprite("helicopter", "/assets/helicopter.png", "/assets/helicopter.json"),
            // loadSprite("laser", "/assets/laser.png"),
            // loadSprite("target", "/assets/target.png"),
            // loadSprite("rainbowtaffy", "/assets/rainbow-taffy.png"),
            loadSprite(ASSETS.MENUBG, "/assets/Background/start-screen-bg.png"),
            loadSprite(ASSETS.BACKGROUND, "/assets/Background/bgtile-1.png"),
            loadSprite(ASSETS.BACKGROUND2, "/assets/Background/bgtile-2.png"),

            loadSprite(ASSETS.HIDDEN_LEFT, `/assets/Background/${ASSETS.HIDDEN_LEFT}.png`),
            loadSprite(ASSETS.HIDDEN_MIDDLE, `/assets/Background/${ASSETS.HIDDEN_MIDDLE}.png`),
            loadSprite(ASSETS.HIDDEN_RIGHT, `/assets/Background/${ASSETS.HIDDEN_RIGHT}.png`),

            loadSprite(ASSETS.PAINTDROP, `/assets/Background/the-paint-drop.png`),

            // loadSprite("pistol","/assets/2 Guns/1_1.png"),
            loadSound(SOUNDS.BgMusic, "/assets/music/GameSong1.wav"),
            loadSound(SOUNDS.BgMusic2, "/assets/music/GameSong3.wav"),
            loadSound(SOUNDS.MenuMusic, "/assets/music/GameSong2.wav"),
            loadSound(SOUNDS.Jump1, "/assets/sfx/jump-01.wav"),
            loadSound(SOUNDS.Land1, "/assets/sfx/land-01.wav"),
            loadSound(SOUNDS.Slide1, "/assets/sfx/slide-01.wav"),
            loadSound(SOUNDS.Slide2, "/assets/sfx/slide-02.wav"),
            loadSound(SOUNDS.Splat1, "/assets/sfx/splat-01.wav"),
            loadSound(SOUNDS.Splat2, "/assets/sfx/splat-02.wav"),
            loadSound(SOUNDS.Swing1, "/assets/sfx/swing-01.wav"),
            loadSound(SOUNDS.ChopperStart, '/assets/sfx/chopper-start.wav'),
            loadSound(SOUNDS.ChopperLoop, '/assets/sfx/chopper-loop.wav'),
            loadSound(SOUNDS.ChopperEnd, '/assets/sfx/chopper-end.wav'),


        ];

        return Promise.all(promises);
    }
};

export default assets;
export const ASSETS = {
    HERO: "hero",
    TILES: "tiles",
    BACKGROUND: "background",
    BACKGROUND2: "background2",
    MENUBG: "menubg",
    HIDDEN_LEFT: 'hidden-platform-left-end',
    HIDDEN_MIDDLE: 'hidden-platform-middle',
    HIDDEN_RIGHT: 'hidden-platform-right-end',
    PAINTDROP: 'paint-drop'
};

export const SOUNDS = {
    BgMusic: "bgmusic",
    BgMusic2: "bgmusic2",
    MenuMusic: 'MenuMusic',
    Jump1: "jump1",
    Land1: "land1",
    Slide1: "slide1",
    Slide2: "slide2",
    Splat1: "splat1",
    Splat2: "splat2",
    Swing1: "swing1",
    ChopperStart: 'chopper-start',
    ChopperLoop: 'chopper-loop',
    ChopperEnd: 'chopper-end',
}
