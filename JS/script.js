// const checkbox = document.getElementById("checkbox"); // Assuming #checkbox is an input element
const hamburger = document.querySelector("#checkbox");
const navMenu = document.querySelector(".nav-menu");
const navMenuOverlay = document.querySelector(".overlay");
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));
hamburger.addEventListener("change", mobileMenu);

function mobileMenu() {
    if (hamburger.checked) {
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
    if (hamburger.checked) {
        hamburger.checked = false; // Uncheck the checkbox
        // The checkbox is not checked, meaning the menu should be inactive
        navMenu.classList.remove("active");
        navMenuOverlay.classList.remove("active");
    }
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
    setInterval(randomValues, 4000);
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
            }, 500);                                                    // Adjust the timeout value to match your CSS transition duration 
        } subContents[i].classList.toggle("active");
        activeIndex = i;

    }); closeButtons[i].addEventListener("click", () => {
        subContents[i].classList.add("closing");                        // Add a class to trigger the closing transition 
        setTimeout(() => {
            subContents[i].classList.remove("active");
            subContents[i].classList.remove("closing");                 // Remove the closing class after a delay 
        }, 500);                                                        // Adjust the timeout value to match your CSS transition duration 
        activeIndex = -1;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const copyButtons = document.querySelectorAll('.copy-text-button');

    copyButtons.forEach(button => {
        const reminderId = button.getAttribute('data-reminder');
        const liElement = document.querySelector(`[data-reminder-id="${reminderId}"]`);
        console.log(liElement);
        const reminderText = liElement.textContent.trim();

        if (reminderText) {
        } else {
            button.classList.add('hidden');
        }
    });

    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const reminderId = button.getAttribute('data-reminder');
            const liElement = document.querySelector(`[data-reminder-id="${reminderId}"]`);
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

document.addEventListener("DOMContentLoaded", function () {
    const lazyImages = document.querySelectorAll(".lazy-load");

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    const lazyImage = entry.target;
                    lazyImage.src = lazyImage.getAttribute("data-src"); // Display the full-resolution image
                    lazyImage.classList.remove("lazy-load");
                    observer.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function (lazyImage) {
            observer.observe(lazyImage);
        });
    } else {
        // Fallback for older browsers
        lazyImages.forEach(function (lazyImage) {
            lazyImage.src = lazyImage.getAttribute("data-src"); // Display the full-resolution image
            lazyImage.classList.remove("lazy-load");
        });
    }
});

// const announcement = {
//     cc101: "",
//     komfil: "",
//     sts: "",
//     itnet: "",
//     pathfit: "",
//     purcom: "\n• PERFORMANCE (NOV. 7 TUESDAY) \n• REFLECTION \n - Paper Size: short bond paper \n - Font size: 12 \n - Font style: Times New Roman/ Tahoma \n - 1.5 line spacing \n",
//     cc100: "",
//     mmw: "\n• EXAM (NOV. 10 FRIDAY) \n• POEM (PRINTED)",
//     nstp: "\n• ASSIGNMENT (OCT. 21)",
// }

// for (const day in daysAndSubjects) {
//     const element = document.getElementById(day);
//     if (element) {
//         element.style.whiteSpace = "pre-line";
//         switch (daysAndSubjects[day]) {
//             case "cc101":
//                 element.innerHTML = announcement.cc101;
//             break;
//             case "komfil":
//                 element.innerHTML = announcement.komfil;
//             break;
//             case "sts":
//                 element.innerHTML = announcement.sts;
//             break;
//             case "itnet":
//                 element.innerHTML = announcement.itnet;
//             break;
//             case "pathfit":
//                 element.innerHTML = announcement.pathfit;
//             break;
//             case "purcom":
//                 element.innerHTML = announcement.purcom;
//             break;
//             case "cc100":
//                 element.innerHTML = announcement.cc100;
//             break;
//             case "mmw":
//                 element.innerHTML = announcement.mmw;
//             break;
//             case "nstp":
//                 element.innerHTML = announcement.nstp;
//             break;
//             default:
//                 element.innerHTML = "";
//             break;
//         }
//     }
// }

let updateStatusInterval; // Define the interval variable

function updateStatus() {
    const now = new Date();
    for (const subject in announcement) {
        const subjectAnnouncements = announcement[subject];
        subjectAnnouncements.forEach((item) => {
            const timeDiffMilliseconds = new Date(item.datetime) - now;
            const timeDiffHours = timeDiffMilliseconds / (1000 * 60 * 60);
            const timeout = Math.floor(0.0001 * 60 * 60 * 1000);
            if (item.status === 'important') {
                item.status = 'important';
                if (timeDiffMilliseconds <= 0) {
                    item.status = 'in-progress';
                    console.log("Remaining " + timeDiffHours);
                    setTimeout(() => {
                        updateDisplayedContent();
                        console.log("text: " + item.text + "\n");
                        console.log("first updatedDisplay");
                        item.status = 'done';
                        //item.range = 0;
                    }, timeout);
                }
                if (item.status === 'done') {
                    if (prevStatus === 'in-progress') {
                        const remainingTimeout = prevTimeout - timeDiffMilliseconds;
                        if (remainingTimeout > 0) {
                            setTimeout(() => {
                                updateDisplayedContent();
                                console.log("2nd updatedDisplay");
                                item.status = 'done';
                            }, remainingTimeout);
                        }
                    }
                }
            } else if (item.status === 'normal') {
                item.status = 'normal';
            }
        });
    }
    console.log("last updatedDisplay");
    updateDisplayedContent();
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

function updateDisplayedContent() {
    for (const day in daysAndSubjects) {
        const element = document.getElementById(day);
        if (element) {
            element.style.whiteSpace = "pre-line";
            const subject = daysAndSubjects[day];
            let content = "";
            announcement[subject].forEach((item) => {
                if (item.text !== "") {
                    const deadlineText = item.datetime
                        ? `<i class="far fa-clock"></i> ${formatReadableDate(item.datetime)}`
                        : "";

                    content += `<p><span id="status-circle" class="${getStatusClass(item.status)}" style="background-color: ${getStatusColor(item.status)};"></span> ${item.text} <span style="color: var(--neutral-500); font-size: 10px;">${deadlineText}</span></p>`;
                }
            });
            element.innerHTML = content;
        }
    }
}

function formatReadableDate(dateTimeString) {
    const options = { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return new Date(dateTimeString).toLocaleString('en-US', options);
}

function formatReadableDate(dateTimeString) {
    const options = { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return new Date(dateTimeString).toLocaleString('en-US', options);
}

function getStatusClass(status) {
    switch (status) {
        case "important":
            return "important_pulse";
        case "in-progress":
            return "progress_pulse";
        case "done":
            return "done_pulse";
        case "normal":
            return "normal_pulse";
        default:
            return "";
    }
}

function getStatusColor(status) {
    switch (status) {
        case "important":
            return "#D50000";
        case "in-progress":
            return "#FF8F00";
        case "done":
            return "#00C853";
        case "normal":
            return "#4d4d4d";
        default:
            return "";
    }
}

clearInterval(updateStatusInterval); // Clear existing interval (if any) and start a new one
updateStatusInterval = setInterval(updateStatus, 1000);
