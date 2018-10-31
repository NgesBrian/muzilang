

const URL_LOGIN = "http://localhost/sayo/api/web/v1/beforeauths/login";

export const userService = {
    login,
    logout,
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };
    //console.log('we are about to login');
    return fetch(URL_LOGIN, requestOptions)
         .then(handleResponse)
        .then(json => {
            // login successful if there's a jwt token in the response
            if (json.isSuccess === 201 && json.user ) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(json.user));
            }
            return json;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                window.location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}