import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'
function Sidebar() {
    const [formData, setFormData] = useState([]);
  
    useEffect(() => {
      fetch(`https://api.vatcomply.com/currencies`)
      .then((res) => res.json())
      .then(data => 
        setFormData(Object.keys(data)))
      .catch((error) => console.error('Error fetching currencies:', error));
    }, []);
  
    return (
      <div className='sidenav'>
        <h2>The Library Of Coins</h2>
        {formData.map((item, i) => (
      <NavLink key={i} to={`/rates/${item}`} className="side">
      {item}
    </NavLink>
        ))}
      </div>
    );
  }

export default Sidebar