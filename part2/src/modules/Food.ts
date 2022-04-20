class Food {
    element: HTMLElement;
    constructor() {
        this.element = document.getElementById("food")!;
    }

    // 获取食物坐标
    get x() {
        return this.element.offsetLeft;
    }
    get y() {
        return this.element.offsetTop
    }

    // 修改食物位置
    change() {
        // 生成随机数
        //蛇一次移动10，一格的大小是10，所以食物的位置一定是10的整数倍

        let top = Math.round(Math.random() * 29) * 10;
        let left = Math.round(Math.random() * 29) * 10;
        this.element.style.left = `${left}px`;
        this.element.style.top = `${top}px`;
    }
}

export default Food;