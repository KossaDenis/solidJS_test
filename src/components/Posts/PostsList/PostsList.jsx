import PostsItem from "../PostsItem/PostsItem"

const PostsList = ({ posts, removePost }) => {
    return (
        <div>
            {posts().map(post =>
                <PostsItem removePost={removePost} key={post.id} post={post} />
            )}
        </div>
    )
}

export default PostsList