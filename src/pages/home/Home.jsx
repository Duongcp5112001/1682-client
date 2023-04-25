import Posts from "../../components/posts/Posts"
import Share from "../../components/share/Share"
import "./home.scss"

const Home = (props) => {
  return (
    <div className="home">
      <Share dataMember={props.dataMember}/>
      <Posts dataMember={props.dataMember}/>
    </div>
  )
}

export default Home