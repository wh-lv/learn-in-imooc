import Snake from './Snake';
import Food from './Food';
import ScorePanel from './ScorePanel';

class GameControl {
    // 
    snake: Snake;
    food: Food;
    scorePanle: ScorePanel;

    // 存储当前蛇的移动方向
    direction: string = "";
    // 
    isLive: boolean = true;

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanle = new ScorePanel();

        this.init();
    }

    init() {
        // 绑定键盘事件
        document.addEventListener("keydown", this.keyDownHandler.bind(this));
        this.run();
    }
    keyDownHandler(event: KeyboardEvent) {
        this.direction = event.key;
    }

    // 控制蛇移动
    run() {
        let x = this.snake.X;
        let y = this.snake.Y;
        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                y -= 10;
                break;
            case "ArrowRight":
            case "Right":
                x += 10;
                break;
            case "ArrowDown":
            case "Down":
                y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                x -= 10
                break;
        }

        // 检查蛇是否吃到食物
        this.checkEat(x, y);

        try {
            this.snake.X = x;
            this.snake.Y = y;
        } catch (error: any) {
            alert(`${error.message}游戏结束！`);
            this.isLive = false;
        }

        const delay = 300 - (this.scorePanle.level - 1) * 10 >= 100 ? 300 - (this.scorePanle.level - 1) * 10 : 100;
        this.isLive && setTimeout(this.run.bind(this), delay);
    }

    // 检查蛇是否迟到食物
    checkEat(x: number, y: number) {
        if (x === this.food.x && y === this.food.y) {
            this.food.change();
            this.scorePanle.addScore();
            this.snake.addBody();
        }
    }
}

export default GameControl;