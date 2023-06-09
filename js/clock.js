/**
 * clock
 * @author kyeonghye
 * @since 2023/06/09
 * clock UI
 */

const clock = document.querySelector("h2#clock");

function getClock() {
    const curDate = new Date();
    const hour = String(curDate.getHours()).padStart(2, '0');
    const min = String(curDate.getMinutes()).padStart(2, '0');
    const sec = String(curDate.getSeconds()).padStart(2, '0');
    clock.innerText = `${hour}:${min}:${sec}`;
}

getClock();
setInterval(getClock, 1000);