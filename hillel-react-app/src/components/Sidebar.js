import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <a href="#home">Main</a>
        </li>
        <li>
          <a href="#about">Info</a>
        </li>
        <li>
          <a href="#contact">Contacts</a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
