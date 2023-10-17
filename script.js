let time = 2700;
let finished = false;
let fake = true;

const countdown = document.getElementById('countdown');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const blinker = document.getElementById('blinker');
const failure = document.getElementById('failure');
const success = document.getElementById('success');
const input = document.getElementById('input');
const title = document.getElementById('title');
const truemain = document.getElementById('truemain');
const fakemain = document.getElementById('fakemain');



if (fake === true) {
    document.addEventListener("keydown", function (event) {
        if (event.key === 'Enter') {
            fakemain.classList.add('hidden');
            truemain.classList.remove('hidden');
            fake = false;
            return run();
        }
    })
}

function run() {
    input.focus();

    setInterval(update, 1000);
    setInterval(blink, 1000);

    document.addEventListener('click', function () {
        input.focus();
    })

    document.addEventListener("keydown", function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            if (input.innerHTML.trim() === 'nineteen') {
                finished = true;
            }
            input.innerHTML = '';
        }
    });

    function update() {
        if (time > 0 && finished === false) {
            time--;

            let min = Math.floor(time / 60);
            let sec = time % 60;
            min = min < 10 ? '0' + min : min;
            sec = sec < 10 ? '0' + sec : sec;

            minutes.innerHTML = min;
            seconds.innerHTML = sec;
        } else if (time == 0) {
            title.innerHTML = 'THE TREASURE HAS BEEN TERMINATED';
            title.classList.add('failure');
            input.classList.add('hidden');
            blinker.classList.add('hidden');
            failure.classList.remove('hidden');
        } else if (finished === true) {
            title.innerHTML = 'TERMINATION SEQUENCE HAS TERMINATED';
            title.classList.add('success');
            input.classList.add('hidden');
            blinker.classList.add('hidden');
            success.classList.remove('hidden');
        }
    }

    function blink() {
        if (time > 0 && finished === false) {
            if (blinker.innerHTML) {
                blinker.innerHTML = '';
            } else {
                blinker.innerHTML = '_';
            }
        }
    }
}
