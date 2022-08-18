import { For } from"solid-js"
import PostsItem from"../PostsItem/PostsItem"

const PostsList = ({ posts, removePost }) => {
    return (
        <div>
            <For each={posts()} fallback={<div>Loading...</div>}>
                {(post) => (
                    <PostsItem removePost={removePost} key={post.id} post={post} />
                )}
            </For>
        </div>
    )
}

export default PostsList