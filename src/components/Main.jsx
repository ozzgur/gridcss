import Header from "./Header";
import Footer from "./Footer";

export default function Main(props) {
  return (
    <div className="container">
      <Header />
      <div className="item item-1"> Item left {props.title} </div>
      <div className="item item-2"> Item right top </div>
      <div className="item item-3"> Item right bottom left </div>
      <div className="item item-4"> Item right bottom right</div>
      <Footer />
    </div>
  );
}
