function test() {
 test_message = "this is test message";
 console.log(test_message);
 test_lang = "java";
 console.log("introducing code issue");
 switch(test_lang) {
	case "java": console.log("this is java");
                     break;
	case "script":
			switch(lang_type) {
				case "js": console.log("this is js");
					   break;
				case "ts" : console.log("this is ts");
						switch(technology) {
							case "angular": console.log("this is angular");
							case "react" : console.log("this is react");
								   break;
						}
                default : console.log("this is default");
			}
			break;
            default : console.log("this is default");
			}
	console.log("out of switch");
	console.log("out of switch1");
}

function jiraCodeissue() {
	while (typeof x) {
		doSomethingForever();
	}
	var result = 0 ? a : b;
	var i = 10;
	var j = 20;
	i ++;
}
