$("#aboutButton").onmouseover = function() {
	/*
	var aboutDropContent = document.creatElement("div");
	aboutDropContent.addClass("drop-content");
	var missionAndVision = document.creatElement("a");
	missionAndVision.href = "mission.html";
	missionAndVision.innerHTML = "Our Mission And Vision";
	aboutDropContent.appendChild(missionAndVision);
	var meetOurTeam = document.creatElement("a");
	meetOurTeam.href = "team.html";
	meetOurTeam.innerHTML = "Meet Our Team";
	aboutDropContent.appendChild(meetOurTeam);
	jQuery("#dropdown.aboutButton").appendChild(aboutDropContent);
	*/
	var meetOurTeam = document.createElement("a");
	var meetOurTeamText = document.createTextNode("Meet Our Team");
	meetOurTeam.appendChild(meetOurTeamText);
	//meetOurTeam.innerHTML = "Meet Our Team";
	meetOurTeam.href = "team.html";
	$("#aboutButton").children[1].appendChild(meetOurTeam);
}