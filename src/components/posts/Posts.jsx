import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  
  const posts = [
    {
      id: 1,
      name: "DuongD",
      userId: 1,
      profilePic:
        "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-1/327354403_5065035306932478_3001752581867408486_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=5uUua2EwcGcAX8TkQ3M&_nc_ht=scontent.fhan2-4.fna&oh=00_AfDInqylKDZ5lozNd1MA2n1Nzru2lKzpuqW3_Unu_Y1f8A&oe=6446EB03",
      desc: "Hỡi đêm xin đừng hờn dỗi\n Để con tim lai đầy bóng tối muộn phiền\nVà cô đơn sẽ theo về cùng bao nỗi nhớ\nLạnh đôi vai đêm đông sương mắt ai\nNgười yêu ơi dẫu cho muôn trùng cách xa\nDù yêu thương sẽ là giây phút cuối cùng \nDù mai đây trên con đường của anh chỉ là những đắng \nDù đêm có hoá ngày, dù đời đổi thay ",
      img: "https://i.ytimg.com/vi/9P_sQw9BBuE/maxresdefault.jpg",
    },
    {
      id: 2,
      name: "AnhPhuong1",
      userId: 2,
      profilePic:
        "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-1/277109173_1887746408083196_2354229315891508890_n.jpg?stp=dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=exxqwW37rn4AX_R7dd7&_nc_ht=scontent.fhan2-3.fna&oh=00_AfAeEkLcAW3LgunJ1zra86ziOKRaDDUdSFqCXBpF3ZZBTg&oe=644759F8",
      desc: "Thời tiết hôm nay 32 độ khó chịu quá!!!!",
    },
  ];

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;