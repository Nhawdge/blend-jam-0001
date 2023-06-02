
const assets = {
    load: function () {
        const promises = [
            loadAseprite(ASSETS.HERO, '/assets/Sprite-0001.png', '/assets/Sprite-0001.json'),
            // loadAseprite(TILES, '/assets/industrytiles.png', '/assets/industrytiles.json'),
            // loadAseprite("helicopter", "/assets/helicopter.png", "/assets/helicopter.json"),
            // loadSprite("laser", "/assets/laser.png"),
            // loadSprite("target", "/assets/target.png"),
            // loadSprite("rainbowtaffy", "/assets/rainbow-taffy.png"),
            loadSprite(ASSETS.MENUBG, "/assets/Background/mainmenu.jpg"),
            loadSprite(ASSETS.BACKGROUND, "/assets/Background/bgtile-1.png"),
            loadSprite(ASSETS.BACKGROUND2, "/assets/Background/bgtile-2.png"),
            // loadSprite("pistol","/assets/2 Guns/1_1.png"),
            loadSound(SOUNDS.BgMusic, "/assets/music/GameSong1.wav"),
            loadSound(SOUNDS.Jump1, "/assets/sfx/jump-01.wav"),
            loadSound(SOUNDS.Land1, "/assets/sfx/land-01.wav"),
            loadSound(SOUNDS.Slide1, "/assets/sfx/slide-01.wav"),
            loadSound(SOUNDS.Slide2, "/assets/sfx/slide-02.wav"),
            loadSound(SOUNDS.Splat1, "/assets/sfx/splat-01.wav"),
            loadSound(SOUNDS.Splat2, "/assets/sfx/splat-02.wav"),
            loadSound(SOUNDS.Swing1, "/assets/sfx/swing-01.wav"),
            

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
    MENUBG: "menubg"
};

export const SOUNDS = {
    BgMusic: "bgmusic",
    Jump1: "jump1",
    Land1: "land1",
    Slide1: "slide1",
    Slide2: "slide2",
    Splat1: "splat1",
    Splat2: "splat2",
    Swing1: "swing1",
}
