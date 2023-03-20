import "./test.scss"
import { Link/* , useLocation, NavLink  */} from 'react-router-dom';

export const Test = () => {

    return(
        <div>

            <h2>DAWDAWDWDAWD</h2>
            <button className="testCursor"><Link to={'/productos/Electronica'}>Electronica test</Link></button>
        </div>
    );
};

