//This function sets values for the user's preference.
//Use "" if the value is NULL or the user doesn't have anything to put there
//numNum is how many dishes we want to load
export function preferences(dietBool, intolerancesBool, numNum) {
	diet = dietBool
	intolerances = intolerancesBool
	num = numNum
	apiKey = "b599358e847b4871a0cd0b9d625b31a1"
	xmlRequest()
}
var diet = ""
var intolerances = ""
var num = 0
var data = ""
var apiKey = ""

//Makes the call to get info from spoonacular and stores the data
export function xmlRequest() {
	var requestURL = "https://api.spoonacular.com/recipes/complexSearch?diet="+diet+"intolerances="+intolerances+"&addRecipeInformation=true&addRecipeNutrition=true&number="+num+"&apiKey="+apiKey
	var request = new XMLHttpRequest()
	request.onreadystatechange = function() {
    	if (this.readyState == 4 && this.status == 200) {
       	console.log("pog")
    	}
	};
	request.open('GET', requestURL, true)
	request.onload = function(){
  	data = JSON.parse(this.response)
  	console.log(data)
	  makeBody(data)
	}
	request.send()
}

//Makes the entires on #root
function makeBody(menu) {
	const app = document.getElementById('root')
  for(var i = 0; i < num; i++)
	{
		const text = document.createElement('p')
		text.textContent = menu.results[i].title
		text.setAttribute('class', 'text')

		const button = document.createElement('button')
		button.textContent = "More info"
		button.onclick = moreInfo
		button.setAttribute('id', i)
		button.setAttribute('class', "moreInfo")

		const card = document.createElement('div')
		card.setAttribute('class', 'card')
		card.style.background = "url("+menu.results[i].image+") no-repeat"

		card.append(text)
		card.append(button)
		app.append(card)
	}
}

//A simple popup that appears for more info
function moreInfo(index) {
	if(document.getElementById("popup") != null) {
		document.getElementById("popup").remove()
	}
	const app = document.getElementById('root')

	const text = document.createElement('div')
	text.innerHTML = "<img class=\"popupImg\" src="+data.results[this.id].image+"></img" + data.results[this.id].summary
	text.setAttribute('id', 'popup')

	const button = document.createElement('button')
	button.setAttribute('class', 'close')
	button.textContent = "Close"
	button.onclick = close

	const br = document.createElement('br')

	text.append(br)
	text.append(button)
	app.append(text)
}

//A method to close the popup
function close() {
	var popup = document.getElementById("popup")
	popup.remove()
}

// export preferences, xmlRequest;
