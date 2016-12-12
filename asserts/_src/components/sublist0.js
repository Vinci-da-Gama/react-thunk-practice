import React from 'react';
import SubList1 from './sublist1';

const Sublist0 = ({ sublist0, sublist1 }) => {

    return (
        <ul className="list-unstyled">
        	suan la
        	<SubList1 lastList={sublist1} />
        </ul>
    );
};

export default Sublist0;
