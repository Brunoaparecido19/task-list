import React from "react";
import PropTypes from "prop-types";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { DivTaks } from "./styles";

export default function Tasks({ task, handleDelete, handleEdit }) {
  return (
    <DivTaks>
      <ul className="task">
        {task.map((tasks, index) => (
          <li key={(tasks, index)}>
            {tasks}
            <span>
              <FiEdit onClick={(e) => handleEdit(e, index)} className="edit" />
              <AiOutlineDelete
                onClick={(e) => handleDelete(e, index)}
                className="delete"
              />
            </span>
          </li>
        ))}
      </ul>
    </DivTaks>
  );
}
Tasks.propTypes = {
  task: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
};
