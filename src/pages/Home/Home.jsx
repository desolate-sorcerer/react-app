import SideBar from '../../components/SideBar/Sidebar'
import Menu from '../../components/Menu/Menu'
import "./Home.css"
import { useState } from 'react'

function Home() {

  const [filters, setFilters] = useState({
    category: [],
    type: [],
    rating: []
  });

  const handleFilterSubmit = (newFilters) => {
    setFilters(newFilters)
  }

  return (
    <>
      <div className='main'>
        <SideBar onFilterSubmit={handleFilterSubmit} />
        <Menu filters={filters} />
      </div>
    </>
  )
}

export default Home
