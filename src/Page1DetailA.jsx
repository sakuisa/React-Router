import { useHistory, useLocation } from "react-router-dom";

export const Page1DetailA = () => {
  const { state } = useLocation();
  console.log(state);
  
  const hitory = useHistory();
  
  const onClickBack = () => hitory.goBack();
  
  return (
    <div>
      <h1>Page1DetailAです</h1>
      <button onClick= {onClickBack}> 戻る </button>
    </div>
  );
};
