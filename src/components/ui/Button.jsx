import React from 'react';
const Button = ({ children, isActive, ...props }) => (
    <button
        className={`px-3 py-2 text-sm font-medium transition-colors
      ${isActive ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
        {...props}
    >
        {children}
    </button>
);

export default Button;