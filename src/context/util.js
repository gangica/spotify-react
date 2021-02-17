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
        if (converter[key] === note) {
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
        if (converter[key] === mode) {
            return key
        }
    }

    return null
}

export const capitaliseLetter = (string) => {
    return string.split(" ").map(w => (w.charAt(0).toUpperCase() + w.slice(1))).join(" ");
}  

export const formatFollowers = (n) => {
    let display = "";

    if (n >= 1000 && n < 10000) {
        display = (n/1000).toString().slice(0,3) + "K";
    } else if (n >= 10000 && n < 100000) {
        display = (n/1000).toString().slice(0,4) + "K";
    } else if (n >= 100000 && n < 1000000) {
        display = (n/1000).toString().slice(0,3) + "K";
    } else if (n >= 1000000) {
        display = (n/1000000).toFixed(1) + "M"
    } else {
        display = n.toString();
    }

    return display
}