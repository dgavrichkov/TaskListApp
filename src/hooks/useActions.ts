import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import ActionCreators from "../store/action-creators/";

export const useActions = () => {
  const dispatch = useDispatch();
  // получим отсюда готовые диспетчеры с сопряженными с ними экшен-креаторами, которые можно вызывать прямо
  return bindActionCreators(ActionCreators, dispatch);
};
