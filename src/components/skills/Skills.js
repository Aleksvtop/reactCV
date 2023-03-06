import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../styles/Container.module.css'
import Skill from "./Skill/Skill";

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'HTML'} description={"Lorem ipsum dolor sit amet."}/>
                    <Skill title={'CSS'} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, minus."}/>
                    <Skill title={'JS'} description={"Lorem ipsum dolor sit amet, consectetur adipisicing."}/>
                    <Skill title={'React'} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis deleniti exercitationem voluptatem."}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;