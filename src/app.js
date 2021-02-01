async function getPosts() {
   const response = await fetch('https://jsonplaceholder.typicode.com/posts')
   const data = await response.text()
   return data;
}
getPosts().then(posts => console.log(posts))
console.log(123)
console.log(1234)