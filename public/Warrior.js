function Warrior(special){
    Animated.call(this)
    this.attachInteraction(Appearance.attack)
	this.attachInteraction(Attitudes.aggresiv)
	this.attachInteraction(bodySetup)
	if(special){
		this.attack = Attacks.chargeAttack
		this.attachInteraction(Appearance.strong)
	}
	
}

Warrior.prototype = Object.create(Animated.prototype)
Warrior.prototype.constructor = Warrior

var bodySetup = {
	lifePoints: 150,
	attack: Attacks.basic,
	hit: hit,
	die: die
}

function hit(attacker,points) {
	this.lifePoints -= points
	if (this.lifePoints <= 0) {
		this.die();
	}
}

function die(){
	this.attachInteraction(Appearance.dead)
	this.dead = true
	this.attachInteraction(Attitudes.dead)
}