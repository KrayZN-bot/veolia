// =================================
// Employee Portal Dashboard JS
// =================================


// Check if user is logged in

if(sessionStorage.getItem("loggedIn") !== "true"){

    window.location.href = "../index.html";

}



// Display logged-in user

const username = sessionStorage.getItem("username");

const userDisplay = document.getElementById("username");


if(userDisplay && username){

    userDisplay.textContent = username;

}




// Live Clock

function updateClock(){

    const clock = document.getElementById("clock");

    if(clock){

        const now = new Date();

        const options = {

            weekday:"long",

            year:"numeric",

            month:"long",

            day:"numeric",

            hour:"2-digit",

            minute:"2-digit",

            second:"2-digit"

        };


        clock.textContent = now.toLocaleDateString(
            "en-GB",
            options
        );

    }

}


setInterval(updateClock,1000);

updateClock();





// Logout Function

function logout(){

    sessionStorage.clear();

    window.location.href="../index.html";

}





// Notification simulation

const notifications = [

    "New vehicle inspection report uploaded",

    "Staff meeting scheduled Friday",

    "New document available"

];


function showNotification(){

    const random =
    notifications[
        Math.floor(Math.random()*notifications.length)
    ];


    console.log(
        "Notification:",
        random
    );

}



setInterval(showNotification,15000);





// Card number animation

const counters =
document.querySelectorAll(".card h1");


counters.forEach(counter=>{


    const target =
    parseInt(counter.textContent);


    let count = 0;


    const speed =
    Math.max(
        20,
        1000 / target
    );


    const update = ()=>{


        if(count < target){

            count++;

            counter.textContent=count;

            setTimeout(update,speed);

        }


    };


    update();


});
