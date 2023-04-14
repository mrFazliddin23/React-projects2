import { Link } from "react-router-dom";
import "../NotFound/Error.css";

const Error = () => {
  return (
    <di >
      <section>
  <div class="error__wrapper">
    <h1>404</h1>
    <p class="frown-it" data-splitting>ERROR</p>
    <Link to="/">Back to home</Link>
  </div>
  
</section>
    </di>
  );
};

export default Error;
