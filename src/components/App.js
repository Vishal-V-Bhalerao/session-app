import Header from './Header';
import SpeakersRoot from './SpeakersRoot';
import { Layout } from "../Layout/Layout";
import { Banner } from './banner'


function App() {
    return (
        <Layout startTheme='light' >
            <Header ></Header>
            <Banner></Banner>
            <SpeakersRoot ></SpeakersRoot>
        </Layout>
    );
}

export default App