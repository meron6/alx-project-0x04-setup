// components/layouts/Header.tsx
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const Header: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <header className="p-4 bg-gray-800 text-white">
      <h1>Counter App</h1>
      <p>Count: {count}</p>
    </header>
  );
};

export default Header;
