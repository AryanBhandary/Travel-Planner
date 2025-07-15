import Nav from "./components/Nav"
import Background from "./components/Background"
import Cities from "./pages/Cities"
import "./App.css"
import Footer from "./components/Footer"

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
            <Cities /> 

            {/*<div className="flex-parent">
                <div className="left-col">
                    <div className="box div1">1</div>
                    <div className="box div6">6</div>
                    <div className="box div7">7</div>
                    <div className="box div8">8</div>
                </div>
                <div className="right-col">
                    <div className="box div9">9</div>
                    <div className="box div10">10</div>
                    <div className="box div11">11</div>
                </div>
            </div>*/}
            <Footer />
            
        </>
    )
}

export default Home;
