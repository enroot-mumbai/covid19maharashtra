import React from 'react'

export default function Services() {

    const forms = [
        {
            id:1,
            title:'Food Related Resources',
            link:'https://airtable.com/shrUcn5QIilUh1yzA',
            image:'images/food.svg'
        },
        {
            id:2,
            title:'Shelter Home Details',
            link:'https://airtable.com/shrhAiqjg1TP0ughs',
            image:'images/shelter.svg'
        },
        {
            id:3,
            title:'Mental Health Organisations',
            link:'https://airtable.com/shrbqydy98NMBWCNs',
            image:'images/mental.png'
        },
        {
            id:4,
            title:'Medical Equipments',
            link:'https://airtable.com/shrRgJHRLbdv7SQxn',
            image:'images/medical.svg'
        },
        {
            id:5,
            title:'Senior Citizens',
            link:'https://airtable.com/shrQ3qQ3htYCg0EFG',
            image:'images/senior.svg'
        },
        {
            id:6,
            title:'Domestic Violence & Child Abuse',
            link:'https://airtable.com/shrWIakCbuAJCUzMJ',
            image:'images/violence.svg'
        }
    ]

    return (
        <div className="volunteersContainer">
            <h1>We need help in collecting information of Govt. services, NGOs, companies, or any individual who is providing a service. We need data from all the districts, so please forward this to your friends and relatives.</h1>
            <div className="serviceFormDiv">
               {forms.map(form => {
                   return(
                    <a href={form.link} className="singleForm">
                            <img src={form.image} />
                            <h2>{form.title}</h2>
                    </a>
                   )
               })}  
            </div>
        </div>
    )
}
