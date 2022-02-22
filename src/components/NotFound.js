import logo from "./assets/wyvern.gif";
import Header from "./Header";


export default function NotFound() {
  return (
    <>
      <Header />
      <div>
        <img src={logo} alt="You should leave" />
        <br />
        <h1>You should leave this place...</h1>
      </div>
    </>
  );
}
