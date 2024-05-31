import React from 'react';
import { NavLink } from 'react-router-dom';


function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><NavLink to="/dashboard">Dashboard</NavLink></li>
          <li><NavLink to="/scheduler">Scheduler</NavLink></li>
          <li><NavLink to="/analytics">Analytics</NavLink></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
