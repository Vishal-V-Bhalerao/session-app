import Header from './Header';
import SpeakersRoot from './SpeakersRoot';
import { Layout } from "../Layout/Layout";



function App() {
    return (
        <Layout startTheme='light' >
            <Header ></Header>
            <SpeakersRoot ></SpeakersRoot>
        </Layout>
    );
}

export default App