"use client";

interface MenuLinkProps {
  label: string;
  onClick: () => void;
}

const MenuLink = ({ label, onClick }: MenuLinkProps) => {
  return (
    <div 
      className="px-5 py-3 cursor-pointer hover:bg-gray-100 transition"
      onClick={onClick}  
    >
      {label}
    </div>
  );
}

export default MenuLink;