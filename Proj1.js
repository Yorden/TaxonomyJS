function onloadFunction(){
	$.getJSON('./data.json', function(data) {         
		console.log(data);
	});
}

function changeData(level){

	var body = document.getElementById("parentContainer")
	if(level == 1){
		//if the level 2 does not equal null, remove the level2 element from the body
		if(document.getElementById("level2") != null){
			body.removeChild(document.getElementById("level2"));
		}
		if(document.getElementById("level3") != null){
			body.removeChild(document.getElementById("level3"));
		}
		//if the value of level 1 is fruit
		if($("level1").value == "fruit"){
			createNewElement(2);
			addOption("level2", "", "");
			addOption("level2", "Summer", "summer");
			addOption("level2", "Winter", "winter");

		}
		//if the value of level 1 is candy
		else if($("level1").value == "candy"){
			createNewElement(2);
			addOption("level2", "", "");
			addOption("level2", "Chocolate", "chocolate");
			addOption("level2", "Sugary", "sugary");

		}

	}
	if(level == 2){
		if(document.getElementById("level3") != null){
			body.removeChild(document.getElementById("level3"));
		}

		if($("level2").value == "summer"){
			createNewElement(3);
			addOption("level3", "", "");
			addOption("level3", "Grapes", "grapes");
			addOption("level3", "Berries", "berries");

		}
		else if($("level2").value == "winter"){
			createNewElement(3);
			addOption("level3", "", "");
			addOption("level3", "Apples", "apples");
			addOption("level3", "Banana", "bananas");

		}
		if($("level2").value == "chocolate"){
			createNewElement(3);
			addOption("level3", "", "");
			addOption("level3", "Hershey Bar", "hershey bar");
			addOption("level3", "M&M's", "mms");

		}
		else if($("level2").value == "sugary"){
			createNewElement(3);
			addOption("level3", "", "");
			addOption("level3", "Gummy Bears", "gummybears");
			addOption("level3", "Skittles", "skittles");

		}

	}


}

function $(object){
	return document.getElementById(object);
}

function removeAllOptions(ObjectID){
	var select = document.getElementById(ObjectID);
	var length = select.options.length;
	for (i = 0; i < length; i++) {
		select.options[i].selected = false;
		select.options[i] = null;
	}

}

function addOption(ObjectID, title, value){
	var x = document.getElementById(ObjectID);
	var option = document.createElement("option");
	option.text = title;
	option.value = value;
	x.add(option);

}
//creates a new element at the specified level

function createNewElement(level){
	var select = document.createElement("select");
	select.setAttribute("id", "level" + level);
	select.setAttribute("onchange", "changeData("+level+")")

	var element = document.getElementById("parentContainer");

	element.appendChild(select);

}
