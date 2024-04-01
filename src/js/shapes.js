const shapes = {
	square: {
		dimensions: {
			sideA: 0,
		},
		formulas: {
			circumference: function (sideA) {
				return 4 * sideA
			},
			area: function (sideA) {
				return sideA ** 2
			},
		},
		icon: '../../dist/img/shapes/square.png',
		alt: "square icon",
	},

	rectangle: {
		dimensions: {
			sideA: 0,
			sideB: 0,
		},
		formulas: {
			circumference: function (sideA, sideB) {
				return 2 * sideA + 2 * sideB
			},
			area: function (sideA, sideB) {
				return sideA * sideB
			},
		},
		icon: '../../dist/img/shapes/rectangle.png',
		alt: "rectanlge icon",
	},

	circle: {
		dimensions: {
			radius: 0,
		},
		formulas: {
			circumference: function (radius) {
				return 2 * Math.PI * radius
			},

			area: function (radius) {
				return Math.PI * radius ** 2
			},
		},
		icon: '../../dist/img/shapes/circle.png',
		alt: "circle icon",
	},

	triangle: {
		dimensions: {
			sideA: 0,
			sideB: 0,
			sideC: 0,
		},
		formulas: {
			validation: function (sideA, sideB, sideC) {
				if (
					sideA + sideB > sideC &&
					sideA + sideC > sideB &&
					sideB + sideC > sideA
				) {
					return true
				}
			},
			circumference: function (sideA, sideB, sideC, validation) {
				if (validation) {
					return sideA + sideB + sideC
				}
			},
			area: function (sideA, sideB, sideC, area, validation) {
				if (validation) {
					return Math.sqrt(
						area * (area - sideA) * (area - sideB) * (area - sideC)
					)
				}
			},
		},
		icon: '../../dist/img/shapes/triangle.png',
		alt: "triangle icon",
	},

	rhomboid: {
		dimensions: {
			diagonalA: 0,
			diagonalB: 0,
		},
		formulas: {
			area: function (diagonalA, diagonalB) {
				return (diagonalA * diagonalB) / 2
			},
		},
		icon: '../../dist/img/shapes/rhomboid.png',
		alt: "rhomboid icon",
	},

	rhombus: {
		dimensions: {
			sideA: 0,
			height: 0,
		},
		formulas: {
			area: function (sideA, height) {
				return sideA * height
			},
		},
		icon: '../../dist/img/shapes/rhombus.png',
		alt: "rhombus icon",
	},

	deltoid: {
		dimensions: {
			diagonalA: 0,
			diagonalB: 0,
		},
		formulas: {
			area: function (diagonalA, diagonalB) {
				return (diagonalA * diagonalB) / 2
			},
		},
		icon: '../../dist/img/shapes/deltoid.png',
		alt: "deltoid icon",
	},

	trapeze: {
		dimensions: {
			baseA: 0,
			baseB: 0,
			height: 0,
		},
		formulas: {
			area: function (baseA, baseB, height) {
				return ((baseA + baseB) / 2) * height
			},
		},
		icon: '../../dist/img/shapes/trapeze.png',
		alt: "trapeze icon",
	},

	cube: {
		dimensions: {
			sideA: 0,
		},
		formulas: {
			area: function (sideA) {
				return 6 * (sideA * sideA)
			},

			volume: function (sideA) {
				return sideA ** 3
			},
		},
		icon: '../../dist/img/shapes/cube.png',
		alt: "cube icon",
	},

	prism: {
		dimensions: {
			sideA: 0,
			sideB: 0,
			height: 0,
		},
		formulas: {
			area: function (sideA, sideB, height) {
				return 2 * (sideA * sideB) + 2 * (sideA * height) + 2 * (sideB * height)
			},

			volume: function (sideA, sideB, height) {
				return sideA * sideB * height
			},
		},
		icon: '../../dist/img/shapes/prism.png',
		alt: "prism icon",
	},

	sphere: {
		dimensions: {
			radius: 0,
		},
		formulas: {
			area: function (radius) {
				return 4 * Math.PI * radius ** 2
			},

			volume: function (radius) {
				return (4 / 3) * Math.PI * radius ** 3
			},
		},
		icon: '../../dist/img/shapes/sphere.png',
		alt: "speher icon",
	},

	cyllinder: {
		dimensions: {
			radius: 0,
			height: 0,
		},
		formulas: {
			area: function (radius, height) {
				return 2 * Math.PI * radius * height
			},

			volume: function (radius, height) {
				return Math.PI * radius ** 2 * height
			},
		},
		icon: '../../dist/img/shapes/cyllinder.png',
		alt: "cyllinder icon",
	},

	tetrahedron: {
		dimensions: {
			sideA: 0,
			height: 0,
			sideEdge: 0,
		},
		formulas: {
			area: function (sideA, height, sideEdge) {
				return (sideA * height) / 2 + 3 * ((sideA * sideEdge) / 2)
			},

			volume: function () {},
		},
		icon: '../../dist/img/shapes/tetrahedron.png',
		alt: "tetrahedron icon",
	},

	cone: {
		dimensions: {
			radius: 0,
			slant: 0,
			height: 0,
		},
		formulas: {
			area: function (radius, slant, height) {
				return Math.PI * radius * (radius + slant)
			},
	
			volume: function (radius, slant, height) {
				return (Math.PI * radius ** 2 * height) / 3
			},
		},
		icon: '../../dist/img/shapes/cone.png',
		alt: "cone icon",
	},
}
