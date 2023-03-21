import "./Spinner.css";
function Spinner() {
  return (
    <div className="containerSpinner">
      <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    </div>
  );
}
export default Spinner;
