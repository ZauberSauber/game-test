import 'phaser';
import {
    GameScene,
    WelcomeScene,
    ScoreScene
} from "./scenes/index";


const config: GameConfig = {
    title: 'Meow game',
    width: 800,
    height: 600,
    parent: 'game',
    scene: [
        WelcomeScene,
        GameScene,
        ScoreScene
    ],
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
        }
    },
    backgroundColor: '#45ad04',
};

export class MeowGame extends Phaser.Game {
    constructor(config: GameConfig) {
        super(config);
    }
}

window.onload = () => new MeowGame(config);
