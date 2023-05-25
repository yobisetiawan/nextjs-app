export async function postLogin() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    // Recommendation: handle errors
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    console.log(res)

    return res.json();
}