import { Search } from "lucide-react";

import { Input } from "@/components/ui/input"


const Searchbar = ({ setSearchTemplate }) => {

  return (
    <div className="p-5 shadow-sm">

      <div className="flex gap-2 items-center p-2">

        <Search />

        <Input 
          type="text" 
          placeholder="search..." 
          className="focus:border-primary focus:ring-primary focus-visible:ring-primary" 
          onChange={(e) => setSearchTemplate(e.target.value)}
        />

      </div>

    </div>
  )
}

export default Searchbar;