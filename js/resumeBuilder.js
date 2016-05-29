/*
This is empty on purpose! Your code to build the resume will go here.
---this is to make the a file a new version---
 */
var works = {
	"jobs":
	[
		{
			"employer": "BLCU",
			"title": "Assistant",
			"location": "Campus",
			"dates": "2009 - 2011"
		},
		{			
			"employer": "AvePoint",
			"title": "TSP",
			"location": "Singapore",
			"dates": "2011 - 2016"
		}
	]};

var projects = {
	"projects":
	[
		{
			"title": "Support Case",
			"dates": "12-2013 - 05-2014",
			"description": "Dealing with customer issues.",
			"images":["images/fry.jpg","images/fry.jpg"]
		},
		{
			"title": "SMU Intranet Portal",
			"dates": "05-2014 - 09-2014",
			"description": "Building a SharePoint farm for SMU as the Intranet portal for staff.",
			"images":["images/fry.jpg","images/fry.jpg"]
		}
	]};

var bio = 
	{
		"name": "Tom Zhang",
		"role": "Technical Solutions Professional",
		"welcomeMessage": "Welcome to my CV",
		"contacts": {
				"mobile": "+6581555600",
				"email": "leadermd@163.com",
				"blog": "www.junfengzhang.com"
		},
		"skills": ["public speaking", "Networking", "SharePoint", "SQL Server", "PowerShell"]
	};

var education = { 
		schools:
		[ {
			"name": "BLCU",
			"location":"BJ",
			"degree": "Bachelor",
			"major": ["linguistics"],
			"dates": "09-2008 - 06-2012",
			"url": "www.blcu.edu.cn"
		},
		{
			"name": "Ole Miss",
			"location":"Oxform",
			"degree": "IEP",
			"major": ["linguistics"],
			"dates": "09-2009 - 01-2010",
			"url": "www.olemiss.edu"		
		}
		],

		onlineCourses: 
		[{
		"title":"Greek",
		"school":"BLCU Online",
		"dates": "03-2010 - 07-2010",
		"url": "www.blcu.edu.cn"
		},
		{
		"title":"French",
		"school":"BLCU Online",
		"dates": "03-2010 - 07-2010",
		"url": "www.blcu.edu.cn"
		}
		]
	};



var skills = bio.skills;
var formtedSkill1 = HTMLskills.replace("%data%", skills[0]);
var formtedSkill2 = HTMLskills.replace("%data%", skills[1]);
var formtedSkill3 = HTMLskills.replace("%data%", skills[2]);
var formtedSkill4 = HTMLskills.replace("%data%", skills[3]);
var formatedHeader = HTMLheaderName.replace("%data%", "HeaderHeader");

if (skills.length !== 0) {
	$("#header").append(formatedHeader);
	$("#header").append(HTMLskillsStart);
	$("#skills").append(formtedSkill1);
	$("#skills").append(formtedSkill2);
	$("#skills").append(formtedSkill3);
	$("#skills").append(formtedSkill4)
};


for (work in works.jobs) {
	$("#workExperience").append(HTMLworkStart);
	var formatedEmployer = HTMLworkEmployer.replace("%data%", works.jobs[work]["employer"]);
	var formatedWorkTitle = HTMLworkTitle.replace("%data%", works.jobs[work]["title"]);
	$(".work-entry:last").append(formatedEmployer + formatedWorkTitle);
};

