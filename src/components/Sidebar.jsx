import React, { useState, useEffect } from 'react';
import { FaTh, FaCommentAlt, FaUserAlt, FaBars } from 'react-icons/fa';
import { LuLogOut } from 'react-icons/lu';
import { MdOutlineDateRange } from 'react-icons/md';
import { RiArticleLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import { MdOutlineMessage } from 'react-icons/md';
import axios from 'axios';

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
 
    {
      path: '/Messagerie',
      name: 'Messagerie',
      icon: <FaCommentAlt />,
    },

  ];

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const patientId = localStorage.getItem("patientId");
        const response = await axios.get(
          `http://localhost:5100/api/patient/profile/profileGetting/${patientId}`,
          {
            withCredentials: true,
          }
        );
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="container flex">
      <div
        style={{ width: isOpen ? '250px' : '50px' }}
        className="sidebar bg-teal-800  text-white h-screen transition-all duration-500"
      >
        <div className="top_section flex items-center px-3 py-4">
 
          <h1
            style={{ display: isOpen ? 'block' : 'none' }}
            className="logo text-2xl font-bold"
          >
            EPSYCARE
          </h1>
          <div
            style={{ marginLeft: isOpen ? '80px' : '0px' }}
            className="bars flex items-center ml-10"
          >
            <FaBars onClick={toggle} className="text-orange-700 text-2xl" />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link flex items-center justify-between text-orange px-3 py-2 gap-2 hover:bg-orange-899 hover:text-black transition-all duration-500"
            activeClassName="active bg-white text-black"
          >
            <div className="icon text-lg">{item.icon}</div>
            <div style={{ display: isOpen ? 'block' : 'none' }} className="link_text">
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main className="w-full p-4">
        {user ? (
          <h1 className="text-center text-2xl font-semibold mb-4">
            Bienvenue, {user.nom} {user.prenom}
          </h1>
        ) : (
          <h1 className="text-center text-2xl font-semibold mb-4">
            Chargement...
          </h1>
        )}
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
