import react, { Component, useState } from "react";

const EditableRow = ({ result }) => {
  const [titleValue, setTitleValue] = useState(result.user.title);
  const [statusValue, setStatusValue] = useState(result.status);
  const [roleValue, setRoleValue] = useState(result.role);

  const [bg, setBg] = useState(
    statusValue === "active" ? "#9FE2BF" : "#CD5C5C"
  );

  const [newStatus, setNewStatus] = useState(null);

  const [inEditMode, setInEditMode] = useState({
    status: false,
    row: null,
  });

  const changeStatus = () => {
    statusValue === "active"
      ? setStatusValue("inactive") || setBg("#CD5C5C")
      : setStatusValue("active") || setBg("#9FE2BF");

    setNewStatus(statusValue);
  };

  const changeRole = (event) => {
    setRoleValue(event.target.value);
  };

  const onEdit = ({ name }) => {
    setInEditMode({
      status: true,
      row: name,
    });
  };

  const onSave = (event) => {
    setInEditMode({
      status: false,
      row: null,
    });
    changeRole(event);
    setNewStatus(newStatus);
  };

  return (
    <tr className="border-seperate bg-gray-50 border-b-2 ">
      <td className="flex flex-row">
        <div className="m-4 ">
          <img
            className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
            alt="avatar"
          />
        </div>
        <div>
          <div className="mt-2">
            {result.user.name} <br />
          </div>

          <div className="text-slate-400">{result.user.email}</div>
        </div>
      </td>

      <td>
        <div>
          <div>
            {titleValue} <br />
          </div>

          <div className="text-slate-400">{result.user.department}</div>
        </div>
      </td>

      <td>
        {inEditMode.status && inEditMode.row === result.user.name ? (
          <button
            style={{ backgroundColor: bg }}
            className="rounded-full w-16 h-8 "
            onClick={changeStatus}
          >
            {statusValue}
          </button>
        ) : (
          <button
            style={{ backgroundColor: bg }}
            className="rounded-full w-16 h-8 "
          >
            {statusValue}
          </button>
        )}
      </td>

      <td className="text-slate-400">
        {inEditMode.status && inEditMode.row === result.user.name ? (
          <select
            className="cursor-pointer appearance-none"
            value={roleValue}
            onChange={(event) => changeRole(event)}
          >
            <option value="admin">admin</option>
            <option value="owner">owner</option>
            <option value="member">member</option>
          </select>
        ) : (
          roleValue
        )}
      </td>

      <td>
        {inEditMode.status && inEditMode.row === result.user.name ? (
          <button onClick={() => onSave({ name: result.user.name })}>
            Save
          </button>
        ) : (
          <button onClick={() => onEdit({ name: result.user.name })}>
            Edit
          </button>
        )}
      </td>
    </tr>
  );
};

export default EditableRow;
