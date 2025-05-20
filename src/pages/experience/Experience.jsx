import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Experience({ activeMenu }) {
    useEffect(() => {
    activeMenu(1);
    }, [activeMenu]);

    return (
        <div className='projects'>
        </div>
    );
}

export default Experience;