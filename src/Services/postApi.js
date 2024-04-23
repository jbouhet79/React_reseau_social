const jsonTrending = [{id:1, owner:1, content: 'Test'},{id:2, owner:1, content: 'Test2'},{id:3, owner:1, content: 'Test3'}]
const jsonNewest = [{id:12, owner:1, content: 'Test'},{id:14, owner:1, content: 'Test2'},{id:13, owner:1, content: 'Test3'}]
const jsonAllPosts = [...jsonTrending, ...jsonNewest]

const baseApi = new URL('http://localhost:3000')
// avec l'appel Api dont le port est localhost:3000 + fetch

export function getPostById(id) {
    // throw Error("Not yet implemented")
    return jsonAllPosts.find((post)=>post.id === id)
}

export function getTrendingPost() {
    return jsonTrending
    // avec le fetch
    // au lieu de récupérer le json en dur, on va utiliser un fetch
    // return await fetch(new URL('/posts/trending', baseApi))
    //     .then(response => response.json())
    //     .catch(error=> {
    //         console.error(error)
    //     })
}

export function getNewestPost() {
    return jsonNewest
}


