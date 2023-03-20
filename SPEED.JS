

function speedcheck(speed){
    if (speed<70){
        console.log("OK");
    }
    else if (speed>70 && speed<=75){
        console.log("1 demerit points");
    }
    else if (speed>=76 && speed<=80){
        console.log("2 demerit points");
    }
    else if (speed>=81 && speed<=85){
        console.log("3 demerit points");
    }
    else if (speed>=96 && speed<=100){
        console.log("4 demerit points");
    }
    else if (speed>=101 && speed<=105){
        console.log("5 demerit points");
    }
    else if (speed>=106 && speed<=110){
        console.log("6 demerit points");
    }
    else if (speed>=111 && speed<=115){
        console.log("7 demerit points");
    }
    else if (speed>=116 && speed<=120){
        console.log("8 demerit points");
    }
    else if (speed>=121 && speed<=125){
        console.log("9 demerit points");
    }
    else if (speed>=126 && speed<=130){
        console.log("10 demerit points");
    }
    else if (speed>=131 && speed<=135){
        console.log("11 demerit points");
    }
    else if (speed>=136 && speed<=140){
        console.log("12 demerit points");
    }
    else if (speed>140){
        console.log("LICENSE SUSPENDED");

    }

    




}

speedcheck(100);