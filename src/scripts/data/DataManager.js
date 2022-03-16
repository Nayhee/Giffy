//default user just to get started.
const loggedInUser = {
    id: 1,
    name: "Nathan Traczewski",
    email: "nathantraczewski@gmail.com"
}

//function to return the getLoggedInUser
export const getLoggedInUser = () => {
    return loggedInUser;
}

//fetch calls to JSON server. returns all users. 
export const getUsers = () => {
    return fetch("http://localhost:8088/users") //this is where the json data is stored?
    .then(response => response.json())
    .then(parsedResponse => {
        //do something here
        return parsedResponse;
    })
}

export const getPosts = () => {
    return fetch("http://localhost:8088/posts?_sort=id&_order=desc")
    .then(response => response.json())
    .then(parsedResponse => {
        //do something here
        return parsedResponse;
    })
}

export const getMessages = () => {
    return fetch("http://localhost:8088/messages")
    .then(response => response.json())
    .then(parsedResponse => {
        //do something here
        return parsedResponse;
    })
}

