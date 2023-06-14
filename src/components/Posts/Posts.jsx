import PostCard from "../PostCard/PostCard"

const Posts = ({posts}) => {
  return (
    <div className="posts">
    {posts.map(post => (
      <PostCard 
      key={post.id}
      title={post.title}
      cover={post.cover}
      id={post.id}
      body={post.body}
      />
    ))}
  </div>
  )
}

export default Posts