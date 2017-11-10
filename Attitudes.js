Attitudes = {
	aggresiv: function () {
		return {
			attitude: function () {
				var targets = World.getTarget()
				var closest = {
					pos: {
						x: 0,
						y: 0
					}
				}
				var closestDistance = 100000
				for (var i = 0; i < targets.length; i++) {
					if (!targets[i].dead && targets[i].pos.x !== this.pos.x && targets[i].pos.y !== this.pos.y) {
						var target = targets[i]
							var distanceX = (target.pos.x - this.pos.x) * (target.pos.x - this.pos.x)
							var distanceY = (target.pos.y - this.pos.y) * (target.pos.y - this.pos.y)
							var totalDistance = Math.sqrt(distanceY + distanceX)
							if (totalDistance < closestDistance) {
								closest = target
								closestDistance = totalDistance
							}
					}
				}
				if (closestDistance < 20) {
					this.attack(closest)
				} else if(closestDistance == 100000){
					
				}else {
					var versX;
					var versY;
					if ((closest.pos.x - this.pos.x) > 0) {
						versX = 5
					} else {
						versX = -5
					}
					if ((closest.pos.y - this.pos.y) > 0) {
						versY = 5
					} else {
						versY = -5
					}
					this.move(versX, versY)
				}
			}
		}
	}(),
	dead: function(){
		return {
			attitude: function(){
			
			}
		}
	}()
}