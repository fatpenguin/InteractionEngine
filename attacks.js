var Attacks = {
    basic: function(target){
        var lifePoints = 1
        target.hit(this,lifePoints)
    },
    chargeAttack: function(target){
        var lifePoints = 5
        target.hit(this,lifePoints)
    },
    poison: function(target){
        if(target.passives.hasOwnProperty("poison")){
            target.states.PoisonDuration += 5
        }
        else{
			var self = this
            target.states.PoisonDuration = 5
            target.passives.poison = function(){
				var lifePoints = 1
                this.hit(self,lifePoints)
                this.states.PoisonDuration--
                if(this.states.PoisonDuration == 0){
                    this.passives.poison = undefined
                    this.states.PoisonDuration = undefined
                }
            }
        }
    }
}