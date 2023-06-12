export function getActiveJwtToken() {
    return localStorage.getItem("active-token");
}

export function setActiveJwtToken(jwtToken) {
    localStorage.setItem("active-token", jwtToken);
}

export function getRefreshJwtToken() {
    return localStorage.getItem("refresh-token");
}

export function setRefreshJwtToken(jwtToken) {
    localStorage.setItem("refresh-token", jwtToken);   
}