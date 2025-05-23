import BgImage from "../assets/Background.jpg"


export default function Home() {
  return (
    <div className="relative min-h-screen">
      
      
      {/* Background Image*/}
      <div className="absolute inset-0">
        <img 
          src={BgImage} 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <section className="text-white text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Your Next Adventure</h1>
          <p className="text-lg md:text-xl mb-6 font-bold">Explore the world with unforgettable journeys</p>
          <div className="space-x-4">
            
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded">Explore Now</button>
            <button className="border border-white px-6 py-2 rounded hover:bg-white hover:text-black">Contact Us</button>
          </div>
        </section>
      </div>
        
    </div>
    
  );
}
