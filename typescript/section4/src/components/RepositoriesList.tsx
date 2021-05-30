import React, { useState } from "react";
import { useDispatch } from "react-redux";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input />
        <button>Search</button>
      </form>
    </div>
  );
};

export default RepositoriesList;
