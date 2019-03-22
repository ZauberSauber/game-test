import 'phaser';


export default class ScoreScene extends Phaser.Scene {
    score: number;
    result: Phaser.GameObjects.Text;
    hint: Phaser.GameObjects.Text;

    constructor() {
        super({
            key: 'ScoreScene'
        })
    }


    init(params: any): void {
        const resultText: string = `Your score is ${this.score}!`;
        const hintText: string = 'Click to restart';

        this.result = this.add.text(200, 250, resultText, {
            font: '48px Arial Bold',
            fill: '#fbfbac'
        });

        this.hint = this.add.text(300, 350 , hintText, {
            font: '24px Arial Bold',
            fill: '#fbfbac'
        });

        this.input.on('pointerdown', function() {
            this.scene.start('WelcomeScene')
        }, this)
    }


    create(): void {}
}