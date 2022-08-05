

let trial = 0;

let realNumber = Math.floor(Math.random()  * 10);

document.getElementsByClassName('trial')[0].innerHTML = '3';

document.getElementsByTagName("button")[0].addEventListener("click", function() {


    let data = document.getElementsByTagName("input")[0].value.trim()

    if(data == '' ) {
        alert("You have not enter any number")
    } else {



        if(trial == 0) {
            if(data == realNumber) {
            alert("You are right")
                document.getElementsByTagName("input")[0].value = "";
                document.getElementsByClassName("correct")[0].style.display = "block";
                document.getElementsByTagName("button")[0].style.display = "none";

                document.getElementById("reset").style.display = "block";

                document.getElementById("reset").addEventListener("click", function() {
                    window.location.href = "index.html"

                    // alert("yes");
                })
                    

            } else {
                alert("Your are Wrong")
                document.getElementsByTagName("input")[0].value = "";

                document.getElementsByClassName('trial')[0].innerHTML = '2';
            }

            trial++;

            return;
        }

        if(trial == 1) {
            if(data == realNumber) {
              window.alert("You are right")
                document.getElementsByTagName("input")[0].value = "";
                document.getElementsByClassName("correct")[0].style.display = "block";
                document.getElementsByTagName("button")[0].style.display = "none";
                document.getElementById("reset").addEventListener("click", function() {
                    window.location.href = "index.html";
                    // alert("yes");
                })
            } else {
                alert("Your are Wrong")
                document.getElementsByTagName("input")[0].value = "";

                document.getElementsByClassName('trial')[0].innerHTML = '1';
            }

            trial++;

            return;
        }

        if(trial == 2) {
            if(data == realNumber) {
               window.alert("You are right")
                document.getElementsByTagName("input")[0].value = "";
                document.getElementsByClassName("correct")[0].style.display = "block";
                document.getElementsByTagName("button")[0].style.display = "none";
                document.getElementById("reset").addEventListener("click", function() {
                    window.location.href = "index.html"

                    // alert("yes");
                })



                return
            } else {
                alert("Your are Wrong")
                document.getElementsByTagName("input")[0].value = "";    

                document.getElementsByClassName('trial')[0].innerHTML = '0';

            
            }

            trial++;
        }
       
        


        if(trial == 3) {
            alert("You have finish you trial reload the page")

            alert("The right anwser is : " + realNumber);

            document.getElementsByTagName("button")[0].style.display = "none";

            document.getElementsByTagName("input")[0].value = "";

            document.getElementById("reset").style.display = "block";


            document.getElementById("reset").addEventListener("click", function() {
                window.location.href = "index.html"

                // alert("yes");
            })
        }

    }




})

