// =================================
// Employee Portal Theme System
// =================================


// Load saved theme

const savedTheme = localStorage.getItem("theme");


if(savedTheme === "dark"){

    document.body.classList.add("dark");

}





// Toggle Theme Function

function toggleTheme(){

    document.body.classList.toggle("dark");


    if(document.body.classList.contains("dark")){

        localStorage.setItem(
            "theme",
            "dark"
        );

    }else{

        localStorage.setItem(
            "theme",
            "light"
        );

    }

}
