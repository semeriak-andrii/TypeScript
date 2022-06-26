// Task 1

class Patch {
    body: string;
    id: number;
    title: string;
    userId: number;

    constructor(post) {
        this.body = post['body'];
        this.id = post['id'];
        this.title = post['title'];
        this.userId = post['userId'];
    }
}

async function getPosts(): Promise<Patch[]> {
    const answer = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => json)

    const parsed = answer.map((post: any) => new Patch(post));
    return parsed;
}

function renderPosts(posts: Patch[]): void {
    posts.forEach(post => {
        const body = document.querySelector('body')
        const box = document.createElement('div')
        body.append(box)
        box.append(JSON.stringify(post))
    })
}

async function getAndRenderPosts(): Promise<void> {
    const posts = await getPosts();
    renderPosts(posts);
}

getAndRenderPosts();



//                        Task #2

function updateObjectInArray<A>(initialArray: A[], key: string, value: string | number, patch: Partial<A>) {
    const arr = [...initialArray];
    const index = arr.findIndex(item => item[key] === value);
    arr[index] = Object.assign({}, arr[index], patch);
    return arr;
}

class Post {
    body: string;
    id: number;
    title: string;
    userId: number;

    constructor(post) {
        this.body = post['body'];
        this.id = post['id'];
        this.title = post['title'];
        this.userId = post['userId'];
    }
}

updateObjectInArray<Post>([], 'id', 2, { title: 'new title' })


