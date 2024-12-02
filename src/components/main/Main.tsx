import MainContact from '../mainContant/MainContact';
import MainProjects from '../mainProjects/mainProjects';
import MainSkills from '../mainSkills/MainSkills';
import './Main.css'

const Main = () => {
    return ( 
        <main>
            <MainProjects />
            <MainSkills />
            <MainContact />
        </main>
    );
}

export default Main;
