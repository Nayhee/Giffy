import { getUsers, getPosts, getMessages } from "./data/DataManager.js";
import { PostList } from "./feed/PostList.js"
import { NavBar } from "./nav/NavBar.js";


const showNavBar = () => {
    const navElement = document.querySelector("nav");
    navElement.innerHTML = NavBar();
}

//gets the posts, then gets the full HTML list, then injects into InnerHTML of PostList class. 
const showPostList = () => {
    const postElement = document.querySelector(".postList"); //where on the DOM the list will display
    getPosts().then((allPosts) => {  //getPosts returns an array of AllPosts. 
        postElement.innerHTML = PostList(allPosts); //throw the array into PostList, returns full HTML list. 
    })
}


//starting place. 
const startGiffyGram = () => {
    showPostList();
    showNavBar();
}

startGiffyGram();