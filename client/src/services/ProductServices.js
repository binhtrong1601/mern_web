import axios from "axios";

export const getAllProduct = async () => {
    const res = await axios.get(`/api/product/get-all`);
    return res.data;
  };