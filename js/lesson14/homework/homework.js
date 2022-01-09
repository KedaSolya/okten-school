function wakeUp (alarm = true) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (alarm) {
                resolve('Hello World')
            }
            reject('Oops!')
        }, 1000 )
    });
}

function meal(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (time) {
                resolve('Enjoy your cup of coffee');
            }
            reject('Time is up')
        }, 2000)
    });
}

function work() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Just do it!')
        }, 3000)
    });
}

function duties(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money) {
                resolve('Daily duties await!')
            }
            reject ('Go back to work!')
        }, 1000)
    });
}

function exercise (energy) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(energy) {
                resolve('Work out!')
            }
            reject ('Get yourself together')
        }, 1000)
    });
}

function study() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve ('Level Up!')
        }, 2000)
    });
}

function goOut(mood = true) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if(mood) {
                resolve('See your family/bf/friends')
            }
            reject ('Nighty-night!')
        }, 500)
    })
}


wakeUp(true)
    .then(morning => {
        console.log(morning);

        return meal('just in time')
    })
    .then (snack => {
        console.log(snack);

        return work()
    })
    .then(jobDone => {
        console.log(jobDone);

        return meal(true)
    })
    .then(lunch => {
        console.log(lunch);

        return work()
    })
    .then(workDone => {
        console.log(workDone);

        return duties(true)
    })
    .then(goHome => {
        console.log(goHome);

        return exercise(true)
    })
    .then(lessons => {
        console.log(lessons);

        return study()
    })
    .then(night => {
        console.log(night);

        return goOut(false)
    })

    .catch (reason => {
            console.log(`error`, reason)
        }
    )