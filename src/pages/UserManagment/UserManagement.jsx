
import React from 'react';
import StickyHeadTable from "../../components/viewusers/ViewUser";
import Sidebar from '../../components/sidebar/Sidebar';

function Usermanagment() {
    return (

        <div>

            <Sidebar />
            <div className='' style={{ marginLeft: "240px" }}>

                <StickyHeadTable />
            </div>

        </div>

    );
}

export default Usermanagment;