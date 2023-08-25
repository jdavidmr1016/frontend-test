import { AiOutlineEdit } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";

export const UserMsj = ({ data }) => {
  console.log("🚀 ~ file: OtherMsj.jsx:5 ~ UserMsj ~ data:", data);
  return (
    <div className="flex flex-col w-1/2 bg-white m-2 rounded-lg p-1 antialiased">
      <div className="flex justify-between items-center">
        <div className="flex items-center justify-center gap-1">
          <img
            className="rounded-full"
            src={data.picture.thumbnail}
            alt="user"
            width="16px"
            height="16px"
          />
          <h4 className="text-[#531554] font-semibold">{data.name.first}</h4>
        </div>
        <small className="text-xs">10:55pm</small>
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
