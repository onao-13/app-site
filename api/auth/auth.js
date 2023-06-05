async function signIn(email, password) {
    let res = await fetch("", {
        method: "POST",
        body: JSON.stringify({
            email: {email},
            password: {password}
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
    let json = await res.json(); 

    let data = JSON.parse(json);

    console.log(data);
}

async function signUp() {

}