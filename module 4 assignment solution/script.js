var names=new Array();
names[0]="hailu";
names[1]="sami";
names[2]="bereket";
names[3]="bini";
names[4]="endelbu";
names[5]="beti";
names[6]="destaw";
names[7]="ayele";
names[8]="bura";
names[9]="kocha";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}