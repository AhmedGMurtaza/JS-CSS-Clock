const D = document,
    QS = 'querySelector',
    sTick = D[QS]('.clock__sec-tick'),
    mTick = D[QS]('.clock__min-tick'),
    hTick = D[QS]('.clock__hour-tick');

const tick = () => {
    const now = new Date(),
        seconds = now.getSeconds(),
        secondsDeg = ((seconds / 60) * 360) + 90;

    const minutes = now.getMinutes(),
        minutesDeg = ((minutes / 60) * 360) + 90;

    const hours = now.getHours(),
        hoursDeg = ((hours / 12) * 360) + 90;

    sTick.style.transform = `rotate(${secondsDeg}deg)`;
    mTick.style.transform = `rotate(${minutesDeg}deg)`;
    hTick.style.transform = `rotate(${hoursDeg}deg)`;
    setTimeout(tick, 1000);
}
tick();