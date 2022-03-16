//create HTML Rep of a single post
export const Post = (postObj) => {
    return `
      <section class="post">
        <header>
            <h2 class="post__title">${postObj.title}</h2>
        </header>
        <img class="post__image" src="${postObj.imageURL}" />
        <p>UserID: ${postObj.userId} <br> Timestamp: ${postObj.timestamp}</p>
        <p>${postObj.description}</p>
        <br>
      </section>
    `
}