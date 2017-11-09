var Person = require("./standartObject")
var Animated = require("./animatedObject")

var descriptionAttack = {
  vie: 80,
  attack: function(victime){
    if(victime.hit){
      victime.hit(10)
      this.attacked = true
    }
  },
  hit: function(degats){
    this.vie -= degats
  }
}

var descriptionDefence = {
  vie: 80,
  attack: function(victime){
    if(victime.hit){
      victime.hit(10)
      this.attacked = true
    }
  }/*,
  hit: function(degats){
    this.vie -= degats
  }*/
}

var person1 = new Animated({x: 10,y: 20,z: 30},function(){
  console.log("J'ai encore ", this.vie, " points de vie")
})

var person2 = new Animated({x: 11,y: 22,z: 33},function(){
  console.log("Et zut il me reste: ", this.vie, " points de vie")
})

person2.attachInteraction(descriptionDefence)
person1.attachInteraction(descriptionAttack)

person1.update()
person2.update()

person1.attack(person2)

person1.changeAttitude(function(){
  if(this.attacked){
    console.log("J'ai attaqué wéééé")
    this.attacked = false
  }
  else{
    console.log("Merde j'ai pas attaqué")
  }
})

person1.update()
person2.update()


  person1.attack(person2)
  person1.update()
  person2.update()
