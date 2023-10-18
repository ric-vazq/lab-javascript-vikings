// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack = () => this.strength; 
    
    receiveDamage(damage) {
        if (damage < this.health) {
            this.health -= damage;
        }
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super (health, strength);
        this.name = name
    }
receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else if (this.health <= 0) { return `${this.name} has died in act of combat` }
}
battleCry() {
    return 'Odin Owns You All!'
}

}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else if (this.health <= 0) { return `A Saxon has died in combat` }
    }
}

// War
class War {
    constructor () {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(Viking) {
        this.vikingArmy.push(Viking); 
    }
    
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }

    vikingAttack() {
        let getRandomInt = max => Math.floor(Math.random() * max)
        let randomSaxon = this.saxonArmy[getRandomInt(this.saxonArmy.length)];
        let randomViking = this.vikingArmy[getRandomInt(this.vikingArmy.length)];
        let fight = randomSaxon.receiveDamage(randomViking.attack());
        if (fight === `A Saxon has died in combat`) {
            this.saxonArmy.splice(this.vikingArmy.indexOf(randomViking), 1);
        }
        return fight;
    }
    saxonAttack() {
        let getRandomInt = max => Math.floor(Math.random() * max)
        let randomSaxon = this.saxonArmy[getRandomInt(this.saxonArmy.length)];
        let randomViking = this.vikingArmy[getRandomInt(this.vikingArmy.length)];
        let fight = randomViking.receiveDamage(randomSaxon.strength);
        if (fight === `${randomViking.name} has died in act of combat`) {
            this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking), 1);
        }
        return fight;
    }

    showStatus() {
        if (this.saxonArmy.length === 0 && this.vikingArmy.length >= 1) {
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length === 0 && this.saxonArmy.length >= 1) {
            return "Saxons have fought for their lives and survived another day..."
        } else return "Vikings and Saxons are still in the thick of battle."
    }
}

