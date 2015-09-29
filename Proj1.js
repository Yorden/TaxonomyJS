
var Gdata = {};
window.onload = function(){
	$.getJSON('./data.json', function(data) {
		console.log(data);
		Gdata = data;
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
		if($g("level1").value == "Chordata"){
			createNewElement(2);
			addOption("level2", "");
			addOption("level2", Gdata.Chordata.Mammalia.title);
			addOption("level2", Gdata.Chordata.Reptilia.title);
			addOption("level2", Gdata.Chordata.Amphibia.title);


		}
		//if the value of level 1 is candy
		else if($g("level1").value == "Arthropoda"){
			createNewElement(2);
			addOption("level2", "");
			addOption("level2", Gdata.Arthropoda.Crustacea.title);
			addOption("level2", Gdata.Arthropoda.Arachnida.title);
			addOption("level2", Gdata.Arthropoda.Insecta.title);

		}

	}
	if(level == 2){
		if(document.getElementById("level3") != null){
			body.removeChild(document.getElementById("level3"));
		}

		if($g("level2").value == "Mammalia"){
			createNewElement(3);
			addOption("level3", "");
			addOption("level3", Gdata.Chordata.Mammalia.Cetacea.title);
			addOption("level3", Gdata.Chordata.Mammalia.Carnivora.title);
			addOption("level3", Gdata.Chordata.Mammalia.Chiroptera.title);


		}
		else if($g("level2").value == "Reptilia"){
			createNewElement(3);
			addOption("level3", "");
			addOption("level3", Gdata.Chordata.Reptilia.Crocodilia.title);
			addOption("level3", Gdata.Chordata.Reptilia.Squamata.title);
			addOption("level3", Gdata.Chordata.Reptilia.Chelonia.title);
		}
		else if($g("level2").value == "Amphibia"){
			createNewElement(3);
			addOption("level3", "");
			addOption("level3", Gdata.Chordata.Amphibia.Anura.title);
			addOption("level3", Gdata.Chordata.Amphibia.Caudata.title);
			addOption("level3", Gdata.Chordata.Amphibia.Gymnophiona.title);

		}
		else if($g("level2").value == "Crustacea"){
			createNewElement(3);
			addOption("level3", "");
			addOption("level3", Gdata.Arthropoda.Crustacea.Isopoda.title);
			addOption("level3", Gdata.Arthropoda.Crustacea.Decapoda.title);
			addOption("level3", Gdata.Arthropoda.Crustacea.Cladocera.title);

		}
		else if($g("level2").value == "Arachnida"){
			createNewElement(3);
			addOption("level3", "");
			addOption("level3", Gdata.Arthropoda.Arachnida.Uropygi.title);
			addOption("level3", Gdata.Arthropoda.Arachnida.Araneae.title);
			addOption("level3", Gdata.Arthropoda.Arachnida.Scorpiones.title);

		}
		else if($g("level2").value == "Insecta"){
			createNewElement(3);
			addOption("level3", "");
			addOption("level3", Gdata.Arthropoda.Insecta.Coleoptera.title);
			addOption("level3", Gdata.Arthropoda.Insecta.Dermaptera.title);
			addOption("level3", Gdata.Arthropoda.Insecta.Orthoptera.title);

		}

	}


}
function $g(ObjectID){
	return document.getElementById(ObjectID);
}


function removeAllOptions(ObjectID){
	var select = document.getElementById(ObjectID);
	var length = select.options.length;
	for (i = 0; i < length; i++) {
		select.options[i].selected = false;
		select.options[i] = null;
	}

}

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

	var element = document.getElementById("parentContainer");

	element.appendChild(select);

}
