import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
type DataStore = {
  id: string;
  title: string;
  price: string;
  description: string;
  category: string;
  image: string;
};
export default function Moreitem() {
  const { id } = useParams();
  const [items, setItems] = React.useState<DataStore[]>([
    {
      id: "",
      title: "",
      price: "",
      description: "",
      category: "",
      image: "",
    },
  ]);

  React.useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`).then((res) => {
      setItems(res.data);
    });
  }, []);
  return (
    <div className="grid grid-cols-4 gap-10 p-10 max-sm:grid-cols-1">
      {items.map((item) => {
        return (
          <div className=" rounded-sm shadow-lg p-4" key={item.id}>
            <h1 className="font-bold mb-3 text-center">{item.title}</h1>
            <img className="w-72 h-60 object-fill pl-3" src={item.image} />
            <p className="font-bold my-3 text-center">{item.category}</p>
            <p className=" my-3 text-left">{item.description}</p>
            <p className="font-bold my-3 text-center text-lime-500">
              Price:{item.price}$
            </p>
            <div className="w-full flex justify-center">
              <Link to={`/item/${id}`}>
                <button className="font-bold my-3  border-2 px-4 rounded-md">
                  More Details
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
