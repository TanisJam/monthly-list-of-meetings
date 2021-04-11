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


//--Outlines of a function to generate the list
list = []
let dayStart = 4;

for (let x = 0; x < 18; x++) {

    //keep day under 6 for pick week days
    let day;
    if (dayStart <= 6) {
        day = dayStart;
    } else {
        day = dayStart % 6 - Math.floor(dayStart / 6);
    }
    console.log(day);

    for (const session in week[day]) {

        if (week[day][session]) {

            //Get a director for meeting give the properties of them
            let arrayLen = Object.keys(persons);
            let randomKey = arrayLen[Math.floor(Math.random() * arrayLen.length)];
            let director = randomKey;


            let meeting = {
                "number": dayStart,
                "day": getWeekDay(day),
                "hour": week[day][session],
                "director": director
            }

            list.push(meeting);
        }

    }

    dayStart++;


}

console.log(list);
//--


//--Function that prints out the list
let listContainer = document.querySelector(".list");

list.forEach((element, i) => {
    let div = document.createElement("div");
    div.classList.add("row");
    if (i % 2) { div.classList.add("row-dark") };

    let number = document.createElement("p");
    number.innerText = element.number.toString();
    div.appendChild(number);

    let day = document.createElement("p");
    day.innerText = element.day;
    div.appendChild(day);

    let hour = document.createElement("p");
    hour.innerText = element.hour;
    div.appendChild(hour);

    let director = document.createElement("p");
    director.innerText = element.director;
    div.appendChild(director);

    listContainer.appendChild(div);

});

//--



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