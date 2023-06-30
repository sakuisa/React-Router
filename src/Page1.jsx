import { Link,useHistory } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  console.log(arr);
  
  const hitory = useHistory();
  
  const onclickDetailA = ()=> hitory.push("/page1/detailA");
  return (
    <div>
      <h1>Page1です</h1>
      <Link to={{ pathname: "/page1/detailA", state: arr }}>DetailA</Link>
      <br />
      <Link to="/page1/detailB">DetailB</Link>
       <br />
       <button onClick={onclickDetailA}>DetailA</button>
    </div>
  );
};
