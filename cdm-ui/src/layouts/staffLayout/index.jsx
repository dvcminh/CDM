import PropTypes from 'prop-types';
import NavBarStaff from '../components/NavBarStaff';
import NavBar from '../components/NavBar'

function staffLayout({children}) {
    return (  
       <div>
        <NavBar/>
        <div>{children}</div> 
       </div>
    );
}

staffLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default staffLayout;