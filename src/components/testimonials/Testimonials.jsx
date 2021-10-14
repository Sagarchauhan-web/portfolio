import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Freelancer Client",
      img: "https://nitrocdn.com/AORzPGZUXpHbzmGEVKTcNoXbmxeWdHNp/assets/static/optimized/rev-6c30afd/files/Melissa-M-e1482946329588.jpg",
      // icon: "assets/twitter.png",
      desc: "Very helpful when building my website, I now have my ecommerce store built from scratch ",
    },
    {
      id: 2,
      name: "Alex Kalinski",
      title: "Upwork Client",
      img: "https://nitrocdn.com/AORzPGZUXpHbzmGEVKTcNoXbmxeWdHNp/assets/static/optimized/rev-6c30afd/files/tony-1.jpg",
      // icon: "assets/youtube.png",
      desc: "We have been very happy with our new website! It looks professional and very easy to navigate.They handle things very efficiently and are available for any questions we have.",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "Upwork Client",
      img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      // icon: "assets/linkedin.png",
      desc: "Without doubt one of the most talented programmers out there.Smart, trustworthy and professional.You won't be disappointed.",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              {/* <img src="assets/right-arrow.png" className="left" alt="" /> */}
              <img className="user" src={d.img} alt="" />
              {/* <img className="right" src={d.icon} alt="" /> */}
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
