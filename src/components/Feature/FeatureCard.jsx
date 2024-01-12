import React from 'react'
import PropTypes from 'prop-types';
import "./Feature.css"
import { useInView } from 'react-intersection-observer';

const FeatureCard = ({ icon,title, desc }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
      });

    return (
        <div
        className={`flex flex-col items-center justify-center back p-6 rounded-lg shadow-md ${inView ? 'flip-up' : ''}`}
        ref={ref}
      >
        {inView && <img src={icon} alt="icon" className=" imgback w-16 h-16 mb-4 p-4 rounded" />}
        <div className=" text-center text-slate-400">
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <p className="">{desc}</p>
        </div>
        </div>
    );
};

FeatureCard.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string,
    icon: PropTypes.string,
};

export default FeatureCard