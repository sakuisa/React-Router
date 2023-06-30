import { useParams} from "react-router-dom"

export const UrlParameterA = () => {
    const {id} = useParams();
  return (
    <div>
      <h1>UrlParameterです</h1>
      <p>パラメーターは　{id} です</p>
    </div>
  );
};
