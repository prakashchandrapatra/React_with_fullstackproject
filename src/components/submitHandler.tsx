// import React, { Component } from 'react';
// import axios from 'axios';

// interface User {
//    Id  : number;
//   Title : string;
//   Type : string;
//   Director : string;
//   Budget : string;
//   Location : string;
//   Duration : string;
//   Year_time : string;
//   Actions : string;
// }

// interface State {
// //   EMPLOYEE_ID: number;
// //   NAME: string;
// //   SALARY: string;
// Id  : number;
//   Title : string;
//   Type : string;
//   Director : string;
//   Budget : string;
//   Location : string;
//   Duration : string;
//   Year_time : string;
//   Actions : string;
// }

// class UserForm extends Component<{}, State> {
//   state: State = { Id: 0, Title: '', Type: '', Director: '', Budget: '', Location: '', Duration: '', Year_time: '', Actions: '' };

//   handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     this.setState({ [e.target.name]: e.target.value } as any);
//   }

//   handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const { Id, Title , Type, Director, Budget, Location, Duration, Year_time, Actions } = this.state;
//     axios.post('http://localhost:5000/api/data', {Id : Number(Id), Title: Title, Type: Type, Director: Director, Budget: Budget, Location: Location, Duration: Duration, Year_time: Year_time, Actions: Actions })
//       .then(() => {
//         this.setState({ Id: 0, Title: '', Type: '', Director: '', Budget: '', Location: '', Duration: '', Year_time: '', Actions: '' });
//         // this.fetchUsers();
//       })
//       .catch(err => console.error(err));
//   }

//   render() {
//     const { Id, Title , Type, Director, Budget, Location, Duration, Year_time, Actions } = this.state;
//     return (
//       <div>
//         <h2>Add User</h2>
//         <form onSubmit={this.handleSubmit}>
//           <input name="Id" value={Id} onChange={this.handleChange} placeholder="ID" required />
//           <input name="Title" value={Title} onChange={this.handleChange} placeholder="Title" required />
//           <input name="Type" value={Type} onChange={this.handleChange} placeholder="Type" required />
//           <input name="Director" value={Director} onChange={this.handleChange} placeholder="Director" required />
//           <input name="Budget" value={Budget} onChange={this.handleChange} placeholder="Budget" required />
//           <input name="Location" value={Location} onChange={this.handleChange} placeholder="Location" required />
//           <input name="Duration" value={Duration} onChange={this.handleChange} placeholder="Duration" required />
//           <input name="Year_time" value={Year_time} onChange={this.handleChange} placeholder="Year/Time" required />
//           <input name="Actions" value={Actions} onChange={this.handleChange} placeholder="Actions" required />
//           <button type="submit">Add User</button>
//         </form>

//       </div>
//     );
//   }
// }

// export default UserForm;


import React, { Component } from 'react';
import axios from 'axios';


interface State {
  Id: number;
  Title: string;
  Type: string;
  Director: string;
  Budget: string;
  Location: string;
  Duration: string;
  Year_time: string;
  Actions: string;
}

class UserForm extends Component<{}, State> {
  state: State = {
    Id: 0, Title: '', Type: '', Director: '', Budget: '',
    Location: '', Duration: '', Year_time: '', Actions: ''
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [e.target.name]: e.target.value } as any);
  };


  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { Id, Title, Type, Director, Budget, Location, Duration, Year_time, Actions } = this.state;

    // axios.post('http://localhost:3002/api/data', {
    //   Id: Number(Id),
    //   Title, Type, Director, Budget, Location, Duration, Year_time, Actions
    // })
     axios.post('/api/data', {
      Id: Number(Id),
      Title, Type, Director, Budget, Location, Duration, Year_time, Actions
    })
      .then(() => {
        alert("✅ Data added successfully!");
        this.setState({ Id: 0, Title: '', Type: '', Director: '', Budget: '', Location: '', Duration: '', Year_time: '', Actions: '' });
      })
      .catch(err => {
        console.error(err);
        alert("❌ Failed to add data");
      });
  };

  render() {
    const { Id, Title, Type, Director, Budget, Location, Duration, Year_time, Actions } = this.state;
    return (
      <div>
        <h2>Add New TV Show</h2>
        <form className='user-form'  onSubmit={this.handleSubmit}>
            <div className="row mb-3">
                <label htmlFor="Id" className="col-sm-2 col-form-label">Id</label>
                <div className="col-sm-10">
                    <input className="form-control" id="Id" name="Id" value={Id} onChange={this.handleChange} placeholder="ID" required />
                </div>
            </div>

            <div className="row mb-3">
                <label htmlFor="Title" className="col-sm-2 col-form-label">Title</label>
                <div className="col-sm-10">
                    <input className="form-control" id="Title" name="Title" value={Title} onChange={this.handleChange} placeholder="Title" required />
                </div>
            </div>

            <div className="row mb-3">
                <label htmlFor="Type" className="col-sm-2 col-form-label">Type</label>
                <div className="col-sm-10">
                    <input className="form-control" id="Type" name="Type" value={Type} onChange={this.handleChange} placeholder="Type" required />
                </div>
            </div>

            <div className="row mb-3">
                <label htmlFor="Director" className="col-sm-2 col-form-label">Director</label>
                <div className="col-sm-10">
                    <input className="form-control" id="Director" name="Director" value={Director} onChange={this.handleChange} placeholder="Director" required />
                </div>
            </div>

            <div className="row mb-3">
                <label htmlFor="Budget" className="col-sm-2 col-form-label">Budget</label>
                <div className="col-sm-10">
                    <input className="form-control" id="Budget" name="Budget" value={Budget} onChange={this.handleChange} placeholder="Budget" required />
                </div>
            </div>

            <div className="row mb-3">
                <label htmlFor="Location" className="col-sm-2 col-form-label">Location</label>
                <div className="col-sm-10">
                    <input className="form-control" name="Location" id="Location" value={Location} onChange={this.handleChange} placeholder="Location" required />
                </div>
            </div>

            <div className="row mb-3">
                <label htmlFor="Duration" className="col-sm-2 col-form-label">Duration</label>
                <div className="col-sm-10">
                    <input className="form-control" type='number' name="Duration" id="Duration" value={Duration} onChange={this.handleChange} placeholder="Duration" required />
                </div>
            </div>


            <div className="row mb-3">
                <label htmlFor="Year_time" className="col-sm-2 col-form-label">Year_time</label>
                <div className="col-sm-10">
                    <input className="form-control" type='datetime-local' name="Year_time" id="Year_time" value={Year_time} onChange={this.handleChange} placeholder="Year/Time" required />
                </div>
            </div>

            <div className="row mb-3">
                <label htmlFor="Actions" className="col-sm-2 col-form-label">Actions</label>
                <div className="col-sm-10">
                    <input className="form-control" name="Actions" id="Actions" value={Actions} onChange={this.handleChange} placeholder="Actions" required />
                </div>
            </div>
          
          <button type="submit" className="btn btn-outline-success">Add TV Show</button>
        </form>
      </div>
    );
  }
}

export default UserForm;

