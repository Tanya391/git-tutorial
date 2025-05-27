//async&await()
function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather data");
            resolve(20); // dummy temperature
        }, 2000);
    });
}

async function getWeatherData() {
    await api(); // 1st call
    await api(); // 2nd call
}t
getWeatherData();

//promise
function getPromise() {
    return new Promise((resolve, reject) => {
        console.log("I am a promise");

        // You can either resolve or reject:
        // resolve("success");
        reject("network error");
    });
}

const promise = getPromise();

promise
    .then((res) => {
        console.log("Promise fulfilled:", res);
    })
    .catch((err) => {
        console.log("Promise rejected:", err);
    });
//object
const student = {
    fullName: "John Doe",
    age: 20,
    major: "Computer Science",
    marks: 97,
    printMarks: function () {
        console.log("marks= ", this.marks);
    },
    uni: "XYZ University",
    printUni() {
        console.log(this.uni);
    }
};
const student2 = {
    fullName: "Jane Doe",
    age: 22,
    major: "Mathematics",
    marks: 95,
    // printMarks(){
    //     console.log("marks= ",this.marks);
    // },
    printMajor() {
        console.log("marks= ", this.major);
    },
    printUni() {
        console.log("PQR University");
    }
};
student2.__proto__ = student;
//callback
function sum(a, b) {
    console.log(a + b);
}
function cal(a, b, sumCallback) {
    sumCallback(a, b);
}
cal(3, 5, sum);
//callback
function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("data", dataId);
        if (getNextData) {
            getNextData();
        }
    }, 2000);
}
// Example usage: chain 1 → 2
getData(1, () => {
    getData(2);
});
