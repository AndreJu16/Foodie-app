import React from 'react'
import PickMeals from '../assets/pick-meals-image.png';
import ChooseMeals from '../assets/choose-image.png';
import DeliveryMeals from '../assets/delivery-image.png';

const Work = () => {
    const workInfoData = [
        {
            image: PickMeals,
            title: "Pick Meals",
            text: "Lorem ipsum dolor sit amet sddsdsdas quo ceat voluptatem nulla vel consectetur, architecto quaerat quibusdam?",
        },
        {
            image: ChooseMeals,
            title: "Choose How Often",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corporis repellat neque qui eos tempore quae assumenda p?",
        },
        {
            image: DeliveryMeals,
            title: "Fast Deliveries",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corporis repellat neque qui eos tempore quae a?",
        },
    ];
  return (
    <div className="work-section-wrapper">
        <div className="work-section-top">
            <p className="primary-subheading">Work</p>
            <h1 className="primary-heading">How It Works</h1>
            <p className="primary-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem libero quasi molestiae nostrum, dolores earum eligendi? Iste a beatae dicta? Dolor accusantium dolore architecto.
            </p>
        </div>
        <div className="work-section-bottom">
            {workInfoData.map((data) => (
                    <div className="work-section-info" key={data.title}>
                        <div className="info-boxes-img-container">
                            <img src={data.image} alt="" />
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                ))}
        </div>
    </div>
  );
};

export default Work;