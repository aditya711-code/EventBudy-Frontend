import React, { useState } from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom'
// import './MainPage.css'; 
import UserProfile from './UserProfile';
import { Card, Container,Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import Ranbir from "./Ranbir";
import Zomaland from "./Zomaland";
import Concert from "./Concert";
import Test from "./Test";
import Marathon from "./Marathon";
import Comic from "./Comic";
const MainPage = () => {
  // const [selectedEvent, setSelectedEvent] = useState(null);
  // const [registrationPopup, setRegistrationPopup] = useState(false);

  // const events = [
  //   { id: 1, name: 'Football Match', details: 'Exciting football match details go here.' },
  //   { id: 2, name: 'Malik Show', details: 'Entertaining Malik Show details go here.' },
  //   { id: 3, name: 'Dhee Show', details: 'Dance competition Dhee Show details go here.' },
  //   { id: 4, name: 'BTS Concert', details: 'Epic BTS Concert details go here.' },
  // ];

  // const handleEventClick = (event) => {
  //   setSelectedEvent(event);
  // };

  // const handleRegistration = () => {
  //   setRegistrationPopup(true);
  // };

  // const closePopup = () => {
  //   setRegistrationPopup(false);
  //   setSelectedEvent(null);
  // };
  const events = [
    { 
        name: "Hyderabad Comic Con 2024",
        summary: "Celebrate comics, cosplay, gaming, and pop culture at Hyderabad's biggest comic convention!",
        // description: "Join thousands of fans for meet-and-greets with creators, panels, workshops, artist alleys, exclusive merchandise, and more. Dress up as your favorite characters and immerse yourself in the world of fantasy and adventure!",
        date: new Date(2024, 1, 20),
        imageURL: "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_800/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1570269547%2Fu2a9mvpi5lxvtasvf6zd.jpg",
        id:"Comic"
    },
    {
        name: "Anoushka Live Concert",
        summary: "Experience a magical evening of Indian classical music with renowned singer Anoushka.",
        // description: "Witness the virtuosity and soulful melodies of Anoushka Shankar as she performs a captivating set featuring traditional ragas and contemporary compositions. Get ready to be transported by the beauty and power of her sitar playing.",
        date: new Date(2024, 1, 21),
        imageURL: "https://cdn-az.allevents.in/events7/banners/cdd81d879f60938a36fa330abc7461850c93de45910e7b6b094b973ef5925ff5-rimg-w960-h503-gmir.jpg?v=1704421326",
        id:"Concert"
    },
    {
        name: "ACETECH Hyderabad 2024",
        summary: "Explore the latest innovations and trends in architecture, construction, engineering, and technology at ACETECH Hyderabad.",
        // description: "Network with industry leaders, discover new products and solutions, attend expert-led seminars, and gain insights into the future of the built environment. This exhibition is a must-attend for professionals in the AEC industry.",
        date: new Date(2024, 1, 19),
        imageURL: "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_1316/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1705559270%2Fvpln4f9qkg4alveljofz.jpg",
        id:"Ranbir"
    },
    {
        name: "Zomaland by Zomato Live | Hyderabad",
        summary: "Indulge in a vibrant food and music festival featuring top artists, delicious cuisines, and immersive experiences.",
        // description: "Enjoy live performances by popular bands and DJs, savor a variety of dishes from local restaurants and food trucks, participate in fun activities, and create unforgettable memories with friends and family. Zomaland promises a weekend of excitement and entertainment for all ages.",
        date: new Date(2024, 1, 20),
        imageURL: "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_1316/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1705467643%2Fsxrkxzv7hgexadicanbd.png",
        id:"Zomaland"
    },
    {
        name: "Republic Day Run at Decathlon Kukatpally, Hyderabad",
        summary: "Celebrate Republic Day with a 5K run to promote fitness and community spirit.",
        // description: "Join fellow runners and fitness enthusiasts for a morning of exercise and celebration. The run is open to participants of all ages and abilities. Show your patriotic spirit and get active for a good cause!",
        date: new Date(2024, 1, 26),
        imageURL: "https://media.allforsport.in/events/34b7b1dc-a64e-11ee-9f7d-e7602d4a6595/1704342451721.jpeg",
        id:"Marathon"
    },
    {
      name:"India Vs England Test Match",
      summary:"England Lions pin India to mat despite Patidar's quick 140: Patidar hit 111, but India A played a draw against England Lions.  The Indian bowling attack restricted England to 129 runs after setting a target of 230.",
      date: new Date(2024,1,31),
      imageURL:"https://images.indianexpress.com/2021/02/INDIA-vs-ENGLAND.jpg",
      id:"Test"
    }
];

// const EventCard = ({ event }) => (
//     <Col key={event.name}>
//     <Card className='mx-2' style={{ marginBottom: 30 }}>
//         <Card.Img variant="top" src={event.imageURL} alt={event.name} />
//         <Card.Body>
//             <Card.Title>{event.name}</Card.Title>
//             <Card.Text>{event.summary}</Card.Text>
//             <Card.Subtitle variant="primary">{event.date.toLocaleDateString()}</Card.Subtitle>
//             {/* <Card.Link href={`/register/${event.name}`}>Learn More</Card.Link> */}
//             <Link to={`/register/${event.name}`} state={{ event: event }}>Learn more</Link>
//         </Card.Body>
//     </Card>
//     </Col>
//   // </Row>
// ); 
  return (
    // <div className="main-container">
    // <div className="welcome-section">
    //     <h3><a href='/user'>User Profile</a></h3>
    //   </div>
    //   <div className="welcome-section">
    //     <h1>Welcome to Event Buddy</h1>
    //   </div>

    //   <div className="event-boxes">
    //     {events.map((event) => (
    //       <div key={event.id} className="event-box" onClick={() => handleEventClick(event)}>
    //         {event.name}
    //       </div>
    //     ))}
    //   </div>

    //   {selectedEvent && (
    //     <div className="event-details">
    //       <h2>{selectedEvent.name}</h2>
    //       <p>{selectedEvent.details}</p>
    //       <button onClick={handleRegistration}>Register</button>
    //     </div>
    //   )}

    //   {registrationPopup && (
    //     <div className="popup">
    //       <div className="popup-content">
    //         <p>Thank you for registering!</p>
    //         <button onClick={closePopup}>Close</button>
    //       </div>
    //     </div>
    //   )}
    // </div>
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Event Buddy</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {/* link for home */}
              <li className="nav-item">
                <NavLink className="nav-link" to="">Home</NavLink>
              </li>
              {/* link for users */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/user">UserProfile</NavLink>
                {/* <a href='/user' className="nav-link">User Profile</a> */}
              </li>
              {/* link for contactus */}
            </ul>
          </div>
        </div>
      </nav>
      {/* <Container className='w-50'> */}
            {/* List of items */}
            {/* <Container className=''>
                { */}
                    {/* events.map((event) => {
                        return <div className="" key={event.name}>
                            <EventCard event={event} />
                        </div>
                    }) */}
            <Row xs={1} md={4} className="g-4">
              {
                events.map((event,idx)=>(
                  <Col key={idx} className='d-flex align-items-stretch'>
                    {/* <div className="d-flex align-items-stretch"> */}
                    <Card className='mx-2' style={{ marginBottom: 30 }}>
                      <Card.Img variant="top" src={event.imageURL} alt={event.name} />
                      <Card.Body>
                        <Card.Title>{event.name}</Card.Title>
                        <Card.Text>{event.summary}</Card.Text>
                        <Card.Subtitle variant="primary">{event.date.toLocaleDateString()}</Card.Subtitle>
                        {/* <Card.Link href={`/register/${event.name}`}>Learn More</Card.Link> */}
                        <Link to={`/${event.id}`} state={{ event: event }} target='_blank'>Learn more</Link>
                        </Card.Body>
                    </Card>
                    {/* </div> */}
                  </Col>
                ))
              }
            </Row>
                {/* } */}
            {/* </Container> */}
        {/* </Container> */}
    </div>
  );
};

export default MainPage;