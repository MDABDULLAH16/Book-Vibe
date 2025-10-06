import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
  Cell,
} from "recharts";
import { getStoreBook } from "../../utilities/AddToDb";

const PagesToRead = () => {
  const bookData = useLoaderData();
  //   console.log(bookData);
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    const getStoredBook = getStoreBook();
    const filterBookData = bookData.filter((book) =>
      getStoredBook.includes(book.bookId)
    );
    setData(filterBookData);
  }, []);
  const getPath = (x, y, width, height) =>
    `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
      x + width / 2
    }, ${y}
   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
   Z`;
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  return (
    <div className="w-full h-96 flex justify-center items-center dark:bg-gray-900 p-6 rounded-2xl shadow-lg">
      <BarChart width={600} height={300} data={data}>
        <XAxis dataKey="rating" />
        <YAxis />
        <Bar
          dataKey="totalPages"
          fill="#8884d8"
          shape={<TriangleBar fill="#8834d8" />}
        />
      </BarChart>
    </div>
  );
};

export default PagesToRead;
