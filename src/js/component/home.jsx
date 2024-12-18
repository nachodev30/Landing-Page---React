import React from "react";
import Navbar from "./navbar.jsx";
import Nacho from "./nacho.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

const cards = [
	{
		image: "https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg",
		title: "Paisaje",
		description: "Lorem ipsum dolor",
	},
	{
		image: "https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg",
		title: "Paisaje",
		description: "Lorem ipsum dolor",
	},
	{
		image: "https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg",
		title: "Paisaje",
		description: "Lorem ipsum dolor",
	},
	{
		image: "https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg",
		title: "Paisaje",
		description: "Lorem ipsum dolor",
	},
]

const Home = () => {
    return (
        <div className="text-center">
            <Navbar />
            <Nacho />
            <div className="container">
                <div className="row">
                    {cards.map((item, index) => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
                            <Card cards={item} />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
