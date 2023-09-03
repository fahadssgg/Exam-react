import React from "react";
import axios from "axios";

type DataStore = {
  id: string;
  userId: string;
  date: string;
};
export default function Cart() {
  const [items, setItems] = React.useState<DataStore[]>([
    {
      id: "",
      userId: "",
      date: "",
    },
  ]);

  React.useEffect(() => {
    axios.get(`https://fakestoreapi.com/carts`).then((res) => {
      setItems(res.data);
    });
  }, []);
  return (
    <div className="grid grid-cols-1 gap-10 p-10 max-sm:grid-cols-1">
      {items.map((item) => {
        return (
          <div className=" rounded-sm shadow-lg p-4" key={item.id}>
            <h1 className="font-bold mb-3 text-center">{item.userId}</h1>

            <p className="font-bold my-3 text-center">{item.date}</p>
          </div>
        );
      })}
    </div>
  );
}
