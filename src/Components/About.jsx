export default function About() {
  return (
    <section className=" min-h-screen bg-gray-900 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">About TravelX</h2>
        <div className="space-y-6">
          <p className="text-lg">
            Welcome to TravelX, your trusted partner in creating unforgettable travel experiences. 
            Founded with a passion for exploration and cultural discovery, we've been helping 
            travelers explore the world since 2010.
          </p>
          <p className="text-lg">
            Our team of experienced travel experts works tirelessly to craft perfect itineraries 
            that combine popular attractions with hidden gems. We believe that travel should be 
            accessible, enjoyable, and enriching for everyone.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-gray-800 p-6 rounded">
              <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
              <p>To make travel accessible and enjoyable for everyone while promoting sustainable tourism.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded">
              <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
              <p>To be the world's most trusted travel companion, creating meaningful connections through travel.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded">
              <h3 className="text-xl font-semibold mb-3">Our Values</h3>
              <p>Integrity, excellence, sustainability, and customer satisfaction guide everything we do.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
