//Yusef Hassan
//VFW 0412
//Project 2



//wait till DOM is ready
window.addEventListener("DOMContentLoaded", function(){

	//get element by ID function
	function e(x){
		var elemental = document.getElementById(x);
		return elemental;
	}
	
	//create select field element, populate with options
	function wheelHouse(){
		var formTag = document.getElementsByTagName("form"),
			selectLi = e("select"),
			makeSelect = document.createElement("select");
			makeSelect.setAttribute("id", "groups");
		//comeback to type of media
		for (var i=0, j=typeOfMedia.length; i<j; i++){
			var makeOption = document.createElement("option");
			var optText = typeOfMedia[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);
	}
	
	//find value of radio button
	function getSelectedRadio(){
		var radios = document.forms[0].sex;
		for(var i=0; i<radios.length; i++){
			if(radios[i].checked){
				sexValue = radios[i].value;
			}
		}
	}
	
	function getCheckBoxValue(){
		if(e("reliable").checked){
			reliableValue = e("reliable").value;
		}else{
			reliableValue = "No"
		}
	}	
	
	function getCheckBoxValue(){
		if(e("job").checked){
			jobValue = e("job").value;
		}else{
			jobValue = "No"
		}
	}
	
	function getCheckBoxValue(){
		if(e("replace").checked){
			replaceValue = e("replace").value;
		}else{
			replaceValue = "No"
		}
	}
	
	function getCheckBoxValue(){
		if(e("trust").checked){
			trustValue = e("trust").value;
		}else{
			trustValue = "No"
		}
	}
	
	function toggleControls(n){
		switch(n){
			case "on":
				e("accountInfo").style.display = "none";
				e("remove").style.display = "inline";
				e("allAccounts").style.display = "none";
				e("addAccount").style.display = "inline";
				break;
			case "off":
				e("accountInfo").style.display = "block";
				e("remove").style.display = "inline";
				e("allAccounts").style.display = "inline";
				e("addAccount").style.display = "none";
				e("items").style.display = "none";
				break;
			default:
				return false;
		}
	}
	
	function saveData(){
		var id = Math.floor(Math.random()*100000001);
		//gather form field data, store in object, object contains array with form label and input value
		getSelectedRadio();
		getCheckBoxValue();		
		var item = {};
			item.fname =["First Name:", e("fname").value];
			item.lname =["Last Name:", e("lname").value];
			item.sex =["Sex:", sexValue];
			item.age =["Age:", e("ageRange").value];
			item.reliable =["Is the borrower reliable?", reliableValue];
			item.job =["Do they have a job?", jobValue];
			item.replace =["If broken, could they replace it?", replaceValue];
			item.trust =["Do you fully trust them?", trustValue];
			item.group =["Group:", e("groups").value];
			item.dname =["Disc Name:", e("dname").value];
			item.value =["Value:", e("value").value];
			item.ldate =["Date Lent:", e("ldate").value];
			item.rdate =["Expected Return Date:", e("rdate").value];
			item.comments =["Anymore Information?", e("comments").value];

		localStorage.setItem(id, JSON.stringify(item));
		alert("Information Logged");
	}
	
	function getData(){
		toggleControls("on");
		if(localStorage.length === 0){
			alert("No saved accounts");
		}
		var makeDiv = document.createElement("div");
		makeDiv.setAttribute("id", "items");
		var makeList = document.createElement("ul");
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		e("items").style.display = "block";
		for(var i = 0, len = localStorage.length; i<len; i++){
			var makeli = document.createElement("li");
			makeList.appendChild(makeli);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			var obj = JSON.parse(value);
			var makeSubList = document.createElement("ul");
			makeli.appendChild(makeSubList);
			for(var n in obj){
				var makeSubli = document.createElement("li");
				makeSubList.appendChild(makeSubli);
				var optSubText = obj[n][0]+" "+obj[n][1];
				makeSubli.innerHTML = optSubText;
			}
		}
	}
	
	function deleteData(){
		if(localStorage.legnth === 0){
			alert("Nothing to delete!")
		}else{
			localStorage.clear();
			alert("All accounts deleted.");
			window.location.reload();
			return false;
		}
	}
	// variable defaults
	var typeOfMedia = ["--Movies--", "DVD", "VHS", "Blu-Ray", "--Games--", "Xbox 360", "PS3", "Wii" ],
		sexValue,
		reliableValue = "No",
		jobValue = "No",
		replaceValue = "No",
		trustValue = "No"
	;
	wheelHouse();
	
	//links and submit button
	var removeLink = e ("remove");
	removeLink.addEventListener("click", deleteData);
	var viewLink = e ("allAccounts");
	viewLink.addEventListener("click", getData);
	var save = e("submit");
	save.addEventListener("click", saveData);

});