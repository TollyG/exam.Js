function checkGrade(score){
    if (score >= 70) {
        console.log("A");
    } elif if (score >= 60 ){
        console.log("B");
    } elif if (score >= 50 ){
        console.log("C");
    } else{
        console.log("F");
    }
}

function login(username, password){
    if (username == "admin" && password == "1234"){
        console.log("Login Successful");
    } else{
        console.log("Incorrect username and password");
    }
}

function convertToFahrenheit(celsius){
   let Fahrenheit = (celsius * 9/5) + 32
   console.log(Fahrenheit);
}

function canVote(age){
    if (age >= 18){
        console.log("You can vote");
    } else{
        console.log("You can't vote due to your age");
    }
}

function temperatureStatus(temp){
    if (temp > 25){
        console.log("Warm");
    } elif if (temp >= 16){
        console.log("Cool");
    } elif if(temp > 0){
        console.log("Cold");
    } else{
        console.log("Freezing");
    }
}
