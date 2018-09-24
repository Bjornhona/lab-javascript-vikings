// Soldier
function Soldier(healthArg, strengthArg) {
  this.health = healthArg;
  this.strength = strengthArg;
}

Soldier.prototype.attack = function () {
  return this.strength;
}

Soldier.prototype.receiveDamage = function (damage) {
  this.health -= damage;
}

// Viking
function Viking(nameArg, healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);
  this.name = nameArg;
}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.attack = function () {
  return this.strength;
}

Viking.prototype.receiveDamage = function (damage) {
  this.health -= damage;
  if (this.health <= 0) {
    return `${this.name} has died in act of combat`;
  } else {
  return `${this.name} has received ${damage} points of damage`;
  }
}

Viking.prototype.battleCry = function () {
  return 'Odin Owns You All!';
}

// Saxon
function Saxon (healthArg, strengthArg) {
  Soldier.call(this, healthArg, strengthArg);
}
Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.attack = function () {
  return this.strength;
}

Saxon.prototype.receiveDamage = function (damage) {
  this.health -= damage;
  if (this.health <= 0) {
    return `A Saxon has died in combat`;
  } else {
  return `A Saxon has received ${damage} points of damage`;
  }
}

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function (viking) {
  this.vikingArmy.push(viking);
}

War.prototype.addSaxon = function (saxon) {
  this.saxonArmy.push(saxon);
}