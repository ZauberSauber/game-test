import 'phaser';


export default class WelcomeScene extends Phaser.Scene {
    title: Phaser.GameObjects.Text;
    hint: Phaser.GameObjects.Text;

    constructor() {
        super({
            key: 'WelcomeScene'
        })
    }


    create(): void {
        const titleText: string = 'Welcome to meow games';
        const hintText: string = 'Starfall';

        this.title = this.add.text(25, 200, titleText, {
            font: '72px Arial Bold',
            fill: '#fbfbac',
        });

        this.title = this.add.text(300, 350, hintText, {
            font: '24px Arial Bold',
            fill: '#fbfbac',
        });

        this.input.on('pointerdown', function() {
            this.scene.start('GameScene')
        }, this);
    }
}