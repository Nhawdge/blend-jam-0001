import k from './kaboom';
import Game from './scenes/Game';
import Assets from './assets';
import Menu from './scenes/Menu';

Assets.load();

k.scene('game', Game);
k.scene('menu', Menu)
k.go('menu');
