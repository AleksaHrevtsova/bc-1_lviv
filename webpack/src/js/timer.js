const refs = {
    clockface: document.querySelector('.clockface'),
    startBtn: document.querySelector(`button[data-action="start"]`),
    stopBtn: document.querySelector(`button[data-action="stop"]`)
}

refs.startBtn.addEventListener('click', timer.start.bind(timer));
refs.stopBtn.addEventListener('click', timer.stop.bind(timer));

function pad(value){
    return String(value).padStart(2, '0');
};

function updateClockface(time) {
    const date = new Date(time);
    console.log(date);

    const hours = pad(date.getUTCHours());
    const mins = pad(date.getMinutes());
    const secs = pad(date.getSeconds());

    refs.clockface.textContent = `${hours}:${mins}:${secs}`;
}
const timer = {
    isActive: false,
    start(){
        this.isActive = true;
        const startTime = Date.now();

        this.timerId = setInterval(() => {
            const currentTime = Date.now();
            this.deltaTime = currentTime - startTime;

            updateClockface(this.deltaTime);
        }, 1000);
    },
    stop(){
        clearInterval(this.timerId);
        this.isActive = false;
        this.deltaTime = 0;
        updateClockface(this.deltaTime);
    }
}
// export default newTimer = timer();