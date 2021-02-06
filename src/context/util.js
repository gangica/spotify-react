export const convertTrackDuration = (duration) => {
    let minutes = Math.floor(duration/60000);
    let seconds = Math.floor((duration - (minutes*60000))/1000);
    let duration_min;
    if (Math.floor(seconds/10) === 0) {
        duration_min = String(minutes) + ":0" + String(seconds)
    } else {
        duration_min = String(minutes) + ":" + String(seconds)
    }
    return duration_min;
}

export const noteToKey = (note) => {
    const converter = {
        "C": 0,
        "D♭": 1,
        "D": 2,
        "E♭": 3,
        "E": 4,
        "F": 5,
        "G♭": 6,
        "G": 7,
        "A♭": 8,
        "A": 9,
        "B♭": 10,
        "B": 11
    }

    for (let key in converter) {
        if (converter[key] == note) {
            return key;
        }
    }
    
    return null
}

export const modeToMode = (mode) => {
    const converter = {
        "Minor": 0,
        "Major": 1
    }

    for (let key in converter) {
        if (converter[key] == mode) {
            return key
        }
    }

    return null
}