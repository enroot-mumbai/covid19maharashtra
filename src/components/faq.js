import React, { useEffect} from 'react';
import { selectedLanguage } from '../utils/setLanguage';

function FAQ(props) {
  // const [faq, setFaq] = useState([]);

  // useEffect(() => {
  //   getFAQs();
  // }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const faq = [
    {id:1,question: selectedLanguage.faqq1 ,answer:selectedLanguage.faqa1},
    {id:2,question:selectedLanguage.faqq2,answer:selectedLanguage.faqa2},
    {id:3,question:selectedLanguage.faqq3,answer:selectedLanguage.faqa3},
    {id:4,question:selectedLanguage.faqq4,answer:selectedLanguage.faqa4},
    {id:5,question:selectedLanguage.faqq5, answer:selectedLanguage.faqa5}
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
