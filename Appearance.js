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
	  color: [0,255,0],
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
	}
}