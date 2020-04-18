import React from 'react';
import {Link} from 'react-router-dom';
import Select from 'react-select';
import Airtable from 'airtable';
import {useQuery} from '../../utils/common-functions';
import districtNames from '../../utils/district-lang.json';
const scrollToRef = (ref) =>
  window.scrollTo({left: 0, top: ref.current?.offsetTop, behavior: 'smooth'});

export default function Services() {
  let tableName;
  const language = useQuery().get('lang');
  if (language === 'mr') {
    tableName = 'Final Data of Services Marathi';
  } else if (language === 'hi') {
    tableName = 'Final Data of Services Hindi';
  } else {
    tableName = 'Final Data of Services English';
  }

  const [servicesArray, setServices] = React.useState([]);

  const [filteredServices, setFilteredServices] = React.useState([]);
  const [singleServiceArray, setSingleServiceArray] = React.useState([]);

  const [servicesToShowFitlered, setServicesToShowFitlered] = React.useState(
    []
  );

  const serviceTableRef = React.useRef(null);
  React.useEffect(() => {
    const base = new Airtable({apiKey: 'keyv7fiKaNRuaOKYj'}).base(
      'appPNBYIlqRPXfwEK'
    );
    base(tableName)
      .select({
        maxRecords: 5000,
        view: 'Grid view',
      })
      .eachPage(
        function page(records, fetchNextPage) {
          console.log('Records', records);
          records.map((record) =>
            setServices((servicesArray) => [...servicesArray, record.fields])
          );
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.error('Airtable Error :', err);
            return;
          }
        }
      );
    // clean up
    // return () => {
    // };
  }, []);

  const districtNamesList = language
    ? districtNames[`${language}`]
    : districtNames.en;

  const servicesToShow = [
    {
      id: 1,
      title: 'Free Food',
      value: 'freeFood',
      image: 'images/food.svg',
    },
    {
      id: 2,
      title: 'Shelter Home Details',
      value: 'shelterHomes',
      image: 'images/shelter.svg',
    },
    {
      id: 3,
      title: 'Mental Health Organisations',
      value: 'mentalHealth',
      image: 'images/mental.png',
    },
    {
      id: 4,
      title: 'Medical Equipments',
      value: 'medical',
      image: 'images/medical.svg',
    },
    {
      id: 5,
      title: 'Senior Citizens',
      value: 'seniorCitizens',
      image: 'images/senior.svg',
    },
    {
      id: 6,
      title: 'Domestic Violence & Child Abuse',
      value: 'domesticViolence',
      image: 'images/violence.svg',
    },
    {
      id: 7,
      title: 'Delivery of Essential Services',
      value: 'delivery',
      image: 'images/delivery.svg',
    },
    {
      id: 8,
      title: 'Fund Raising',
      value: 'fundRaising',
      image: 'images/donation.svg',
    },
  ];

  const [selectedDistrict, setSelectedDistrict] = React.useState('');
  const [selectedService, setSelectedService] = React.useState('');

  const onSelectDistrict = (district) => {
    setSelectedDistrict(district);
    console.log(district);
    let newfilteredServices = servicesArray.filter((service) => {
      return service.District === district?.value;
    });
    setFilteredServices(newfilteredServices);
    let filteredServicesToShow = [];
    for (let i = 0; i < servicesToShow.length; i++) {
      let showService = false;
      for (let j = 0; j < newfilteredServices.length; j++) {
        if (servicesToShow[i].value === newfilteredServices[j].Category) {
          showService = true;
          break;
        }
      }
      if (showService) {
        filteredServicesToShow.push(servicesToShow[i]);
      }
    }
    setServicesToShowFitlered(filteredServicesToShow);
  };

  const onSelectedService = (item) => {
    setSelectedService(item.value);
    let newfilteredServices = filteredServices.filter((service) => {
      return service.Category === item.value;
    });
    setSingleServiceArray(newfilteredServices);
    scrollToRef(serviceTableRef);
  };

  return (
    <div className="servicesDiv">
      <div style={{width: '240px', marginBottom: '36px'}}>
        <Select
          isClearable
          className="districtSelect"
          placeholder="Select District"
          options={districtNamesList}
          onChange={(value) => onSelectDistrict(value)}
        />
      </div>

      {selectedDistrict ? (
        <div className="serviceFormDiv">
          {servicesToShowFitlered.map((singleService, index) => {
            return (
              <div
                key={index}
                onClick={() => onSelectedService(singleService)}
                className="singleService"
              >
                <img src={singleService.image} />
                <h2>{singleService.title}</h2>
              </div>
            );
          })}
        </div>
      ) : (
        <h2>Please Select a District</h2>
      )}

      {selectedService && selectedDistrict && singleServiceArray ? (
        <h1 ref={serviceTableRef} className="servicesDivH1">
          {selectedService} in {selectedDistrict.value}
        </h1>
      ) : null}

      <div className="serviceDiv">
        {selectedDistrict && selectedService && singleServiceArray
          ? singleServiceArray.map((service) => {
              return (
                <div className="serviceContainer">
                  <h2>{service.Name}</h2>
                  <h4>Region - {service.Region}</h4>
                  <h4>Contact - {service.Contact}</h4>
                  {service.Comments ? (
                    <h6>Additional info - {service.Comments}</h6>
                  ) : null}
                  {service.FundDetails ? (
                    <>
                      <h4>Donate - {service.FundDetails}</h4>
                      <p>
                        Please contact the organizers and verify your concerns
                        before donations
                      </p>
                    </>
                  ) : null}
                </div>
              );
            })
          : null}
      </div>

      {/* <img src="under_construction.svg" className="underConstructionImage" />
            <h2 className="underConstructionTitle">Under Construction</h2>
            <h3 className="underConstructionPara">Help us add the data of various services present in Maharashtra, join the group to contribute or visit <Link to="/volunteers">Volunteers Page</Link></h3> */}
    </div>
  );
}
