import About from "./About.jsx"
import Footer from "./Footer.jsx"
import Info from "./Info.jsx"
import Interests from "./Interests.jsx"
import authorImage from './assets/images/Author.png'

export default function App(){
    return(
        <>
        <div className="card">
            <img src={authorImage} className="author-image" alt="user-image"/>
            <div className="card-content">
                <Info />
                <About />
                <Interests />
            </div>
        </div>
        <Footer />
        </>
    )
}