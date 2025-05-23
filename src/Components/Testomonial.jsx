const reviews = [
  { name: "Sam", feedback: "Amazing experience!", stars: "★★★★★" },
  { name: "John", feedback: "Perfectly organized and smooth.", stars: "★★★★☆" },
  { name: "Sarah", feedback: "Best travel agency I've ever used!", stars: "★★★★★" },
  { name: "Rohan", feedback: "Professional service and great value.", stars: "★★★★★" },
  { name: "Meera", feedback: "Memorable trip with excellent guides.", stars: "★★★★☆" },
  { name: "Shyam", feedback: "Everything was perfectly arranged.", stars: "★★★★★" },
  
];

export default function Testimonial() {
  return (
    <section className="bg-gray-900 text-white py-12 px-6 overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-10">What Our Customers Say</h2>
      <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
        {reviews.map((review, index) => (
          <div key={index} className="flex-none w-80 bg-gray-800 p-6 rounded shadow">
            <p className="italic">"{review.feedback}"</p>
            <h4 className="mt-4 font-semibold">- {review.name}</h4>
            <p className="text-yellow-400">{review.stars}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
