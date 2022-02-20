import react, { Component } from "react";
import React from "react";
import EditableRow from "./EditableRow";

class App extends Component {
  constructor() {
    super();
    this.state = {
      person: [],
    };
  }

  async componentDidMount() {
    const url =
      "https://raw.githubusercontent.com/NoeticBlue/exercise-company-employees/main/employees.json";
    const response = await fetch(url);
    const results = await response.json();
    this.setState({ person: results.records });
  }

  render() {
    const { person } = this.state;

    return (
      <div className="flex justify-center">
        <table className="w-3/4 shadow-2xl font-serif ">
          <thead className="bg-slate-100 border-b-2 text-stone-600 ">
            <tr className="text-left ">
              <th className="rounded-tl-lg p-2">NAME</th>
              <th>TITLE</th>
              <th>STATUS</th>
              <th>ROLE</th>
              <th className="rounded-tr-lg">edit</th>
            </tr>
          </thead>

          <tbody>
            {person.map((result) => {
              return (
                <React.Fragment key={result.user.name}>
                  <EditableRow result={result} />
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default App;
