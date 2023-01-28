import './cards.css'
import Ci1 from './ci1.png'
import Ci2 from './ci2.png'
import Ci3 from './ci3.png'
import Ci4 from './ci4.png'
import Ci5 from './ci5.jpg'
import Ci6 from './ci6.png'



let arr = [
  { photo: Ci1,
    heading: "LAMP Stack Vs MEAN stack: Choosing the right platform...",
    name: "EdYoda",
    date: "24 Aug 2019",
    description: "In today’s dynamic world, rapid web application development with a smooth user interface that can adapt to specific features is the main business requirement..."
  },
  { photo: Ci2,
    heading: "Your Guide to EdYoda Admission Test",
    name: "EdYoda",
    date: "03 Feb 2020",
    description: "All about EdYoda admissions test and how to avail the scholarships up to INR 2,50,000. Ever since 2019, after a solid hit from the falling rate of economic growth..."
  },
  { photo: Ci3,
  heading: "Introduction To A Machine Learning Online Course",
  name: "EdYoda",
  date: "23 Aug 2019",
  description: "We have had an insight into Artificial Intelligence. Well, one of its subfields is machine learning and this introduction will help you get a fair idea of what a machine learning..."
},
{photo: Ci4,
heading: "A Primer on Python Programming Tutorial for...",
name: "EdYoda",
date: "23 Jul 2019",
description: "Python has been the most dominant programming language in the development community for quite a few years now. This is evident from the fact that according to a recent..."
},
{ photo: Ci5,
heading: "An Introduction to Green Cloud Computing",
name: "EdYoda",
date: "21 Jul 2019",
description: "Sustainability has been gaining importance since the last two decade because of the extensive exploitation of natural resources by mankind. It has been noted that during the last..."
},
{ photo: Ci6,
heading: "What is Income Share Agreement?",
name: "EdYoda",
date: "14 Oct 2019",
description: "The term Income Share Agreement has been around for a long time since 1955 to be precise. Surprised, eh? It was first introduced by Milton Friedman, an American economist..."
}
]


function Cards() {
    return (
      <div className='cardDiv'>
      {arr.map((arr) =>{
      return <div className="card">
    <img className="cardImg" src ={arr.photo}></img>
    <h1 className='cardHd'>{arr.heading}</h1>
    <span className='joiner'>
    <h3 className='cardName'>{arr.name}</h3>
    <h3 className='cardDate'>| {arr.date}</h3>
    </span>
    <p className='desc'>{arr.description}</p>
    </div>
})}
      </div>
    )
  }
  
  export default Cards;