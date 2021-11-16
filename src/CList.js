import React from "react";

export default class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: [],
      error: {},
    };
  }

  render() {
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
                  <button type="submit" className="btn btn-primary">
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
