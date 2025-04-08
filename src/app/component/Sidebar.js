import React from 'react';
import '../styles/sidebar.css'; // Assuming you have a CSS file for styling

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <label><input type="checkbox" /> CUSTOMIZBLE</label>
      {[
        'IDEAL FOR',
        'OCCASION',
        'WORK',
        'FABRIC',
        'SEGMENT',
        'SUITABLE FOR',
        'RAW MATERIALS',
      ].map((category, index) => (
        <div className="filter-group" key={index}>
          <div className="filter-title">{category}</div>
          <div className="filter-value">All</div>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
