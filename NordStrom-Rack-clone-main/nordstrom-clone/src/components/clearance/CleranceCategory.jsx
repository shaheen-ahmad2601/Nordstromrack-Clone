import React from "react";
import "./clearanceCategory.css";
import { clearanceCategory } from "./clearanceData";

export const CleranceCategory = () => {
  // const [product1, setProduct1] = useState([]);

  // useEffect(() => {
  //   axios.get("http://localhost:8080/mensCategory").then(({ data }) => {
  //     // console.log(data);
  //     setProduct1(data);
  //   });
  // }, []);
  return (
    <>
      <p className='heading-keep'>Keep Your Style On-Point</p>
      <div className='mens-category'>
        {clearanceCategory.map((el) => (
          <div>
            <img width='150px' height='250px' src={el.img} alt='' />
            <p>{el.title}</p>
          </div>
        ))}
      </div>
    </>
  );
};
