import Nav from "./user/components/Nav"
import Background from "./user/components/Background"
import Footer from "./user/components/Footer"
import HomePage from "./user/pages/HomeCities"
import "./user/style/App.css"

function Home() {
    return (
        <>
           <Nav />
            <Background />
            <div className="heading" id="cities">
                <h1>Discover Nepal's Most Beautiful Cities</h1>
                <p>From ancient temples to mountain vistas, explore the diverse cities that make Nepal 
                    a truly magical destination for travelers and culture enthusiasts.</p>
            </div>
            <HomePage /> <br /> <br /> 
            
            <Footer />
            
        </>
    )
}

export default Home;
