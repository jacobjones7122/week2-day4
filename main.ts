document.addEventListener('DOMContentLoaded', function(){
    let n = 0;
    let diceArray: Array<Die> = [];
    
    class Die {
        value: number;
        divDice: HTMLDivElement;

        constructor() {
            this.divDice = document.createElement('div');
            this.divDice.className = 'dice';
            this.roll();
            this.divDice.id = (`dice${n}`)
            document.getElementById('diceContainer').appendChild(this.divDice);
            console.log(diceArray);
            this.divDice.addEventListener('click', (event) => {
                 this.roll();
            });
            this.divDice.addEventListener('dblclick', (event) => {
                 let index = diceArray.indexOf(this);
                 diceArray.splice(index, 1);
                 document.getElementById('diceContainer').removeChild(this.divDice);
                 n--;
            })
        }
        roll() {
            let value = Math.floor(Math.random () * 6 + 1);
            if (value % 2 == 0) {
                this.divDice.className = 'diceEven';
            } else {
                this.divDice.className = 'dice';
            };
            this.divDice.innerHTML = value.toString();
        };
    };
    document.getElementById('btnDice').addEventListener('click', (event) => {
        let dice = new Die();
        diceArray.push(dice);
        n++;
    });
    document.getElementById('btnRoll').addEventListener('click', (event) => {
        for (let i = 0; i < diceArray.length; i++){
            diceArray[i].roll();
        };
    });
    document.getElementById('btnSum').addEventListener('click', (event) => {
        var sum = 0;
        for (let i = 0; i < diceArray.length; i++) {
            sum = sum + parseInt(diceArray[i].divDice.innerHTML);
        };
        alert(`The sum of the dice is ${sum}`)
    });
});