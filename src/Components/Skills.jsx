import React from 'react';
import '../Styles/Skills.css'
import Cards from './cards';
function Skills() {
  return (
    <div>
     <div className="Tagline" id ='skills'>SKILLS</div>
     <div className = "skills-info">
         <Cards />
     </div>
    </div>
  );
}

export default Skills;