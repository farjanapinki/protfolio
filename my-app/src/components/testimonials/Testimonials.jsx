import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Tania Sultana",
      title: "Senior Developer",
      img:
        "assets/tania.jpeg",
      icon: "assets/twitter.png",
      desc:
        "Are you looking for a freelancer with an eye for beautiful web design? She is perfect for your work.",
    },
    {
      id: 2,
      name: "Rakesh Roy",
      title: "Cloud and Javascript Enginner at Softanis",
      img:
        "assets/rakesh_roy.jpeg",
      icon: "assets/youtube.png",
      desc:
        "Farjana is working on web page design,web development and it’s something she is really passionate about.",
      featured: true,
    },
    {
      id: 3,
      name: "Abul Hossain",
      title: "Founder of AILP",
      img:
        "assets/saman.jpeg",
      icon: "assets/linkedin.png",
      desc:
        "She is a passionate web designer lie in producing responsive, vibrant, and user-friendly websites. ",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
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
