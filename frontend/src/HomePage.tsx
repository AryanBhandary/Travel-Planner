import Nav from "./components/Nav"
import Background from "./components/Background"
import Footer from "./components/Footer"
import HomePage from "./pages/HomeCities"
import "./style/App.css"

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
            <HomePage /> 
            <Footer />
            
        </>
    )
}

export default Home;
