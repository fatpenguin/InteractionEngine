var Attacks = {
    basic: function(target){
        var lifePoints = 1
        target.hit(lifePoints)
    },
    chargeAttack: function(target){
        var lifePoints = 5
        target.hit(lifePoints)
    },
    poison: function(target){
        if(target.passives.indexOf(poison) != -1){
            target.states.PoisonDuration += 5
        }
        else{
            target.states.PoisonDuration = 5
            target.passives.push(function(){
                target.hit(lifePoints)
                target.states.PoisonDuration--
                if(target.states.PoisonDuration == 0){
                    target.passives.splice(target.passives.indexOf(poison),1)
                    target.states.PoisonDuration = undefined
                }
            })
        }
    }
}