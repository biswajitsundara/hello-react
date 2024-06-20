export const fetchPosts = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
}


export const addPosts = async(post) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/postss", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
    });
    return await response.json();
}