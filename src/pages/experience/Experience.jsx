import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Experience.css";
import Card from "../../components/card/Card";
import experienceData from "../../config/experience";

function Experience({ activeMenu }) {
  const [experience] = useState(experienceData);

    useEffect(() => {
    activeMenu(1);
    }, [activeMenu]);

    return (
        <div className='experience'>
            <div className='pages_section'>
                <h3 className="title">Education</h3>
                {experience.map((item) => (
                <Card key={item.id} data={item} />
                ))}
            </div>
        </div>
    );
}

export default Experience;