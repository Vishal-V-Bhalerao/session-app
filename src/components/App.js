import Header from './Header';
import SpeakersRoot from './SpeakersRoot';
import { Layout } from "../Layout/Layout";


function App() {
    return (
        <Layout startTheme='dark' >
            <Header ></Header>
            <SpeakersRoot ></SpeakersRoot>
        </Layout>
    );
}

export default App