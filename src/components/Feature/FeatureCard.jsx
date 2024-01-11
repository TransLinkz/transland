import React from 'react'
import PropTypes from 'prop-types';
import "./Feature.css"

const FeatureCard = ({ title, desc }) => {

    return (
        <div className="back p-6 rounded-lg shadow-md text-black text-center">
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <p className="">{desc}</p>
        </div>
    );
};

FeatureCard.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string
};

export default FeatureCard