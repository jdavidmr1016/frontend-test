import { AiOutlineEdit } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";

export const IMsj = ({ timestamp }) => {
  return (
    <div className="flex flex-col w-1/2 bg-slate-100 m-2 rounded-lg p-1 antialiased self-end">
      <div className="flex justify-between items-center">
        <h4 className="text-[#531554] font-semibold">I</h4>
        <small className="text-xs">{timestamp}</small>
      </div>
      <small className="text-sm">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate est
        sequi voluptatum perferendis nobis, qui, vel modi ratione quia sit,
        optio at possimus numquam veritatis recusandae officia accusamus saepe
        voluptates.
      </small>
      <div className="flex flex-row justify-end items-center ml-1 gap-2">
        <button className="hover:text-blue-500">
          <AiOutlineEdit />
        </button>
        <button className="hover:text-red-500">
          <BsTrash />
        </button>
      </div>
    </div>
  );
};
