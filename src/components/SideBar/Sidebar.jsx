import { useState } from "react";
import "./SideBar.css";
import { FaStar } from "react-icons/fa";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

function SideBar({ onFilterSubmit }) {
  const [openSections, setOpenSections] = useState({
    region: true,
    type: true,
    rating: true
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const filterData = {
      type: formData.getAll('type'),
      category: formData.getAll('category'),
      rating: formData.getAll('rating').map(Number)
    };

    onFilterSubmit(filterData);
  };

  return (
    <div className="side-bar">
      <h2>Filters</h2>
      <form onSubmit={handleSubmit}>
        <div className="filter-container">
          <div className="side-bar-section" onClick={() => toggleSection('region')}>
            <h3>Region</h3>
            <div className="side-bar-button">
              {openSections.region ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
          </div>
          <div className={`side-bar-items ${openSections.region ? 'active' : ''}`}>
            <input type="checkbox" id="asian" name="type" value="asian" />
            <label htmlFor="asian"> Asian</label><br />
            <input type="checkbox" id="mexican" name="type" value="mexican" />
            <label htmlFor="mexican"> Mexican</label><br />
            <input type="checkbox" id="indian" name="type" value="indian" />
            <label htmlFor="indian"> Indian</label>
          </div>
        </div>

        <div className="filter-container">
          <div className="side-bar-section" onClick={() => toggleSection('type')}>
            <h3>Type</h3>
            <div className="side-bar-button">
              {openSections.type ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
          </div>
          <div className={`side-bar-items ${openSections.type ? 'active' : ''}`}>
            <input type="checkbox" id="breakfast" name="category" value="breakfast" />
            <label htmlFor="breakfast"> Breakfast</label><br />
            <input type="checkbox" id="mainDish" name="category" value="mainDish" />
            <label htmlFor="mainDish"> Main dish</label><br />
            <input type="checkbox" id="appetizer" name="category" value="appetizer" />
            <label htmlFor="appetizer"> Appetizer</label><br />
            <input type="checkbox" id="dinner" name="category" value="dinner" />
            <label htmlFor="dinner"> Dinner</label>
          </div>
        </div>

        <div className="filter-container">
          <div className="side-bar-section" onClick={() => toggleSection('rating')}>
            <h3>Rating</h3>
            <div className="side-bar-button">
              {openSections.rating ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
          </div>
          <div className={`side-bar-items ${openSections.rating ? 'active' : ''}`}>
            <input type="checkbox" id="5" name="rating" value="5" />
            <label htmlFor="5"> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></label><br />
            <input type="checkbox" id="4" name="rating" value="4" />
            <label htmlFor="4"> <FaStar /><FaStar /><FaStar /><FaStar /></label><br />
            <input type="checkbox" id="3" name="rating" value="3" />
            <label htmlFor="3"> <FaStar /><FaStar /><FaStar /></label><br />
            <input type="checkbox" id="2" name="rating" value="2" />
            <label htmlFor="2"> <FaStar /><FaStar /></label><br />
            <input type="checkbox" id="1" name="rating" value="1" />
            <label htmlFor="1"> <FaStar /></label><br />
          </div>
        </div>

        <button type="submit" className="filter-btn">Filter</button>
      </form>
    </div>
  );
}

export default SideBar;
