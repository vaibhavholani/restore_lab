import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Our affiliations and sponsors!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/ot.jpg'
              text='The Department of Occupational Science and Occupational Therapy at the University of Toronto.'
              label='Affiliation'
              path='https://ot.utoronto.ca/about/core-faculty/behdin-nowrouzi-kia/'
              target="_blank"
            />
            <CardItem
              src='images/krembil.jpg'
              text='Krembil Research Institue'
              label='Affiliation'
              path='https://www.uhnresearch.ca/researcher/behdin-nowrouzi-kia'
              target="_blank"
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/sshrc.jpg'
              text='Social Sciences and Humanities Research Council'
              label='Funder'
              path='/projects/#sshrc_project'
              target="_self"
            />
            <CardItem
              src='images/oel.jpeg'
              text='Ontario Electrical League'
              label='Funder'
              path='/projects#ontario_elec_project'
              target="_self"
            />
            <CardItem
              src='images/someB.png'
              text='Blue Branch'
              label='Funder'
              path='/projects#blue_branch_project'
              target="_self"
            />
            <CardItem
              src='images/wcb.jpg'
              text='Workers’ Compensation Board - Alberta'
              label='Funder'
              path='/projects#workers_comp_project'
              target="_self"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
