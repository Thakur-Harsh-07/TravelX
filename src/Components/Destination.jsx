import Paris from "../assets/Paris.jpg"
import Bali from "../assets/Bali.jpg"
import NewYork from "../assets/New York.jpg"
import tokyo from "../assets/Tokyo.jpg"
import India from "../assets/india.jpg"
import England from "../assets/England.jpg"


const destinations = [
  { 
    name: "Paris", 
    image: Paris, 
    price: "$999",
    description: "The City of Light, known for its iconic Eiffel Tower, world-class museums, and charming cafés. Experience the romance of French culture and cuisine."
  },
  { 
    name: "Bali", 
    image: Bali, 
    price: "$799",
    description: "A tropical paradise with stunning beaches, lush rice terraces, and vibrant culture. Perfect for relaxation and adventure seekers alike."
  },
  { 
    name: "New York", 
    image: NewYork, 
    price: "$899",
    description: "The city that never sleeps, featuring iconic landmarks like Times Square, Central Park, and the Statue of Liberty. Experience the energy of the Big Apple."
  },
  { 
    name: "Tokyo", 
    image: tokyo, 
    price: "$1099",
    description: "A fascinating blend of traditional culture and cutting-edge technology. From ancient temples to neon-lit streets, Tokyo offers an unforgettable urban experience."
  },
  { 
    name: "India", 
    image: India, 
    price: "$699",
    description: "A land of diverse cultures, ancient traditions, and breathtaking landscapes. From the majestic Taj Mahal to the vibrant streets of Mumbai, experience the magic of Incredible India."
  },
  { 
    name: "England", 
    image: England, 
    price: "$899",
    description: "From the historic streets of London to the rolling hills of the countryside, England offers a perfect blend of rich history, royal heritage, and modern culture."
  },
];

export default function Destinations() {
  return (
    
    <section className="bg-gray-900 text-white py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Popular Destinations</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map((des, index) => (
          <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
            <div className="relative group">
              
              <img src={des.image} alt={des.name} className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{des.name}</h3>
                <p className="text-blue-400">{des.price}</p>
              <p className="text-gray-300 mt-2">{des.description}</p>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
