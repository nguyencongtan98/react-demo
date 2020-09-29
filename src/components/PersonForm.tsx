import React, { useEffect, useState } from "react";
import { Person } from "./../reducers/PersonReducer";
import { addPerson } from "./../actions/actions";
import { connect, useDispatch, useSelector } from "react-redux";
import { RootState } from "./../stores/stores";

export const PersonForm = () => {
  const [person, setPerson] = useState({
    id: "3",
    name: "fdf",
    age: 232,
    gender: true,
  });

  const personUpdate = useSelector<RootState, Person>(
    (state) => state.personUpdateReducer
  );

  console.log(personUpdate);

  useEffect(() => {
    setPerson(personUpdate);
  }, [personUpdate]);

  const updateInputData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPerson((oldPerson: Person) => ({
      ...oldPerson,
      [name]: value,
    }));
  };

  const dispatch = useDispatch();

  const onAddPerson = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addPerson(person));
    console.log(person);
  };

  return (
    <form onSubmit={onAddPerson}>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Input Id"
        name="id"
        value={person.id}
        onChange={updateInputData}
      />
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Input name"
        name="name"
        value={person.name}
        onChange={updateInputData}
      />
      <input
        type="text"
        className="form-control"
        placeholder="Input age"
        name="age"
        value={person.age}
        onChange={updateInputData}
      />
      <input
        type="radio"
        name="gender"
        value="true"
        onChange={updateInputData}
      />
      <label className="mr-3">Male</label>
      <input
        type="radio"
        name="gender"
        value="false"
        onChange={updateInputData}
      />
      <label>FeMale</label>
      <button type="submit" className="form-control bg-success">
        ADD
      </button>
    </form>
  );
};
/* const mapStateToProps = (state: any) => {
  return {
    personReducer: state.personReducer,
  };
}; */

/* const mapDispatchToProps = (dispatch: any, props: Person) => {
  return {
    onAddPerson: (person: Person) => {
      dispatch(addPerson(person));
    },
  };
}; */

// export default connect(mapStateToProps /* mapDispatchToProps */)(PersonForm);
