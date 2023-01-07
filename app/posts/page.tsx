import Link from "next/link";

const getPosts = async () => {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
    return posts.json()
}

function truncate(str: string, n: number) {
    return (str.length > n) ? str.slice(0, n - 1) + '...' : str;
};


async function Posts() {
    const blogPosts = await getPosts();
    return (
        <div className='container mx-auto'>
            <div className='columns-1'>
                {
                    blogPosts.map((post: any) => {
                        return (
                            <Link href={`/posts/${post.id}`}>
                                <div className='border border-2 mt-3 p-6 bg-cyan-500 hover:bg-cyan-600'>
                                    <p className='text-2xl'>{truncate(post.title, 60)}</p>
                                    <p>{truncate(post.body, 1000)}</p>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Posts