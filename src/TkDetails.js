import React from "react";

export default class TkDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      memType: {},
      taskDetail: [],
      error: {},
    };
  }

  render() {
    return (
      <div className="content">
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <div className="row">
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
                      {this.state.taskDetail.map((data, idx) => (
                        <tr key={data._id}>
                          <td>{data.memType}</td>
                          <td>{data.fName}</td>
                          <td>{data.lName}</td>
                          <td>{data.dOb}</td>
                          <td>{data.age}</td>
                          {/* <td><Moment format="YYYY/MM/DD">{data.createdDate}</Moment></td> */}
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
