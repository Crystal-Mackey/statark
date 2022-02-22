import Header from "./Header";
import logo from "./assets/A.gif";

const Home = () => {
    return(
        <>
        <div>
            <Header/>
        </div>
        <div>
        <img src={logo} alt="Ark A" />
        <br />
        <h1>Welcome Home</h1>
      </div>
      </>
    )
}

export default Home;