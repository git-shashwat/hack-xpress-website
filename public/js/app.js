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

let dayState = 1;

const $timeCards = document.querySelector('#timestamps');
const $dayToggleBtn = document.querySelector('#day-toggle');

const $timeTemplate = document.querySelector('#timecard-template').innerHTML;

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

$dayToggleBtn.addEventListener('click', () => {
    $timeCards.innerHTML = "";
    if (dayState === 1) {
        timeTemplateDisplay(timecardsDayOne);
        $dayToggleBtn.innerHTML = 'Day 2 <i class="fas fa-arrow-right"></i>';
        dayState = 2;
    } else {
        timeTemplateDisplay(timecardsDayTwo);
        $dayToggleBtn.innerHTML = 'Day 1 <i class="fas fa-arrow-right"></i>';
        dayState = 1;
    }
});