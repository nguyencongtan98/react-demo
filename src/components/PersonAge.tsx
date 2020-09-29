import React from "react";
import { useDispatch } from "react-redux";
import { filterName } from "../actions/actions";

export const PersonAge = () => {
  const dispatch = useDispatch();

  const onfilterAge = (age: string) => {
    dispatch(filterName(age));
  };

  return (
    <ul>
      <li onClick={() => onfilterAge("1")}>1</li>
      <li onClick={() => onfilterAge("2")}>2</li>
      <li onClick={() => onfilterAge("")}>3</li>
    </ul>
  );
};
