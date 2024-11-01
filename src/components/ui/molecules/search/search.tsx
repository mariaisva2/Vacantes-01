
import React from 'react';
import { Search } from "lucide-react";
import Input from "@/components/ui/atoms/input/input";
import './SearchBar.scss';

const SearchBar: React.FC = () => {
  return (
    <div className="search-bar">
      <Input type="search" placeholder="Buscar..." className="search-bar__input" />
      <Search className="search-bar__icon" size={18} />
    </div>
  );
};

export default SearchBar;
