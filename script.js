// =====================================
// Typing Animation
// =====================================

const typingText = document.getElementById("typing-text");

if (typingText) {

    const words = [
        "Full Stack Developer",
        "MERN Stack Developer",
        "Frontend Developer",
        "Machine Learning Enthusiast",
        "Researcher"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;


    function typeEffect(){

        let currentWord = words[wordIndex];


        if(!deleting){

            typingText.textContent =
            currentWord.substring(0,charIndex++);

        }

        else{

            typingText.textContent =
            currentWord.substring(0,charIndex--);

        }



        if(!deleting && charIndex === currentWord.length){

            deleting=true;

            setTimeout(typeEffect,1500);

        }


        else if(deleting && charIndex===0){

            deleting=false;

            wordIndex++;

            if(wordIndex===words.length){
                wordIndex=0;
            }

            setTimeout(typeEffect,400);

        }


        else{

            setTimeout(
                typeEffect,
                deleting ? 70 : 120
            );

        }

    }


    typeEffect();

}



// =====================================
// Scroll Progress Bar
// =====================================


const progressBar =
document.getElementById("progress-bar");


window.addEventListener("scroll",()=>{


    let scrollTop =
    document.documentElement.scrollTop;


    let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;


    let progress =
    (scrollTop / height) * 100;


    if(progressBar){

        progressBar.style.width =
        progress+"%";

    }


});




// =====================================
// Navbar Scroll Effect
// =====================================


const navbar =
document.querySelector("nav");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 50){

        navbar.style.background =
        "rgba(5,8,22,.90)";

    }

    else{

        navbar.style.background =
        "rgba(8,12,28,.55)";

    }


});




// =====================================
// Mobile Menu Toggle
// =====================================


const menuBtn =
document.querySelector(".menu-btn");


const navLinks =
document.querySelector(".nav-links");



menuBtn.addEventListener("click",()=>{


    navLinks.classList.toggle("active");


});



// close menu after click

document.querySelectorAll(".nav-links a")
.forEach(link=>{


    link.addEventListener("click",()=>{


        navLinks.classList.remove("active");


    });


});




// =====================================
// Smooth Scrolling
// =====================================


document.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{


    anchor.addEventListener("click",function(e){


        e.preventDefault();


        document.querySelector(
            this.getAttribute("href")
        )
        .scrollIntoView({

            behavior:"smooth"

        });


    });


});




// =====================================
// Scroll Reveal Animation
// =====================================


const revealElements =
document.querySelectorAll(
".section, .timeline-item, .project-card, .skill-card, .research-card, .contact-card"
);



function reveal(){


    revealElements.forEach(element=>{


        let position =
        element.getBoundingClientRect().top;


        if(position < window.innerHeight - 100){

            element.style.opacity="1";

            element.style.transform=
            "translateY(0)";

        }


    });


}



revealElements.forEach(element=>{


    element.style.opacity="0";

    element.style.transform=
    "translateY(40px)";

    element.style.transition=
    "all .7s ease";


});


window.addEventListener(
"scroll",
reveal
);


reveal();




// =====================================
// Stats Counter Animation
// =====================================


const counters =
document.querySelectorAll(".stat-card h2");


let started=false;



function startCounter(){


    if(started) return;


    let stats =
    document.querySelector(".stats");


    let position =
    stats.getBoundingClientRect().top;



    if(position < window.innerHeight){


        started=true;


        counters.forEach(counter=>{


            let text =
            counter.innerText;


            let number =
            parseInt(text.replace("+",""));


            let count=0;


            let interval =
            setInterval(()=>{


                count++;


                counter.innerText =
                count + (text.includes("+") ? "+" : "");



                if(count>=number){

                    clearInterval(interval);

                }


            },100);



        });


    }


}



window.addEventListener(
"scroll",
startCounter
);




// =====================================
// Active Navigation Highlight
// =====================================


const sections =
document.querySelectorAll("section[id]");


const navItems =
document.querySelectorAll(".nav-links a");



window.addEventListener("scroll",()=>{


    let current="";


    sections.forEach(section=>{


        let top =
        section.offsetTop - 150;


        let height =
        section.offsetHeight;


        if(
            scrollY >= top &&
            scrollY < top+height
        ){

            current =
            section.getAttribute("id");

        }


    });



    navItems.forEach(link=>{


        link.classList.remove("active");


        if(
            link.getAttribute("href")
            === "#"+current
        ){

            link.classList.add("active");

        }


    });


});