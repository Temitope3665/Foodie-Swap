import { UserContext } from "../userContext";
import { IContextType } from "@/utils/types";
import { useContext } from "react";

export const SortProduct = () => {
  // Instantiate the function that updates the state during sorting
  const { handleCurrentSort, currentSort, handleUserFilter } = useContext(UserContext) as IContextType;

  return (
    <div className="w-[500px] flex items-center justify-between">
      <div className="bg-prosperity p-2 rounded-lg border-b border-forest w-fit text-[14px]">
        Sort product by:
      </div>
      <p
        className={`rounded-full border text-[#798b83] font-light text-[12px] px-3 py-1.5 cursor-pointer ${currentSort === 'newest' ? 'border-citrus' : 'border'} `}
        onClick={() => { handleCurrentSort("newest"); handleUserFilter(''); }}
      >
        Newest
      </p>
      <p
        className={`rounded-full border text-[#798b83] font-light text-[12px] px-3 py-1.5 cursor-pointer ${currentSort === 'oldest' ? 'border-citrus' : 'border'} `}
        onClick={() => { handleCurrentSort("oldest"); handleUserFilter(''); }}
      >
        Oldest
      </p>

      <p
        className={`rounded-full border text-[#798b83] font-light text-[12px] px-3 py-1.5 cursor-pointer ${currentSort === 'chicken' ? 'border-citrus' : 'border'} `}
        onClick={() => { handleCurrentSort("chicken"); handleUserFilter('chicken'); }}
      >
        Chicken
      </p>

      <p
        className={`rounded-full border text-[#798b83] font-light text-[12px] px-3 py-1.5 cursor-pointer ${currentSort === 'bbq' ? 'border-citrus' : 'border'} `}
        onClick={() => { handleCurrentSort("bbq"); handleUserFilter('bbq'); }}
      >
        BBQ
      </p>

      <p
        className={`rounded-full border text-[#798b83] font-light text-[12px] px-3 py-1.5 cursor-pointer ${currentSort === 'burger' ? 'border-citrus' : 'border'} `}
        onClick={() => { handleCurrentSort("burger"); handleUserFilter('burger') }}
      >
        Burger
      </p>
    </div>
  );
};
