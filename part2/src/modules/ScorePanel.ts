// 记分牌
class ScorePanel {
    score: number = 0;
    level: number = 1;

    scoreEle: HTMLElement;
    levelEle: HTMLElement;

    maxLevel: number;
    // 升级阶梯
    upScore: number

    constructor(maxLevel: number = 10, upScore: number = 10) {
        this.maxLevel = maxLevel;
        this.upScore = upScore;
        this.scoreEle = document.getElementById("score")!;
        this.levelEle = document.getElementById("level")!;
    }

    addScore() {
        this.score += 1;
        this.scoreEle.innerText = `${this.score}`;
        if (this.score % this.upScore === 0) {
            this.levelUp()
        }
    }
    levelUp() {
        if (this.level < this.maxLevel) {
            this.level += 1;
            this.levelEle.innerText = `${this.level}`;
        }
    }
}

export default ScorePanel;