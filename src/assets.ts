
const assets = {
    load: function () {
        const promises = [
            loadAseprite(ASSETS.HERO, '/assets/Sprite-0001.png', '/assets/Sprite-0001.json'),
            // loadAseprite(TILES, '/assets/industrytiles.png', '/assets/industrytiles.json'),
            // loadAseprite("helicopter", "/assets/helicopter.png", "/assets/helicopter.json"),
            // loadSprite("laser", "/assets/laser.png"),
            // loadSprite("target", "/assets/target.png"),
            // loadSprite("rainbowtaffy", "/assets/rainbow-taffy.png"),
            loadSprite("background", "/assets/Background/background.jpg"),
            // loadSprite("pistol","/assets/2 Guns/1_1.png"),

        ];

        return Promise.all(promises);
    }
};

export default assets;
export const ASSETS = { HERO: "hero", TILES: "tiles" };
