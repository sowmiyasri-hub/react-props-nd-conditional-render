import Card from "./Components/card";
const touristPlaces = [
  {
    placeName: "Goa",
    desc: "Famous for its beaches, nightlife, and Portuguese heritage.",
    img: "https://plus.unsplash.com/premium_photo-1661963054563-ce928e477ff3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amFpcHVyfGVufDB8MHwwfHx8MA%3D%3D",
    whenToVisit: "Winter",
    ratings: 4.5,
    price: 15000
  },
  {
    placeName: "Manali",
    desc: "A high-altitude Himalayan resort town known for its cool climate ",
    img: "https://images.unsplash.com/photo-1557540827-5dda50d8b8b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbmFsaXxlbnwwfDB8MHx8fDA%3D",
    whenToVisit: "Summer",
    ratings: 4.7,
    price: 10000
  },
  {
    placeName: "Kerala",
    desc: "Known for its palm-lined beaches, backwaters, and rich traditions.",
    img: "https://plus.unsplash.com/premium_photo-1697729438401-fcb4ff66d9a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2VyYWxhfGVufDB8MHwwfHx8MA%3D%3D",
    whenToVisit: "Winter",
    ratings: 4.8,
    price: 20000
  },
  {
    placeName: "Jaipur",
    desc: "The capital of Rajasthan, known for its historic palaces culture.",
    img: "https://plus.unsplash.com/premium_photo-1661963054563-ce928e477ff3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amFpcHVyfGVufDB8MHwwfHx8MA%3D%3D",
    whenToVisit: "Winter",
    ratings: 4.6,
    price: 8000
  }
];

function App(){
  return(
    <>
   <div className="flex gap-1 justify-center mt-12">
    {
      touristPlaces.map(place=><Card img={place.img} desc={place.desc} placeName={place.placeName} whenToVisit={place.whenToVisit} price={place.price} ratings={place.ratings} />)
    }
   </div>

    </>
  )
}
export default App;

