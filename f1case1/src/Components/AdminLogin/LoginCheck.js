

export function checkLogin(username, password){
     if (username === "admin" && password === "admin"){
        console.log("hi, admin")
        window.location.assign("https://moodle.zbc.dk/enrol/index.php?id=82473")
     }
     else {
        window.alert("go away")
     }
}
