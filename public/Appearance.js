// img = loadImage("/images/perso.png");

var Appearance = {
	attack: {
	  color: [255,0,0],
	  show: function(){
		fill(this.color[0],this.color[1],this.color[2])
		ellipse(this.pos.x,this.pos.y,20,20)
	  }
	},
	strong: {
	  color: [255,255,0],
	  show: function(){
		fill(this.color[0],this.color[1],this.color[2])
		ellipse(this.pos.x,this.pos.y,20,20)
	  }
	},
	defense: {
	  color: [0,0,255],
	  show: function(){
		fill(this.color[0],this.color[1],this.color[2])
		ellipse(this.pos.x,this.pos.y,20,20)
	  }
	},
	poisoned: {
	  color: [0,0,255],
	  show: function(){
		fill(this.color[0],this.color[1],this.color[2])
		ellipse(this.pos.x,this.pos.y,20,20)
	  }
	},
	dead: {
	  color: [255,0,255],
	  show: function(){
		fill(this.color[0],this.color[1],this.color[2])
		ellipse(this.pos.x,this.pos.y,20,20)
	  }
	},
	zelda: {
		visual: {
			facing: "south",
			frameCounter: 0
		},
		show: function(){
			if(this.vector.y == 1){
				this.visual.facing = "est"
				image(zeldaSprite,this.pos.x,this.pos.y,50,30,787+(Math.floor(this.visual.frameCounter/5))%7*23,128,16,30)
				this.visual.frameCounter++
			}
			else if(this.vector.y == -1){
				this.visual.facing = "west"
				image(zeldaSprite,this.pos.x,this.pos.y,50,30,787+(Math.floor(this.visual.frameCounter/5))%7*23,128,16,30)
				this.visual.frameCounter++
			}
			else{
				this.visual.frameCounter = 0;
				switch(this.visual.facing){
					case "est":	image(zeldaSprite,this.pos.x,this.pos.y,50,30,787+3*24,128,16,24)
												break;
					default: 	image(zeldaSprite,this.pos.x,this.pos.y,50,30,787+3*24,128,16,24)
										break
				}
			}
	  }
	}
}
