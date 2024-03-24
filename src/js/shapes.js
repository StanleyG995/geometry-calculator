const shapes = {
	square: {
		sideA: 0,
		area: function (sideA) {
			return sideA ** 2
		},
	},
	
	rectangle: {
		sideA: 0,
		sideB: 0,
	
		circumference: function (sideA, sideB) {
			return 2 * sideA + 2 * sideB
		},

		area: function (sideA, sideB) {
			return sideA * sideB
		},
		
	},
	
	circle: {
		radius: 0,
	
		circumference: function (radius) {
			return 2 * Math.PI * radius
		},

		area: function (radius) {
			return Math.PI * radius ** 2
		},

	},
	
	triangle: {
		base: 0,
		height: 0,
	
		area: function (base, height) {
			return (base * height) / 2
		},
	},
	
	rhomboid: {
		diagonalA: 0,
		diagonalB: 0,
	
		area: function(diagonalA, diagonalB) {
			return (diagonalA * diagonalB) / 2
		}
	},
	
	rhombus: {
		sideA: 0,
		height: 0,
	
		area: function(sideA, height) {
			return sideA * height
		}
	},
	
	deltoid: {
		diagonalA: 0,
		diagonalB: 0,
	
		area: function(diagonalA, diagonalB) {
			return (diagonalA * diagonalB) / 2
		}
	},
	
	trapeze: {
		baseA: 0,
		baseB: 0,
		height: 0,
	
		area: function(baseA, baseB, height) {
			return ((baseA + baseB) / 2) * height
		}
	},
	
	cube: {
		sideA: 0,
	
		area: function(sideA) {
			return 6 * (sideA * sideA)
		},
	
		volume: function(sideA) {
			return sideA ** 3
		}
	},
	
	prism: {
		sideA: 0,
		sideB: 0,
		height: 0,
	
		area: function(sideA, sideB, height) {
			return 2 * (sideA * sideB) + 2 * (sideA * height) + 2 * (sideB * height)
		},
	
		volume: function(sideA, sideB, height) {
			return sideA * sideB * height
		}
	},
	
	sphere: {
		radius: 0,
	
		area: function(radius) {
			return 4 * Math.PI * (radius ** 2)
		},
	
		volume: function(radius) {
			return (4 / 3) * Math.PI * (radius ** 3)
		}
	},
	
	cylinder: {
		radius: 0,
		height:0,
	
		area: function(radius, height) {
			return 2 * Math.PI * radius * height
		},
	
		volume: function(radius, height) {
			return Math.PI * (radius ** 2) * height
		}
	},

	tetrahedron: {
		sideA: 0,
		height: 0,
		sideEdge: 0,
	
		area: function(sideA, height, sideEdge) {
			return ((sideA * height) / 2) + 3 * ((sideA * sideEdge) / 2)
		},
	
		volume: function() {
		}
	},
	
	cone: {
		radius: 0,
		slant: 0,
		height: 0,
	
		area: function(radius, slant, height) {
			return Math.PI * radius * (radius + slant)
		},
	
		volume: function(radius, slant, height) {
			return (Math.PI * (radius ** 2) * height) / 3
		}
	},
}
