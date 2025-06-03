
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext';

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">Cloud Kitchen</div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>☰</button>
        <ul className={\`\${open ? 'block' : 'hidden'} md:flex gap-6 text-gray-600 font-medium\`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/orders">Orders</Link></li>
          {user ? (
            <>
              <li className="text-green-600">Hi, {user.name}</li>
              <li><button onClick={() => setUser(null)}>Logout</button></li>
            </>
          ) : (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
