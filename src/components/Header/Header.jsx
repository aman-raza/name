import React from 'react';
import "./Header.css";

// const Header = (props) => {
//     return(
//         <div className="head-container">
//             <img src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png" className="head-image" alt="headerimage"/>
//             <h1 className="head-text" > {props.headtitle} </h1>
//         </div>
//     );
// };



const Header = ({headtitle, headerExpanded}) => {
    return(
        <div className="head-container">
            <img src="https://user-images.githubusercontent.com/53443872/123057669-b3c76600-d425-11eb-9835-ab4e76cf4897.png" className={`head-image ${headerExpanded ? 'head-image-expanded' : 'head-image-contracted'}`} alt="headerimage"/>
            <h1 className={`head-text ${headerExpanded ? 'head-text-expanded' : 'head-text-contracted'}`}> {headtitle} </h1>
        </div>
    );
};

export default Header;