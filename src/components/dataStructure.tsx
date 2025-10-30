// import React from 'react';
// import axios from 'axios';

// // Define the type for a data row
// interface User {
// //   EMPLOYEE_ID: number;
// //   NAME: string;
// //   SALARY: string;
//   Id  : number;
//   Title : string;
//   Type : string;
//   Director : string;
//   Budget : string;
//   Location : string;
//   Duration : string;
//   Year_time : string;
//   Actions : string;
// }

// // Props interface (empty in this case)
// interface Props {}

// // State interface
// interface State {
//   data: User[];
//   loading: boolean;
//   error: string | null;
// }

// class DataTableClass extends React.Component<Props, State> {
//   constructor(props: Props) {
//     super(props);
//     this.state = {
//       data: [],
//       loading: true,
//       error: null,
//     };
//   }

//   componentDidMount() {
//     axios.get<User[]>('http://localhost:5000/get')
//       .then(response => {
//         this.setState({ data: response.data, loading: false });
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//         this.setState({ error: 'Failed to fetch data', loading: false });
//       });
//   }

//   render() {
//     const { data, loading, error } = this.state;

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>{error}</p>;

//     return (
//       <div>
//         <h2>User Data</h2>
//         <table border={1} cellPadding={8} cellSpacing={0}>
//           <thead>
//             <tr>
//               <th>Id</th>
//               <th>Title</th>
//               <th>Type</th>
//               <th>Director</th>
//               <th>Budget</th>
//               <th>Location</th>
//               <th>Duration</th>
//               <th>Year_time</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map(user => (
//               <tr key={user.Id}>
//                 <td>{user.Id}</td>
//                 <td>{user.Title}</td>
//                 <td>{user.Type}</td>
//                 <td>{user.Director}</td>
//                 <td>{user.Budget}</td>
//                 <td>{user.Location}</td>
//                 <td>{user.Duration}</td>
//                 <td>{user.Year_time}</td>
//                 <td>{user.Actions}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }

// export default DataTableClass;

import React from 'react';
import axios from 'axios';

interface User {
  Id: string;
  Title: string;
  Type: string;
  Director: string;
  Budget: string;
  Location: string;
  Duration: string;
  Year_time: string;
  Actions: string;
}

interface State {
  data: User[];
  loading: boolean;
  error: string | null;
}

class DataTableClass extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    axios.get<User[]>('http://localhost:3002/get')
    axios.get<User[]>('/get')
      .then(response => {
        this.setState({ data: response.data, loading: false });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        this.setState({ error: 'Failed to fetch data', loading: false });
      });

   

  }

  deleteHandler(id: string) {
    fetch('http://localhost:3002/delete/'+id, {
    method: 'DELETE'
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));

  }

  render() {
    const { data, loading, error } = this.state;

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
      <div>
        <h2>TV Show List</h2>
        <table border={1} cellPadding={8} cellSpacing={0} className="table table-dark table-hover">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Type</th>
              <th>Director</th>
              <th>Budget</th>
              <th>Location</th>
              <th>Duration</th>
              <th>Year_time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map(user => (
              <tr key={user.Id}>
                <td>{user.Id}</td>
                <td>{user.Title}</td>
                <td>{user.Type}</td>
                <td>{user.Director}</td>
                <td>{user.Budget}</td>
                <td>{user.Location}</td>
                <td>{user.Duration}</td>
                <td>{user.Year_time}</td>
                <td>{user.Actions}</td>
                <td>
                  <input type='button' className='btn btn-outline-success' onClick={() => this.deleteHandler(user.Id)} value="delete" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DataTableClass;
