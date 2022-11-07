import {Routes, Route} from 'react-router-dom';
import HomePage from '../components/homePage';

function HomeRoute(){

    return(
        <Routes>
            <Route path="/index.html" element={<HomePage/>} />
        </Routes>
    )
}
export default HomeRoute;