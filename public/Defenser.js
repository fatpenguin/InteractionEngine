function Warrior(special){
    Animated.call(this)
    this.attachInteraction(Appearance.defense)
	this.attachInteraction(Attitudes.defense)
	this.attachInteraction(bodySetup)
	if(special){
		this.attack = Attacks.chargeAttack
		this.attachInteraction(Appearance.strong)
	}
	
}

Warrior.prototype = Object.create(Animated.prototype)
Warrior.prototype.constructor = Warrior

var bodySetup = {
	lifePoints: 100,
	hit: hit,
	die: die
}

function hit(attacker,points) {
    this.lifePoints -= points
    Attacks.poison(attacker)
	if (this.lifePoints <= 0) {
		this.die();
	}
}

function die(){
	this.dead = true
    this.attachInteraction(Appearance.dead)
    this.attachInteraction(Attitudes.dead)
    this.hit = function(){
        
    }
}