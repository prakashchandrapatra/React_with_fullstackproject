// import React from 'react';
// import { BrowseContainer } from '../containers/browse';
// import { useContent } from '../hooks';
// import selectionFilter from '../utils/selection-filter';
// import UserForm from '../components/submitHandler';

// // import UserForm from '../components/submitHandler';

// export default function Browse() {
//     //we need the series and films also we need slides
    

//     const { films } = useContent('films');
//     const { series } = useContent('series');
//     //the api works need to work on browse page new timestamp at 4:57:54

//     const slides = selectionFilter({ series, films });
//     //pass it to the browse container
//     return (
//         <>
//            <div> <BrowseContainer slides={slides} /></div>
//            <UserForm />
//         </>
       
//  );

// }

import React from 'react';
import { BrowseContainer } from '../containers/browse';
import { useContent } from '../hooks';
import selectionFilter from '../utils/selection-filter';
import UserForm from '../components/submitHandler';
import '../App.css'; // <-- optional for styling
import DataTableClass from '../components/dataStructure';

export default function Browse() {
  const { films } = useContent('films');
  const { series } = useContent('series');
  const slides = selectionFilter({ series, films });

  return (
    <div className="browse-page">
      {/* Main Netflix UI */}
      <BrowseContainer slides={slides} />
       
       <div className="datatable-container">
        <DataTableClass />
      </div>

      {/* User Form at bottom */}
      <div className="userform-container">
        <UserForm />
      </div>
    </div>
  );
}
