class Die {
    constructor() {
        this.roll();
        this.div = $('<div class="dieface"></div>');
        this.div.text(this.getDieFace);
        $('#dice-container').append(this.div);
        this.div.click(() => {
            this.reroll();
        });
        this.div.dblclick(() => {
            this.div.remove();
            let i = dice.indexOf(this);
            dice.splice(i, 1);
        });
    }

    reroll() {
        this.roll();
        this.getDieFace();
        this.div.text(this.dieFace);
    }

    roll() {
        this.value = Math.floor(Math.random() * 6) + 1;
    }

    getDieFace() {
        switch(this.value) {
            case 1:
                this.DieFace = '⚀';
                break;
            case 2:
                this.DieFace = '⚁';
                break;
            case 3:
                this.DieFace = '⚂';
                break;
            case 4:
                this.DieFace = '⚃';
                break;
            case 5:
                this.DieFace = '⚄';
                break;
            case 6:
                this.DieFace = '⚅';
                break;
        }
    }
};

let dice = [];

// $('.d-flex').append(`<div>${String.fromCodePoint(0x2680)}</div>`);

$('#gen-die').click(() => {
    let die = new Die();
    dice.push(die);
});

$('#reroll-die').click(() => dice.forEach(die => die.reroll()));

$('#sum-dice').click(() => {
    let sum = 0;
    for(let die of dice) {
        sum += die.value;
    }
});
