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
	
	function saveData(){
		var id = Math.floor(Math.random()*123456);
		//gather form field data, store in object, object contains array with form label and input value
		var item = {};
			item.fname =["First Name:", e("fname").value];
			item.lname =["Last Name:", e("lname").value];
			//sex
			item.sex =["First Name", e("fname").value];
			item.age =["Age", e("ageRange").value];
			item.reliable =["Is the borrower reliable?", e("reliable").value];
			item.job =["Do they have a job?", e("job").value];
			item.replace =["If broken, could they replace it?", e("replace").value];
			item.trust =["Do you fully trust them?", e("trust").value];
			item.dname =["Disc Name", e("dname").value];
			item.value =["Value", e("value").value];
			item.ldate =["Date Lent", e("ldate").value];
			item.rdate =["Expected Return Date", e("rdate").value];
			item.comments =["Anymore Information?", e("comments").value];

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