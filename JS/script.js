const checkbox = document.getElementById("checkbox"); // Assuming #checkbox is an input element

const navMenu = document.querySelector(".nav-menu");
const navMenuOverlay = document.querySelector(".overlay");
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

checkbox.addEventListener("click", mobileMenu);

function mobileMenu() {
    if (checkbox.checked) {
        // The checkbox is checked, meaning the menu should be active
        navMenu.classList.add("active");
        navMenuOverlay.classList.add("active");
    } else {
        // The checkbox is not checked, meaning the menu should be inactive
        navMenu.classList.remove("active");
        navMenuOverlay.classList.remove("active");
    }
}

function closeMenu() {
    checkbox.checked = false; // Uncheck the checkbox to close the menu
}

const navbar = document.querySelector('.navbar');
const navbarLinks = document.querySelectorAll('.nav-item .nav-link');

navbarLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const navbarHeight = navbar.offsetHeight;
        const targetPosition = targetElement.offsetTop - navbarHeight;
        const duration = 20000;
        const delay = 100;
        setTimeout(() => {
            window.scroll({
                top: targetPosition,
                left: 0,
                behavior: 'smooth',
                duration: duration
            });
        }, delay);
    });
});

function randomValues() {
    anime({
        targets: '.shape-container .el',
        translateX: function () {
            return anime.random(-20, 20) + 'vw';
        },
        translateY: function () {
            return anime.random(-20, 20) + 'vh';
        },
        scale: function () {
            return anime.random(1, 1.5);
        },
        rotate: function () {
            return anime.random(-180, 180);
        },
        duration: function () {
            return anime.random(2000, 4000);
        },
        borderRadius: [
            {
                value: '20%'
            },
            {
                value: anime.random(12, 15) + '%', duration: 100
            },
            {
                value: '50%', duration: 1000
            }
        ],
        easing: 'easeOutElastic(.9, 1)',
    });
}

window.addEventListener('load', function () {
    randomValues();
    setInterval(randomValues, 6000);
});

const subContents = [
    document.querySelector(".m-1-content"),
    document.querySelector(".m-2-content"),
    document.querySelector(".t-1-content"),
    document.querySelector(".t-2-content"),
    document.querySelector(".t-3-content"),
    document.querySelector(".w-1-content"),
    document.querySelector(".w-2-content"),
    document.querySelector(".w-3-content"),
    document.querySelector(".th-1-content"),
    document.querySelector(".th-2-content"),
    document.querySelector(".f-1-content"),
    document.querySelector(".f-2-content"),
    document.querySelector(".sat-1-content")
];

const subContentButtons = [
    document.querySelector(".m-1"),
    document.querySelector(".m-2"),
    document.querySelector(".t-1"),
    document.querySelector(".t-2"),
    document.querySelector(".t-3"),
    document.querySelector(".w-1"),
    document.querySelector(".w-2"),
    document.querySelector(".w-3"),
    document.querySelector(".th-1"),
    document.querySelector(".th-2"),
    document.querySelector(".f-1"),
    document.querySelector(".f-2"),
    document.querySelector(".sat-1")

];

const closeButtons = [
    document.querySelector(".close-m-1"),
    document.querySelector(".close-m-2"),
    document.querySelector(".close-t-1"),
    document.querySelector(".close-t-2"),
    document.querySelector(".close-t-3"),
    document.querySelector(".close-w-1"),
    document.querySelector(".close-w-2"),
    document.querySelector(".close-w-3"),
    document.querySelector(".close-th-1"),
    document.querySelector(".close-th-2"),
    document.querySelector(".close-f-1"),
    document.querySelector(".close-f-2"),
    document.querySelector(".close-sat-1")
];

let activeIndex = -1; // Initialize as no active element 

