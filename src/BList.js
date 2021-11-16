import React from "react";
import RefsDemo from "./RefsDemo";
import { ControlPoint } from "@material-ui/icons";
import { IndeterminateCheckBox } from "@material-ui/icons";

const TaskList = (props) => {
  return props.taskList.map((val, idx) => {
    // let memType = `memType-${idx}`,
    let fName = `fName-${idx}`,
      lName = `lName-${idx}`,
      dOb = `dOb-${idx}`,
      aGe = `aGe-${idx}`;
    return (
      <tr key={val.index}>
        <td>
          <RefsDemo />
        </td>
        <td>
          <input
            type="text"
            name="fName"
            id={fName}
            data-id={idx}
            className="form-control"
          />
        </td>
        <td>
          <input
            type="text"
            name="lName"
            id={lName}
            data-id={idx}
            className="form-control"
          />
        </td>
        <td>
          <input
            type="date"
            name="dOb"
            id={dOb}
            data-id={idx}
            className="form-control"
          />
        </td>
        <td>
          <input
            type="text"
            name="aGe"
            id={aGe}
            data-id={idx}
            className="form-control"
            disabled
          />
        </td>

        <td>
          {idx === 0 ? (
            <button
              onClick={() => props.add()}
              type="button"
              className="btn btn-primary text-center"
            >
              <ControlPoint />
            </button>
          ) : (
            <button
              className="btn btn-danger"
              onClick={() => props.delete(val)}
            >
              <IndeterminateCheckBox />
            </button>
          )}
        </td>
      </tr>
    );
  });
};
export default TaskList;
