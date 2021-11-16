function Home() {
  return (
    <div className="container-fluid">
      <div className="container-fluid p-3">
        <div className="col">
          <h2>Census</h2>
        </div>
      </div>

      <div className="container-fluid">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Member Type</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">D.O.B</th>
              <th scope="col">Age</th>
              <th scope="col-sm"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <select
                  className="form-control form-select form-select-sm"
                  name="memType"
                  id="memType"
                >
                  <option selected>Choose Type</option>
                  <option>Member Type</option>
                  <option>Member Type</option>
                  <option>Member Type</option>
                </select>
              </th>
              <td>
                <input
                  type="text"
                  name="fName"
                  id="fName"
                  className="form-control"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="lName"
                  id="lName"
                  className="form-control"
                />
              </td>
              <td>
                <input
                  type="date"
                  name="dOb"
                  id="dOb"
                  className="form-control"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="aGe"
                  id="aGe"
                  disabled
                  className="form-control"
                />
              </td>
              <td>
                <IndeterminateCheckBox />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="container-fluid mb-3">
          <ControlPoint />
        </div>
      </div>
      <div className="container-fluid">
        <button className="btn btn-primary">Button</button>
      </div>
    </div>
  );
}

export default Home;