for (let i = 0; i < subContentButtons.length; i++) {

    subContentButtons[i].addEventListener("click", () => {
        if (activeIndex !== -1) {
            subContents[activeIndex].classList.remove("active");
            subContents[activeIndex].classList.add("closing");          // Add a class to trigger the closing transition 
            setTimeout(() => {
                subContents[activeIndex].classList.remove("closing");   // Remove the closing class after a delay 
            }, 300);                                                    // Adjust the timeout value to match your CSS transition duration 
        } subContents[i].classList.toggle("active");
        activeIndex = i;

    }); closeButtons[i].addEventListener("click", () => {
        subContents[i].classList.add("closing");                        // Add a class to trigger the closing transition 
        setTimeout(() => {
            subContents[i].classList.remove("active");
            subContents[i].classList.remove("closing");                 // Remove the closing class after a delay 
        }, 300);                                                        // Adjust the timeout value to match your CSS transition duration 
        activeIndex = -1;
    });
}

const daysAndSubjects = {
    "m_1_content": "cc101",
    "m_2_content": "komfil",
    "t_1_content": "sts",
    "t_2_content": "pathfit",
    "t_3_content": "purcom",
    "w_1_content": "cc100",
    "w_2_content": "itnet",
    "w_3_content": "cc101",
    "th_1_content": "itnet",
    "th_2_content": "komfil",
    "f_1_content": "sts",
    "f_2_content": "mmw",
    "sat_1_content": "nstp"
};

for (const day in daysAndSubjects) {
    const element = document.getElementById(day);
    if (element) {
        element.style.whiteSpace = "pre-line";
        switch (daysAndSubjects[day]) {
            case "cc101":
                element.innerHTML = announcement.cc101;
                break;
            case "komfil":
                element.innerHTML = announcement.komfil;
                break;
            case "sts":
                element.innerHTML = announcement.sts;
                break;
            case "itnet":
                element.innerHTML = announcement.itnet;
                break;
            case "pathfit":
                element.innerHTML = announcement.pathfit;
                break;
            case "purcom":
                element.innerHTML = announcement.purcom;
                break;
            case "cc100":
                element.innerHTML = announcement.cc100;
                break;
            case "mmw":
                element.innerHTML = announcement.mmw;
                break;
            case "nstp":
                element.innerHTML = announcement.nstp;
                break;
            default:
                element.innerHTML = "";
                break;
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const copyButtons = document.querySelectorAll('.copy-text-button');

    copyButtons.forEach(button => {
        const reminderId = button.getAttribute('data-reminder');
        const liElement = document.querySelector(`[data-reminder-id="${reminderId}"] li`);
        const reminderText = liElement.textContent.trim();

        if (reminderText) {
        } else {
            button.classList.add('hidden');
        }
    });

    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const reminderId = button.getAttribute('data-reminder');
            const liElement = document.querySelector(`[data-reminder-id="${reminderId}"] li`);
            const reminderText = liElement.textContent.trim();

            if (reminderText) {
                const textArea = document.createElement('textarea');
                textArea.value = reminderText;

                document.body.appendChild(textArea);

                textArea.select();
                document.execCommand('copy');

                document.body.removeChild(textArea);

                button.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
                setTimeout(() => {
                    button.innerHTML = '<i class="fa-solid fa-clipboard"></i> Copy Text';
                }, 1500);
            }
        });
    });
});

// const weightInput = document.getElementById("weight");
// const heightInput = document.getElementById("height");
// const result = document.getElementById("bmi");
// const meaning = document.getElementById("meaning");

// weightInput.addEventListener("input", calculateBMI);
// heightInput.addEventListener("input", calculateBMI);

// function calculateBMI() {
//     const weight = parseFloat(weightInput.value);
//     const height = parseFloat(heightInput.value);

//     if (!isNaN(weight) && !isNaN(height) && height > 0) {
//         const bmi = weight / (height * height);
//         result.innerHTML = `Your BMI is: ${bmi.toFixed(3)}`;

//         if (bmi >= 30) {
//             meaning.innerHTML = "OBESE";
//         } else if (bmi >= 25 ) {
//             meaning.innerHTML = "OVERWEIGHT";
//         } else if (bmi >= 18.6) {
//             meaning.innerHTML = "NORMAL";
//         } else {
//             meaning.innerHTML = "UNDERWEIGHT";
//         }
//     } else {
//         result.innerHTML = "Enter Valid Weight and Height";
//     }

// }
