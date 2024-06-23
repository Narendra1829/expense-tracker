import { useState } from "react";

export const useFilter = (data, callback) => {
  const [query, setQuery] = useState("");
  const filtereData = data.filter((item) =>
    callback(item).toLowerCase().includes(query)
  );

  return [filtereData, setQuery];
}; 
