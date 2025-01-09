import React from 'react'
import { useRouter } from "next/navigation";
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const SearchBar = () => {
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;

    if (name){
      router.push(`/list?name=${name}`)
    }
  };

  return (
    <div 
      className="flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1"
      onSubmit={handleSearch}
    >
      <Input
        type="text"
        name="name"
        placeholder="Search for Products, Brands and More"
        className="flex-1 bg-transparent outline-none"
      />
      <button className="cursor-pointer">
        <Search />
      </button>
    </div>
  )
}

export default SearchBar;