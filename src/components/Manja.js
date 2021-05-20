import "./Manja.css"
function Manja(props) {
  const className = "manja " + props.className;
  return <div className={className}>{props.children}</div>;
}
export default Manja;
