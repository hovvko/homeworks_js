//TODO Sync By Async Await

function wokeUp() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("1) Woke up");
        }, 300);
    })
}

function doingExercises() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("2) Doing Exercises");
        }, 200);
    })
}

function brushTeeth() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("3) Brush Teeth");
        }, 500);
    })
}

function haveBreakfast() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("4) Have Breakfast");
        }, 400);
    })
}

function reedBook() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("5) Reed Book");
        }, 100);
    })
}

function learnProgramming() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("6) Learn Programming");
        }, 1000);
    })
}

function haveLunch() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("7) Have Lunch");
        }, 800);
    })
}

function learnEnglish() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("8) Learn English");
        }, 700);
    })
}

function running() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("9) Running");
        }, 900);
    })
}

function takeShower() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("10) Take Shower");
        }, 600);
    })
}

function goToSleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("11) Go to sleep");
        }, 550);
    })
}

async function day() {
    const wokeUpC = await wokeUp();
    console.log(wokeUpC);

    const doingExercisesC = await doingExercises();
    console.log(doingExercisesC);

    const brushTeethC = await brushTeeth();
    console.log(brushTeethC);

    const haveBreakfastC = await haveBreakfast();
    console.log(haveBreakfastC);

    const reedBookC = await reedBook();
    console.log(reedBookC);

    const learnProgrammingC = await learnProgramming();
    console.log(learnProgrammingC);

    const haveLunchC = await haveLunch();
    console.log(haveLunchC);

    const learnEnglishC = await learnEnglish();
    console.log(learnEnglishC);

    const runningC = await running();
    console.log(runningC);

    const takeShowerC = await takeShower();
    console.log(takeShowerC);

    const goToSleepC = await goToSleep();
    console.log(goToSleepC);
}

day()




























