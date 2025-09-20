// User Story 1
const x = {
    y: {z: 42}
}

// User Story 2
const v = {
    v: () => {
        return {v: 42}
    }
}

// User Story 3
v.property = "US3";

// User Story 4
function debugObject(obj) {
    console.log(Object.keys(obj));
    console.log(Object.values(obj));
    for (const objElement in obj) console.log(objElement + ":" + obj[objElement]);
    // "in" funktioniert bei Objekts anders?
}

// User Story 5
function equals(obj1, obj2) {
    if (obj1.length !== obj2.length) return false
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    for (const key of keys1) if (keys2.indexOf(key) === -1) return false;
    for (const key of keys2) if (keys1.indexOf(key) === -1) return false;
    return true;
}

// User Story 6
const person = {
    name: "Maya",
    age: 27,
    address: {
        city: "Berlin",
        zip: "10115"
    }
};
const {name, address: {city}} = person;

const personExtended = {
    ...person, //gibt alle Parm vom Obj
    age: 28,
    email: "maya@example.com"
}

// User Story 7
const alex = {
    ...person,
    name: "Alex",
    age: 18,
    traditional: function () {
        console.log(this.name); //Alex
    },
    arrow: () => console.log(this.name) //undefined

    // Arrow Functions übernehmen this von außen; normale Funktionen setzen this auf das Objekt, das sie aufruft.
}

function CORE2_userStories() {
    // User Story 1
    // console.log(x.y.z)

    // User Story 2
    // console.log(v.v().v);

    // User Story 3
    // console.log(v.property);

    // User Story 4
    // debugObject({a: 1, b: 2, c: 3});

    // User Story 5
    // console.log(equals({a: 1, b: 2, c: 3}, {a: 1, b: 2, c: 3}));
    // console.log(equals({a: 1, c: 3}, {a: 1, b: 2, c: 3}));
    // console.log(equals({a: 1, b: 2, c: 3}, {a: 1, d: 2, c: 3}));
    // console.log(equals({a: 1, b: 2, c: 3}, {a: 2, b: 3}));
    // console.log(equals([1, 2, 3], [1, 2, 3]));

    // User Story 6
    // console.log(person);
    // console.log(personExtended);

    // User Story 7
    // alex.traditional();
    // alex.arrow();
}

CORE2_userStories();