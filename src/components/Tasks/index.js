/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { Droppable, DragDropContext, Draggable } from "react-beautiful-dnd";
import { DivTaks } from "./styles";

export default function Tasks({
  task,
  handleDelete,
  handleEdit,
  handleFixedIndex,
}) {
  // eslint-disable-next-line no-unused-vars
  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(task);
    const [reorderTasks] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderTasks);
    handleFixedIndex(items);
  }

  return (
    // eslint-disable-next-line react/jsx-no-bind
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <DivTaks>
            <ul
              className="task"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {task.map((tasks, index) => (
                <Draggable key={tasks} draggableId={tasks} index={index}>
                  {(provided) => (
                    <li
                      key={(tasks, index)}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      {tasks}
                      <span>
                        <FiEdit
                          onClick={(e) => handleEdit(e, index)}
                          className="edit"
                        />
                        <AiOutlineDelete
                          onClick={(e) => handleDelete(e, index)}
                          className="delete"
                        />
                      </span>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          </DivTaks>
        )}
      </Droppable>
    </DragDropContext>
  );
}
Tasks.propTypes = {
  task: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleFixedIndex: PropTypes.func.isRequired,
};
