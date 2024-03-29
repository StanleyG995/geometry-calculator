const main = document.querySelector('.main')
const shapesArray = Object.keys(shapes).map(key => shapes[key])
const shapesButtons = Array.from(document.querySelectorAll(".shape"))
const inputsArea = document.querySelector(".inputs")
const resultsArea = document.querySelector(".results")

const shapeName = document.querySelector('.current-shape-name')

const calculateButton = document.querySelector(".button-action")
const themeButton = document.querySelector('.theme-button')



let currentShape
let index
let inputs = []
let variables = []
let resultsLabels = []
let resultsValues = []
let methods = []

let theme = ''

const changeTheme = () => {
	if (theme === '') {
		theme = 'dark'
		main.classList.add('dark')
		themeButton.classList.add('theme-active')
	}
	else {
		theme = ''
		main.classList.remove('dark')
		themeButton.classList.remove('theme-active')
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
    resultsValues=[]
	inputsArea.innerHTML = ""
	resultsArea.innerHTML = ""

	for (let i = 0; i < shapesArray.length; i++) {
		if (i === indexOfButtons) {
			for (let key in shapesArray[i]) {
				if (typeof shapesArray[i][key] === "number") {
					inputs.push(key)
				} else {
					methods.push(shapesArray[i][key])
					resultsLabels.push(key)
				}
			}
		}
	}
}

const setFields = () => {

	shapeName.innerText = currentShape.querySelector('.shape-label').innerText

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
        <p class="result">${resultLabel} = <span class="result-value" </span></p>
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

console.log(shapesArray)

shapesButtons.forEach(shapeButton => {
	shapeButton.addEventListener("click", pickShape)
})

calculateButton.addEventListener("click", getInputValues)
themeButton.addEventListener('click', changeTheme)
