import NavBar from "../components/NavBar";
import PropTypes from 'prop-types';

function landingLayout({children}) {
    return (  
        <div>
            <div className="hover:h-36"><NavBar/></div>
            <div>{children}</div> 
        </div>
    );
}

landingLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default landingLayout;