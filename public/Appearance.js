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
			if(this.vector.x== -1){
				this.visual.facing = "est"
				image(zeldaSprite,this.pos.x,this.pos.y,17,24,766+(Math.floor(this.visual.frameCounter/5))%8*23,102,17,24)
				this.visual.frameCounter++
			}
			else if(this.vector.x == 1){
				this.visual.facing = "west"
				image(zeldaSprite,this.pos.x,this.pos.y,17,24,764+(7-(Math.floor(this.visual.frameCounter/5))%8)*23,127,17,24)
				this.visual.frameCounter++
            }
            else if(this.vector.y == -1){
                this.visual.facing = "north"
				image(zeldaSprite,this.pos.x,this.pos.y,17,24,456+(Math.floor(this.visual.frameCounter/5))%8*23,131,17,24)
				this.visual.frameCounter++
            }
            else if(this.vector.y == 1){
                this.visual.facing = "south"
				image(zeldaSprite,this.pos.x,this.pos.y,17,24,101+(Math.floor(this.visual.frameCounter/5))%8*23,127,17,24)
				this.visual.frameCounter++
            }
			else{
				this.visual.frameCounter = 0;
				switch(this.visual.facing){
					case "est":	image(zeldaSprite,this.pos.x,this.pos.y,17,24,766+1*23,102,17,24)
                                                break;
                    case "north":	image(zeldaSprite,this.pos.x,this.pos.y,17,24,456+3*23,131,17,24)
                    break;
                    case "south":	image(zeldaSprite,this.pos.x,this.pos.y,17,24,101+3*23,127,17,24)
                    break;
					default: 	image(zeldaSprite,this.pos.x,this.pos.y,17,24,764+3*23,127,17,24)
										break
				}
			}
	  }
	}
}
