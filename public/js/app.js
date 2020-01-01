/* Time cards Content */
const timecardsDayOne = [
    {
        time: "8:45 AM - 9:00 AM",
        event: "Reporting time"
    },
    {
        time: "9:00 AM",
        event: "Registrations"
    },
    {
        time: "9:15 AM",
        event: "Opening Presentations"
    },
    {
        time: "10:00 AM",
        event: "Hack Begins!"
    },
    {
        time: "2:00 PM to 3:00 PM",
        event: "Lunch"
    },
    {
        time: "5:00 PM",
        event: "First Evaluation"
    },
    {
        time: "6:00 PM",
        event: "End of Day 1"
    }
];

const timecardsDayTwo = [
    {
        time: "10:00 AM",
        event: "Hack Resumes!"
    },
    {
        time: "3:00 PM",
        event: "Second Evaluation"
    },
    {
        time: "4:00 PM",
        event: "Final Presentations"
    },
    {
        time: "5:00 PM",
        event: "Results Declaration"
    }
];

/* Theme Card content */
const themes = [
    {
        description: 'With the integration of technology in Education, we have the power to slow down and go back over lessons and concepts. It frees up the teacher to help students on a more one- on - one level. Apart from these managing database of any educational institute becomes jiffy and learning becomes interactive.',
        footer: "Open up your cerebrum and apply your programming skills to bring up your own ideas on modernizing our education system!"
    },
    {
        description: "There are a lot of long-standing problems faced by people not only in India but also abroad. There are multitudes of people around the globe who don't have enough to eat, lack access to clean water or are simply prevented from elevating their socioeconomic status. Alleviating social issues is neither a simple nor quick process, therefore, new technologies do offer an alternate path to resolve such issues.",
        footer: "Pick up a social issue and hence bring forth a creative idea to solve it through Your code!"
    },
    {
        description: "Virtual security is able to create and isolate a secure area in memory that is isolated from the operating system and creates a virtual secure mode in which highly sensitive pieces of information can be stored and protected from malicious code exploits.",
        footer: "Keeping in my mind all these pros we look forward to your Innovative idea on same."
    },
    {
        description: "In today’s society, we own a smartphone which is pretty much everything all in one where you can text, email, call, and even video chat with friends. Technology is extremely important in the workplace as a means of communication as businesses rely on it heavily.",
        footer: "Bring up your Inventive thoughts and implement it through your code to make communication smarter!"
    },
    {
        description: "From the digitization of health records to greater patient care, technology has proved its worth in the field of healthcare. Healthcare collects and stores huge amounts of data every single second, so these facilities require expandable, cost-effective, and safe storage solutions.",
        footer: "Use the technology you are expert in to add on one more edge."
    },
    {
        description: "Urban mobility problems include congestion, public transport crowding, parking difficulties, traffic noise, atmospheric pollution etc. Planning a smart city that delivers effective and equitable urban mobility solutions is one of the most pressing problems for cities throughout the world. A smart way to solve these issues is by using technologies in Designing effective, equitable, safe and secure public transport systems.",
        footer: "To make your city smart come up with your solution for urban mobility problems!"
    }
]

const dday = 1578457800000;     // D-day timestamp 

/* Time Difference Calculator */
const differenceGenerator = () => {
    const currentTime = + new Date();
    let timeRemaining = dday - currentTime;
    const days = Math.floor(timeRemaining/8.64e+7);
    timeRemaining %= 8.64e+7;
    const hours = Math.floor(timeRemaining/3.6e+6);
    timeRemaining %= 3.6e+6;
    const minutes = Math.floor(timeRemaining/60000);

    return (
        {
            days,
            hours,
            minutes
        }
    );
};

/* Time Cards Elements */
const $timeCards = document.querySelector('#timestamps');
const $dayToggleBtn = document.querySelector('#day-toggle');

let dayState = 2;     // Which day ?

/* Days, hours, minutes */
const $days = document.querySelector('#days'),
      $hours = document.querySelector('#hours'),
      $minutes = document.querySelector('#minutes');

/* Theme card events */
const $themeCards = document.querySelectorAll('.card-body');

/* On load timer */
window.onload = () => {
    const ans = differenceGenerator();
    $days.innerHTML = ans.days;
    $hours.innerHTML = ans.hours;
    $minutes.innerHTML = ans.minutes;
}

/* Regular countdown */
setInterval(() => {
    const ans = differenceGenerator();
    $days.innerHTML = ans.days;
    $hours.innerHTML = ans.hours;
    $minutes.innerHTML = ans.minutes;
}, 60000);

const $timeTemplate = document.querySelector('#timecard-template').innerHTML;   //template

/* Rendering Templates */
const timeTemplateDisplay = (timecards) => {
    timecards.forEach((timecard) => {
        const html = Mustache.render($timeTemplate, {
            time: timecard.time,
            event: timecard.event
        });
        $timeCards.insertAdjacentHTML('beforeend', html);
    });
};

timeTemplateDisplay(timecardsDayOne);

/* click event for toggle button */
$dayToggleBtn.addEventListener('click', () => {
    $timeCards.innerHTML = "";
    if (dayState === 1) {
        timeTemplateDisplay(timecardsDayOne);
        $dayToggleBtn.innerHTML = 'Day 2 <i class="fas fa-arrow-circle-right"></i>';
        dayState = 2;
    } else {
        timeTemplateDisplay(timecardsDayTwo);
        $dayToggleBtn.innerHTML = 'Day 1 <i class="fas fa-arrow-circle-left"></i>';
        dayState = 1;
    }
});

let themeToggle = true,
    orignals = [];

$themeCards.forEach(themeCard => {
    orignals.push(themeCard.innerHTML);
})

for (let i = 0; i < $themeCards.length; ++i) {
    $themeCards[i].addEventListener('click', () => {
        if (themeToggle){
            $themeCards[i].innerHTML = `<p>${themes[i].description}</p><h2><i class="fas fa-arrow-circle-left"></i></h2>`;
            themeToggle = false;
        } else {
            $themeCards[i].innerHTML = orignals[i];
            themeToggle = true;
        }
    });
};