import React, {useState, useEffect} from 'react';
import axios from 'axios';

function FAQ(props) {
  // const [faq, setFaq] = useState([]);

  // useEffect(() => {
  //   getFAQs();
  // }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const faq = [
    {id:1,question:'Are you official ?',answer:'No we are volunteer team, this project is just to share some visualizations of the data'},
    {id:2,question:'Who is your inspiration ?',answer:'Our inspiration is Covid19India team for the visualizations of the Maps which they have created, apart from that we wish to add more resources for all Maharashtrian citizens'},
    {id:3,question:'What is the purpose of this project ?',answer:'Apart from the patient data we are also building resources of various services and news which are only relevant for Maharashtra. Join the volunteers group to add this data.'},
    {id:4,question:'Where are you getting patient data from ?',answer:'We are getting data from Covid19India team - We are using state bulletins and official handles to update our numbers. The data is validated by a group of volunteers and published into a Google sheet and an API. API is available for all at api.covid19india.org. We would love it if you can use this data in the fight against this virus. The source <a href=\"https://telegra.ph/Covid-19-Sources-03-19\">list is here.</a>\n\n'},
    {id:5,question:'Who are you ? ', answer:'We are a group of volunteers from <a href=\"http://enrootmumbai.in/">Enroot Mumbai team.</a>'}
  ]


  // const getFAQs = () => {
  //   axios
  //     .get('https://api.covid19india.org/website_data.json')
  //     .then((response) => {
  //       setFaq(response.data['faq']);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <div className="FAQ">
      {faq.map((faq, index) => {
        return (
          <div
            key={index}
            className="faq fadeInUp"
            style={{animationDelay: `${0.5 + index * 0.1}s`}}
          >
            <h2 className="question">{faq.question}</h2>
            <h2
              className="answer"
              dangerouslySetInnerHTML={{__html: faq.answer}}
            ></h2>
          </div>
        );
      })}
      
    </div>
  );
}

export default FAQ;
