import "./SideBar.css"
import { FaStar } from "react-icons/fa";

function SideBar() {
  return (
    <div className="side-bar">
      <h2>Filters</h2>
      <form>
        <div className="filter-container">
          <h3>Region</h3>
          <input type="checkbox" id="asian" />
          <label for="asian">Asian</label><br />
          <input type="checkbox" id="mexican" />
          <label for="mexican">Mexican</label><br />
          <input type="checkbox" id="mexican" />
          <label for="indian">Indian</label>
        </div>
        <div className="filter-container">
          <h3>Type</h3>
          <input type="checkbox" id="breakfast" />
          <label for="breakfast">Breakfast</label><br />
          <input type="checkbox" id="mainDish" />
          <label for="mainDish">Main dish</label><br />
          <input type="checkbox" id="appetizer" />
          <label for="appetizer">Appetizer</label><br />
          <input type="checkbox" id="dinner" />
          <label for="dinner">Dinner</label>
        </div>
        <div className="filter-container">
          <h3>Rating</h3>
          <input type="checkbox" id="5" />
          <label for="5"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></label><br />
          <input type="checkbox" id="4" />
          <label for="4"><FaStar /><FaStar /><FaStar /><FaStar /></label><br />
          <input type="checkbox" id="3" />
          <label for="3"><FaStar /><FaStar /><FaStar /></label><br />
          <input type="checkbox" id="2" />
          <label for="2"><FaStar /><FaStar /></label><br />
          <input type="checkbox" id="1" />
          <label for="1"><FaStar /></label><br />
        </div>
        <button type="submit" className="filter-btn">Filter</button>
      </form>
    </div>
  )
}

export default SideBar
