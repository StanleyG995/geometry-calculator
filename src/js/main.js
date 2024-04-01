const main = document.querySelector(".main")
const shapesDimensions = Object.keys(shapes).map(key => shapes[key].dimensions)
const shapesFormulas = Object.keys(shapes).map(key => shapes[key].formulas)
const shapesAlts = Object.keys(shapes).map(key => shapes[key].alt)
const shapesSources = Object.keys(shapes).map(key => shapes[key].icon)
const shapesButtons = Array.from(document.querySelectorAll(".shape"))
const shapesIcons = Array.from(document.querySelectorAll(".shape-icon"))
const inputsArea = document.querySelector(".inputs")
const resultsArea = document.querySelector(".results")

const shapeName = document.querySelector(".current-shape-name")

const calculateButton = document.querySelector(".button-action")
const themeButton = document.querySelector(".theme-button")

let currentShape
let index
let inputs = []
let variables = []
let resultsLabels = []
let resultsValues = []
let methods = []

let theme = ""

const setShapesIcons = () => {
	for (let i = 0; i < shapesIcons.length; i++) {
		shapesIcons[i].src = shapesSources[i]
		shapesIcons[i].alt = shapesAlts[i]
	}
}

const changeTheme = () => {
	if (theme === "") {
		theme = "dark"
		main.classList.add("dark")
		themeButton.classList.add("theme-active")
	} else {
		theme = ""
		main.classList.remove("dark")
		themeButton.classList.remove("theme-active")
	}
}

const pickShape = e => {
	shapesButtons.forEach(shape => {
		shape.firstChild.classList.remove("shape-active")
	})
	e.target.firstChild.classList.add("shape-active")
	currentShape = e.target
	console.log(currentShape)

	index = getShapeInfo()
	setFields()
}

const getShapeInfo = () => {
	const indexOfButtons = shapesButtons.findIndex(item => item === currentShape)

	inputs = []
	methods = []
	resultsLabels = []
	resultsValues = []
	inputsArea.innerHTML = ""
	resultsArea.innerHTML = ""

	for (let i = 0; i < shapesDimensions.length; i++) {
		if (i === indexOfButtons) {
			for (let key in shapesDimensions[i]) {
				inputs.push(key)
			}
		}
	}

	for (let i = 0; i < shapesFormulas.length; i++) {
		if (i === indexOfButtons) {
			for (let key in shapesFormulas[i]) {
				resultsLabels.push(key)
				methods.push(shapesFormulas[i][key])
			}
		}
	}
}

const setFields = () => {
	shapeName.innerText = currentShape.querySelector(".shape-label").innerText

	inputs.forEach(input => {
		const newInput = document.createElement("div")
		newInput.innerHTML = `
             <div class="input-group">
                <label for='input'>${input}:</label>
                <input type='number' class='input' id='${input}-input'>
              </div>
        `
		inputsArea.appendChild(newInput)
	})

	resultsLabels.forEach(resultLabel => {
		const newResult = document.createElement("div")
		newResult.innerHTML = `
        <p class="result">${resultLabel} = <span class="result-value">0</span></p>
        `
		resultsArea.appendChild(newResult)
	})
}

const getInputValues = () => {
	const inputValues = document.getElementsByClassName("input")

	variables = []

	for (let i = 0; i < inputValues.length; i++) {
		variables[i] = inputValues[i].value
	}
	console.log(variables)
	calculate()
}

const calculate = () => {
	resultsValues = []
	const results = document.getElementsByClassName("result-value")
	methods.forEach(method => {
		resultsValues.push(method(...variables))
	})

	for (let i = 0; i < resultsValues.length; i++) {
		results[i].innerText = resultsValues[i].toFixed(2)
	}
}

setShapesIcons()

shapesButtons.forEach(shapeButton => {
	shapeButton.addEventListener("click", pickShape)
})

calculateButton.addEventListener("click", getInputValues)
themeButton.addEventListener("click", changeTheme)
