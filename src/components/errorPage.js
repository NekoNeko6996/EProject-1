// css
import "../css/errorPage.css";

// resource
import notFoundImg from "../resource/icon/Icon-Notfound-Black.png"; 


// 
function ErrorPage() {
  const onGoHomeClick = () => {
    window.location.href = "/";
  }


  return (
    <div id="error-page">
      <img src={notFoundImg} alt="error load"/>
      <h1 style={{ textAlign: "center" }}>Hmm... Something is not true</h1>
      <h1 style={{ textAlign: "center" }}>ERROR 404 PAGE NOT FOUND</h1>
      <button onClick={onGoHomeClick}>Go Home</button>
    </div>
  );
}
export default ErrorPage;