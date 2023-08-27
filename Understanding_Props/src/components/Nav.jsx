export default function Nav(props) {
  return (
    <div className="Nav">
      {/* ======== >To show the content in between tags we should use this  {props.children}*/}
      {props.children}
      <h3>I am from Nav </h3>
      <h2> I like this color: {props.textcolor}</h2>
      {/* ======== >below is children props*/}
      {/* === > to pass Obj we do not need {props.children}*/}
      <p>{console.log(props)}</p>
      <h1>{props.children[0].props.name}</h1>
    </div>
  );
}
