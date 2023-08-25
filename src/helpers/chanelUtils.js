import { useFetch } from "../hooks/useFetch";

export const handleAddChanel = (data) => {
  if (!data) {
    throw new Error("you cant send and empty channel please send FormData");
  }
  /* const res = useFetch("POST",`fakeapi.com/api/channels`,data ) 
       return res;
    */
};

export const handleDeleteChanel = (e) => {
  const { value } = e.target;

  /* 
  const res = useFetch("DELETE,`fakeapi.com/api/channels`,value ) 
  return res;
  
  
  */
};
