function getActiveJwtToken() {
    return localStorage.getItem("active-token");
}

function setActiveJwtToken(jwtToken) {
    localStorage.setItem("active-token", jwtToken);
}

function getRefreshJwtToken() {
    return localStorage.getItem("refresh-token");
}

function setRefreshJwtToken(jwtToken) {
    localStorage.setItem("refresh-token", jwtToken);   
}