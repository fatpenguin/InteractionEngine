function Animated(){
    GenericObject.call(this)
    this.attachInteraction(base)
}

Animated.prototype = Object.create(GenericObject.prototype)
Animated.prototype.constructor = Animated

var base = {
    attitude: function(){
        console.log("Non determined attitude function")
    },
    show: function(){
        console.log("Non determined show function")
    },
    update: function(){
        for(var i=0;i<this.passives.length;i++){
        this.passives[i].call(this);
        }
        this.attitude()
    },
    passives: [],
    states = {}
}
