import "./skills.scss";
import {SkillBars} from 'react-skills';
import React from 'react';

export default function Skills() {
    const skillsData= [
       
        {
            name : 'HTML',
            level : '100',
            color : 'violet',
    
        },
        {
            name : 'CSS',
            level : '90',
            color : 'blue',
    
        },
        {
            name : 'PHP',
            level : '80',
            color : 'lightblue',
    
        },
        { 
        name : 'ReactJs',
        level : '100',
        color : 'green',
    },
    {
        name : 'NodeJs',
        level : '80',
        color : 'lightgreen',

    },
    {
        name : 'Photoshop',
        level : '80',
        color : 'orange',

    },
    {
        name : 'Illustrator',
        level : '70',
        color : 'red',

    },

    ]
    return (
        <div className ="skills" id ="skills">
            <div className="left">
                <img src="assets/skill.png" alt=""/>

            </div>
            <div className="right">
                <h2>My_Skills</h2>
               <SkillBars skills={skillsData}/>

            </div>
            
        </div>
    )
}

