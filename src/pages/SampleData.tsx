// pages/sampledata.tsx or a component file
import React, { useEffect, useState } from "react";

interface DataItem {
  _id: string;
  name: string;
  index: number;
  path_to_src: string;
  costs: string;
  description: string;
}

const SampleDataPage = () => {
  const [dataItems, setDataItems] = useState<DataItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/SampleData");
        if (!res.ok) {
          throw new Error("Data could not be fetched");
        }
        const data = await res.json();
        setDataItems(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from SampleData Database</h1>
      {dataItems.map((item) => (
        <div key={item._id}>
          <img
            src={item.path_to_src}
            alt={item.name}
            className="w-[20rem] h-[20rem]"
          />
          <h2>{item.name}</h2>
          <p>Description: {item.description}</p>
          <p>Cost: ${item.costs}</p>
        </div>
      ))}
    </div>
  );
};

export default SampleDataPage;
