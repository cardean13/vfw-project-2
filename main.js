//Yusef Hassan
//VFW 0412
//Project 2



//wait till DOM is ready
window.addEventListener("DOMcontentloaded", function(){
	
	alert(localStorage.value(0));
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
	
	//find value of radio button
	function getSelectedRadio(){
		var radio = document.form[0].sex;
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
	function saveData(){
		var id = Math.floor(Math.random()*123456);
		//gather form field data, store in object, object contains array with form label and input value
		getSelectedRadio();
		getCheckBoxValue();		
		var item = {};
			item.fname =["First Name:", e("fname").value];
			item.lname =["Last Name:", e("lname").value];
			item.sex =["Sex", sexValue];
			item.age =["Age", e("ageRange").value];
			item.reliable =["Is the borrower reliable?", reliableValue];
			item.job =["Do they have a job?", jobValue];
			item.replace =["If broken, could they replace it?", replaceValue];
			item.trust =["Do you fully trust them?", trustValue];
			item.dname =["Disc Name", e("dname").value];
			item.value =["Value", e("value").value];
			item.ldate =["Date Lent", e("ldate").value];
			item.rdate =["Expected Return Date", e("rdate").value];
			item.comments =["Anymore Information?", e("comments").value];

		localStorage.setItem(id, JSON.stringify(item));
		alert("Information Logged");
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