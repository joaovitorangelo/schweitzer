import "./full-height-container.css"
import Poste from "./poste.png"

const FullHeightContainer = () => {
    return (
      <div className="full-height-container">
        <div className="content">
          <img src={Poste}></img>
        </div>
      </div>
    );
  }
  
  export default FullHeightContainer;