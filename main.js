//Yusef Hassan
//VFW 0412
//Project 2



//wait till DOM is ready
window.addEventListener("DOMcontentloaded", function(){
	//get element by ID function
	function e(x){
		var id = document.getElementById(x);
		return id;
	}
	
	//create select field element, populate with options
	function wheelHouse (){
		var formTag = document.getElementsByTagName("form"),
			selectoptgroup = e("select"),
			makeSelect = document.createElement("select");
			makeSelect.setAttribute("id", "groups")
		for (var i=0, j=typeOfMedia.length; i<j; i++){
			var makeOption = document.createElement("option");
			var optText = typeOfMedia[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML=optText;
			makeSelect.appendChild(makeOption);
		}
		selectoptgroup.appendChild(makeSelect);
	}
	
	// variable defaults
	var typeOfMedia = ["--Movies--", "DVD", "VHS", "Blu-Ray", "--Games--", "Xbox 360", "PS3", "Wii" ]
	wheelHouse();
	
	//links and submit button
	var removeLink = e ("remove");
	removeLink.addEventListener("click", deleteData);
	var viewLink = e ("allAccounts");
	viewLink.addEventListener("click", getData);
	var save = e("submit");
	save.addEventListener("click", saveData);
	

















});