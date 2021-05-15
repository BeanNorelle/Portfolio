//navbar transparency transition when scrolled
var span = document.getElementsByClassName("close")[0];

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset * 2;
    if (100 > currentScrollPos) {
        document.getElementById("navbar").style.background = "transparent";
        document.getElementById("navbar").style.borderBottomColor = "transparent";
        document.getElementById("navbar").style.color = "transparent";

    } else {
        document.getElementById("navbar").style.background = "rgb(49, 54, 49)";
        document.getElementById("navbar").style.borderBottomColor = "#fad43d";
        document.getElementById("navbar").style.color = "white";  
    }
    prevScrollpos = currentScrollPos;
}



function clickfn()
{      

    if(document.getElementById("loginbox").style.display == "flex")
    {
        document.getElementById("loginbox").style.display = "none";   
    }
    else
    {
        document.getElementById("loginbox").style.display = "flex";   
    }
    
}
