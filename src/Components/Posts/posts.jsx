import UserPost from "../UserPost/userPost"
import "./posts.scss";
import profile1 from "../../Assets/profile1.jpg"
import profile2 from "../../Assets/profile2.jpg"

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Temp User1",
      userId: 1,
      profilePic: profile1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      name: "Temp User2",
      userId: 2,
      profilePic: profile2, 
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
    },
  ];

  return <div className="posts">
    {posts.map(post=>(
      <UserPost post={post} key={post.id} />
    ))}
  </div>;
};

export default Posts;