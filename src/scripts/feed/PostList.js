import { Post } from "./Post.js"




//input: is array of AllPosts, 
//process: throws each individual post into the Post function which returns individual HTML representation.
//output: returns the full HTML list of posts.
export const PostList = (allPosts) => {
    let postHTML = '';
        for (const postObj of allPosts) {
            postHTML += Post(postObj)
        }
        return postHTML;
}