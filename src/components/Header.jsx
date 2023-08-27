import Nav from "./Nav";
import Sidebar from "./Sidebar";

export default function Header(props) {
  const header = {
    padding: "20px",
    border: "1px solid blue",
    background: "grey",
    margin: "20px 0",
    color: "white",
  };
  return (
    <div className="Header">
      <div style={header}>
        <h3>I am {props.name} from Header class, Hello There!</h3>
        <Nav textcolor="Blue">  
          {/* ======== >parent props */}
          {/* ======== >below is children props*/}
          <p
            style={{ background: "white", color: "Black" }}    
            name="P From Header." > I am 1st P tag from Header </p>
          <h1>
            <p>I am 2nd P tag from Header</p>
          </h1>
        </Nav>
        <Sidebar textcolor="Pink" color="blue">
          This is from Header class but I will show up in child comp
        </Sidebar>
      </div>
    </div>
  );
}
