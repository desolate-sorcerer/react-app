import "./Menu.css"
import { FaSearch } from 'react-icons/fa'
import FoodCard from '../FoodCard/FoodCard'
import { useEffect, useState } from "react";

function Menu({ filters }) {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchBar, setSearchBar] = useState("");

  useEffect(() => {
    const getApi = async () => {
      try {
        const res = await fetch("http://localhost:5000/api");
        if (!res.ok) {
          console.log('error getting data');
        }
        const data = await res.json();
        setItems(data);
      }
      catch (err) {
        setError(err);
      }
      finally {
        setLoading(false);
      }
    };
    getApi();
  }, []);

  useEffect(() => {
    const filterItems = async () => {
      if (filters.category.length > 0 || filters.type.length > 0 || filters.rating.length > 0) {
        setLoading(true);
        try {
          const res = await fetch("http://localhost:5000/filter", {
            params: {
              category: filters.category.join(','),
              type: filters.type.join(','),
              rating: filters.rating.join(',')
            }
          });
          const data = await res.json();
          setItems(data);
        }
        catch (err) {
          setError(err);
        }
        finally {
          setLoading(false)
        };
      }
    }
    filterItems();
  }, []);


  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchBar.trim()) return;
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:5000/api/search?q=${encodeURIComponent(searchBar)}`);
      const data = await res.json();
      setItems(data);
    }
    catch (err) {
      setError(err);
    }
    finally {
      setLoading(false);
    }
  }

  { error && <p style={{ color: 'red' }}>{error}</p> }



  return (
    (loading) ? <p>Loading...</p> :
      <div className="menu">
        <h1>Menu</h1>
        <form onSubmit={handleSearch}>
          <input type="text" placeholder="Search" value={searchBar} onChange={(e) => setSearchBar(e.target.value)} className="search-bar" required />
          <button type="submit" className="search-btn"><FaSearch /></button>
        </form>
        <div className='food-grid'>
          {items.map((food) => (
            <FoodCard food={food} key={food._id} />
          ))}
        </div>
      </div>
  )
}

export default Menu
