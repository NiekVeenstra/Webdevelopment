import { ChildAsFC } from "./Child";

const Parent = () => {
  return <ChildAsFC color="red" onClick={() => console.log("clicked")}>
    randomtext
  </ChildAsFC>;
};

export default Parent;
