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
		$g("image").src = "";
		//if the level 2 does not equal null, remove the level2 element from the body
		if(document.getElementById("level2") != null){
			body.removeChild(document.getElementById("level2"));
		}
		if(document.getElementById("level3") != null){
			body.removeChild(document.getElementById("level3"));
		}
		//reomve objects if level1 changes
		if($g("pClass") != undefined){
			$g("pClass").remove();
		}
		if($g("pOrder") != undefined){
			$g("pOrder").remove();
		}

		if($g("newNode") != undefined){
			$g("newNode").remove();
		}

		//get the object of the selected object from the
		LevelObj = Gdata[Object.keys(Gdata)[$g("level1").selectedIndex-1]];

		createLabelElement("Class");

		//creates a new select element
		createNewElement(2, "select");
		//adds the options from the Json object to the select
		addOption("level2", "");

		//sets all the values for the selects
		for(var a = 0; a < Object.keys(LevelObj).length; a++){
			addOption("level2", Object.keys(LevelObj)[a]);
		}
		//fades in the select
		fadeOpacity("level2");

	}
	//if the change in selects happens on the second level
	if(level == 2){
		$g("image").src = "";
		//clear the thrird level
		if(document.getElementById("level3") != null){
			body.removeChild(document.getElementById("level3"));
		}
		if($g("pOrder") != undefined){
			console.log("asdads")
			$g("pOrder").remove();
		}
		if($g("newNode") != undefined){
			$g("newNode").remove();
		}

		//get the level 2 object based off of the level 1 object
		var LevelObj2 = LevelObj[Object.keys(LevelObj)[$g("level2").selectedIndex-1]];
		createLabelElement("Order");
		//create the object and options...
		createNewElement(3);
		addOption("level3", "");
		for(var a = 0; a < Object.keys(LevelObj2).length; a++){
			addOption("level3", Object.keys(LevelObj2)[a]);
		}
		fadeOpacity("level3");

	}
	if(level == 3){
		//delets the node if it is not undefined
		if($g("newNode") != undefined){
			$g("newNode").remove();
		}
		$g("image").src = "./images/"+ $g("level3").value + ".jpg";
		var node = document.createElement("p");
		var textNode = document.createTextNode("This is the order " + $g("level3").value +
	  " under the class " + $g("level2").value + " within the " + $g("level1").value + " phylum.");
		node.appendChild(textNode);
		node.setAttribute("id", "newNode");

		$g("newText").appendChild(node);

	}
}
function fadeOpacity(ID){
	var alpha = 0.0;
	setInterval(function(){
		if(alpha < 1.0){
			alpha += alpha + 0.01;
			$g(ID).style.opacity = alpha;
		}
	},100);


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
function createLabelElement(name){
	var label = document.createElement("p");
	label.setAttribute("id", "p"+name);
	var node = document.createTextNode(name);
	label.appendChild(node);
	var element = document.getElementById("selectContainer");
	element.appendChild(label);

}
function createNewElement(level){
	var select = document.createElement("select");
	select.setAttribute("id", "level" + level);
	select.setAttribute("onchange", "changeData("+level+")")
	select.style.opacity = "0.0";

	var element = document.getElementById("selectContainer");

	element.appendChild(select);

}
