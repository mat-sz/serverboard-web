import React from 'react';

import Sidebar from '../../components/Sidebar';
import Details from '../../components/Details';

const DetailsPage: React.FC = () => {
  return (
    <div className="content">
      <Sidebar />
      <Details />
    </div>
  );
};

export default DetailsPage;
