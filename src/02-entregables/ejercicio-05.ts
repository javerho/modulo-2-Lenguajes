console.log('************** DELIVERABLE 05 *********************');

class SlotMachine {
  coins: number = 1;
  boolean1: boolean;
  boolean2: boolean;
  boolean3: boolean;

  radomBoolean(randomBoolean): boolean {
    return Math.random() >= 0.5;
  }

  win(): void {
    console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
    this.coins = 1;
  }

  lose(): void {
    console.log('Good luck next time!!');
    this.coins++;
  }

  play(): void {
    if (
      ((this.radomBoolean(this.boolean1) ===
        this.radomBoolean(this.boolean2)) ===
        this.radomBoolean(this.boolean3)) ===
      true
    ) {
      this.win();
    } else {
      this.lose();
    }
  }
}

const machine1 = new SlotMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
