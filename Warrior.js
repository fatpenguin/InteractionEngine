function Warrior(special){
    Animated.call(this)
    this.attachInteraction(Appearance.defense)
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
		this.attachInteraction(Appearance.dead)
		this.die();
	}
}

function die(){
	console.log("I am dead")
	this.dead = true
	this.attachInteraction(Attitudes.dead)
}