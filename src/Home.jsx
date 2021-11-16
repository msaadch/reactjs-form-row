import React from "react";
import "./Home.css";
import TaskList from "./BList";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { ControlPoint } from "@material-ui/icons";
import { Component } from "react";

class Form extends React.Component {
  state = {
    taskList: [
      {
        index: Math.random(),
        memType: "",
        fName: "",
        lName: "",
        dOb: "",
        aGe: "",
      },
    ],
  };

  addNewRow = () => {
    this.setState((prevState) => ({
      taskList: [
        ...prevState.taskList,
        {
          index: Math.random(),
          memType: "",
          fName: "",
          lName: "",
          dOb: "",
          aGe: "",
        },
      ],
    }));
  };

  deteteRow = (index) => {
    this.setState({
      taskList: this.state.taskList.filter((s, sindex) => index !== sindex),
    });
  };

  clickOnDelete(record) {
    this.setState({
      taskList: this.state.taskList.filter((r) => r !== record),
    });
  }

  render() {
    let { taskList } = this.state; //let { notes, date, description, taskList } = this.state
    return (
      <div className="content">
        <form>
          <div className="container-fluid">
            <div className="col-sm-1"></div>
            <div className="">
              <div className="card">
                <div className="card-body">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Member Type</th>
                        <th className="required">First Name</th>
                        <th>Last Name</th>
                        <th className="required">D.O.B</th>
                        <th>Age</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <TaskList
                        add={this.addNewRow}
                        delete={this.clickOnDelete.bind(this)}
                        taskList={taskList}
                      />
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan="4">
                          <button
                            onClick={this.addNewRow}
                            type="button"
                            className="btn btn-primary"
                          >
                            <ControlPoint />
                          </button>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <div className="card-footer">
                  {" "}
                  <button type="submit" className="btn btn-success">
                    Submit
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-1"></div>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
