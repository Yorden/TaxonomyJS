var Gdata = {};
var LevelObj = {};
window.onload = function(){
	$.getJSON('./data.json', function(data) {
		console.log(data);
		Gdata = data;
	});
}

//onChange event handler
function changeData(level){
	//get the element to add the new Selects to
	var body = document.getElementById("selectContainer");
	//if the select is level one
	if(level == 1){
		//if the level 2 does not equal null, remove the level2 element from the body
		if(document.getElementById("level2") != null){
			body.removeChild(document.getElementById("level2"));
		}
		if(document.getElementById("level3") != null){
			body.removeChild(document.getElementById("level3"));
		}
		//get the object of the selected object from the
		LevelObj = Gdata[Object.keys(Gdata)[$g("level1").selectedIndex-1]];

		//creates a new select element
		createNewElement(2);
		//adds the options from the Json object to the select
		addOption("level2", "");
		for(var a = 0; a < Object.keys(LevelObj).length; a++){
			addOption("level2", Object.keys(LevelObj)[a]);
		}

	}
	//if the change in selects happens on the second level
	if(level == 2){
		//clear the thrird level
		if(document.getElementById("level3") != null){
			body.removeChild(document.getElementById("level3"));
		}
		//get the level 2 object based off of the level 1 object
		var LevelObj2 = LevelObj[Object.keys(LevelObj)[$g("level2").selectedIndex-1]];
		//create the object and options...
		createNewElement(3);
		addOption("level3", "");
		for(var a = 0; a < Object.keys(LevelObj2).length; a++){
			addOption("level3", Object.keys(LevelObj2)[a]);
		}


	}
}
//returns the specified object
function $g(ObjectID){
	return document.getElementById(ObjectID);
}
//adds an option to the chosen select
function addOption(ObjectID, title){
	var x = document.getElementById(ObjectID);
	var option = document.createElement("option");
	option.text = title;
	option.value = title;
	x.add(option);

}
//creates a new element at the specified level

function createNewElement(level){
	var select = document.createElement("select");
	select.setAttribute("id", "level" + level);
	select.setAttribute("onchange", "changeData("+level+")")

	var element = document.getElementById("selectContainer");

	element.appendChild(select);

}
