import Header from "../Organisms/Header";
import ThemePanel from "../Organisms/ThemePanel";
import Content from "../Organisms/Content";
import Footer from "../Organisms/Footer";

export default function MainLayout(){
    return (
        <div className="main-layout">
            <Header/>
            <ThemePanel/>
            <Content/>
            <Footer/>
        </div>
    );
};