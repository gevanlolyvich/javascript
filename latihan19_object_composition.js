//ini kasusnya adalah character yang memiliki kemampuan yang sama dengan characcter lain 
class Character {
    constructor(name, health, position) {
        this.name = name;
        this.health = health;
        this.position = position;
    }

    canMove() {
        console.log(`${this.name} moves to another position`);
    }
}

function canAttack(character) {
    return {
        attack: () => {
            console.log(`${character.name} attack with a weapon`);
        }
    };
}

function canDefense(character) {
    return {
        defense: () => {
            console.log(`${character.name} defends with a shield`);
        }
    };
}

function canCastSpell(character) {
    return {
        castSpell: () => {
            console.log(`${character.name} cast a spell`);
        }
    };
}

function createMonster(name) {
    const char = new Character(name, 100, 0);
    return Object.assign(char, canAttack(char));
}

function createGuardian(name) {
    const char = new Character(name, 100, 0);
    return Object.assign(char, canDefense(char));
}

function createWizard(name) {
    const char = new Character(name, 100, 0);
    return Object.assign(char, canCastSpell(char));
}

function createWarrior(name) {
    const char = new Character(name, 100, 0);
    return Object.assign(char, canAttack(char), canDefense(char));
}

const monster = createMonster('Monster');
monster.canMove();
monster.attack();

const guardian = createGuardian('Guardian');
guardian.canMove();
guardian.defense();
 
const wizard = createWizard('Wizard');
wizard.canMove();
wizard.castSpell();
 
const warrior = createWarrior('Warrior');
warrior.canMove();
warrior.attack();
warrior.defense();