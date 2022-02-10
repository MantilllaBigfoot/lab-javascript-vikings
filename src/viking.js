// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];

  addViking(viking) {
    this.vikingArmy.push(
      new Viking(viking.name, viking.health, viking.strength)
    );
  }
  //console.log(new Viking(viking.name, viking.health, viking.streangth));

  addSaxon(saxon) {
    this.saxonArmy.push(new Saxon(saxon.health, saxon.strength));
  }
  vikingAttack() {
    let saxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
    let viking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
    let returnValue = '';
    returnValue = saxon.receiveDamage(viking.strength);
    if(saxon.health <= 0){
      let index = this.saxonArmy.indexOf(saxon);
      this.saxonArmy.splice(index, 1);
    }
    return returnValue;
  }
  saxonAttack() {
    let saxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
    let viking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
    let returnValue = '';
    returnValue = viking.receiveDamage(saxon.strength);
    console.log(viking.health);
    if(viking.health <= 0){
      let index = this.vikingArmy.indexOf(viking);
      this.vikingArmy.splice(index, 1);
    }
    return returnValue;
  }

  //SUPER BONUS
  soldierAttack(warrior){
    let returnValue = ``;
    if(warrior instanceof Saxon){
      returnValue = saxon.receiveDamage(viking.strength);
      if(saxon.health <= 0){
        let index = this.saxonArmy.indexOf(saxon);
        this.saxonArmy.splice(index, 1);
      }
    }
    else if(warrior instanceof Viking){
      returnValue = viking.receiveDamage(saxon.strength);
      if(viking.health <= 0){
        let index = this.vikingArmy.indexOf(viking);
        this.vikingArmy.splice(index, 1);
      }
    }
    return returnValue;

  }

  showStatus() {
    if(this.saxonArmy.length === 0){
      return `Vikings have won the war of the century!`
    }
    else if (this.vikingArmy.length === 0){
      return `Saxons have fought for their lives and survived another day...`
    }
    else{
      return `Vikings and Saxons are still in the thick of battle.`
    }
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
