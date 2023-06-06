import { setActiveJwtToken, setRefreshJwtToken } from "../../store/local-store";

export async function signIn(email, password) {
    let jsonObj = {
        "email": email,
        "password": password
    };

    let res = await fetch("http://localhost:8090/api/auth/signin", {
        method: "POST",
        body: JSON.stringify(jsonObj),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });

    if (res.ok) {
        let json = await res.json(); 
        saveTokens(json.token, json.refreshToken)
    }
}

export async function signUp() {
    
}

function saveTokens(accessToke, refreshToken) {
    setActiveJwtToken(accessToke);
    setRefreshJwtToken(refreshToken);
}