export default function Sidebar(props) {
  return (
    <div className="Sidebar">
      <h3>I am from Sidebar </h3>
      <h2>I like this color:{props.textcolor}</h2>
    </div>
  );
}
