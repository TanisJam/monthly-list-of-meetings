//DATA
let persons = {
    Oscar: {
        days: {
            0: {
                a: false,
                b: true
            },
            1: {
                a: false,
                b: true
            },
            2: {
                a: false,
                b: true
            },
            3: {
                a: false,
                b: true
            },
            4: {
                a: false,
                b: true
            },
            5: {
                a: false,
                b: true
            },
            6: {
                a: false,
                b: true
            }
        }
    },
    Jeff: {
        days: {
            0: {
                a: true,
                b: false
            },
            1: {
                a: true,
                b: false
            },
            2: {
                a: true,
                b: false
            },
            3: {
                a: true,
                b: false
            },
            4: {
                a: true,
                b: false
            },
            5: {
                a: true,
                b: false
            },
            6: {
                a: true,
                b: false
            }
        }
    },
    Jhon: {
        days: {
            0: {
                a: false,
                b: true
            },
            1: {
                a: false,
                b: false
            },
            2: {
                a: false,
                b: false
            },
            3: {
                a: false,
                b: true
            },
            4: {
                a: false,
                b: true
            },
            5: {
                a: false,
                b: false
            },
            6: {
                a: true,
                b: false
            }
        }
    },
    Raul: {
        days: {
            0: {
                a: true,
                b: true
            },
            1: {
                a: true,
                b: true
            },
            2: {
                a: true,
                b: true
            },
            3: {
                a: true,
                b: true
            },
            4: {
                a: true,
                b: true
            },
            5: {
                a: true,
                b: true
            },
            6: {
                a: true,
                b: true
            }
        }
    }

}

let week = {
    0: {
        a: "10:00hs",
        b: false
    },
    1: {
        a: "09:00hs",
        b: "18:00hs"
    },
    2: {
        a: "09:00hs",
        b: "18:00hs"
    },
    3: {
        a: "09:00hs",
        b: false
    },
    4: {
        a: "09:00hs",
        b: "18:00hs"
    },
    5: {
        a: "09:00hs",
        b: "18:00hs"
    },
    6: {
        a: "10:00hs",
        b: false
    }
}

function getWeekDay(date) {
    let days = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado", "Domingo"]
    return days[date];
}

/*
template: 
    list = [
        {
            "number": 1,
            "day": "Jueves",
            "hour": "09:30",
            "director": "Juan"
        },
        {
            "number": 1,
            "day": "Jueves",
            "hour": "18:00",
            "director": "Pedro"
        },
        {
            "number": 2,
            "day": "Viernes",
            "hour": "09:30",
            "director": "Raulo"
        }
    ]  
*/


/*for (const day in week) {

    for (const meeting in week[day]) {

        if (week[day][meeting]) {

            console.log(week[day][meeting]);
        }
    }
}*/

list = []
let dayStart = 4;

for (let x = 0; x < 15; x++) {

    for (const session in week[dayStart]) {

        if (week[dayStart][session]) {

            let arrayLen = Object.keys(persons);
            let randomKey = arrayLen[Math.floor(Math.random() * arrayLen.length)];
            let director = randomKey;
            //console.log(director);

            let meeting = {
                "number": dayStart,
                "day": getWeekDay(dayStart),
                "hour": week[dayStart][session],
                "director": director
            }

            //console.log(meeting);
            list.push(meeting);
        }

    }

    //keep loop for days in week
    if (dayStart < 6) {
        dayStart++;
    } else {
        dayStart = 0;
    }

}

console.log(list);


function generateTemplate(year, month, day) {

    let list = []

    let date = new Date(year, month, day);



    for (let x = 0; x < period; x++) {
    }


    let dayName = getWeekDay(date.getDay());
    console.log(dayName);

    return list;
}


/*
let today = new Date(2020, 2, 17);
console.log(today.getDay());
console.log(today.toDateString());
*/