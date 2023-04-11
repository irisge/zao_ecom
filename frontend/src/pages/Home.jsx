import React from 'react';

import { useNavigate } from 'react-router-dom';
// import line from '../assets/surfDrawLine.svg';
import arrow from '../assets/arrow-blue-right.svg';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="grow grid grid-rows-4 lg:grid-rows-3 h-full w-full z-0 ">
      <div className="bg-line-pattern bg-no-repeat bg-bottom lg:bg-left bg-contain row-start-2 row-end-5 lg:row-end-4 min-h-full  min-w-[100vw] absolute lg:relative self-end lg:self-center lg:min-w-[600px]" />
      <div className="row-start-1 lg:row-span-2 flex flex-col justify-evenly items-end lg:items-center justify-self-end w-full  max-w-[300px] lg:min-w-md font-extrabold text-xs lg:text-base px-4">
        <button
          type="button"
          onClick={() => navigate('/shop')}
          className="bg-light-blue flex items-center justify-evenly h-12 lg:h-auto lg:w-3/4 max-w-xs rounded-2xl text-dark-blue justify-self-end"
        >
          <p className="hidden lg:flex">S'ÉQUIPER</p>
          <p className="flex lg:hidden">S'EQUIPER & SE FORMER</p>
          <img src={arrow} alt="flèche" className="scale-50 lg:scale-90" />
        </button>
        <button
          type="button"
          onClick={() => navigate('/shop')}
          className="hidden lg:flex bg-light-blue items-center justify-evenly h-12 lg:h-auto lg:w-3/4 max-w-xs rounded-2xl text-dark-blue"
        >
          <p>SE FORMER</p>
          <img src={arrow} alt="flèche" className="scale-50 lg:scale-90" />
        </button>
      </div>
      <div className=" flex flex-col w-full row-start-2 lg:row-start-3 row-end-5 lg:row-end-4 justify-start lg:justify-evenly justify-self-center py-4 ">
        <div className="bg-light-blue z-30 rounded-2xl p-6 lg:p-8 font-extrabold text-base lg:text-xl text-dark-blue w-11/12 lg:w-2/3 float-right self-center">
          <h5>NOUVEAUTÉ:</h5>
          <h6>LES FORFAITS DU PRINTEMPS SONT DISPONIBLES À LA VENTE. </h6>
        </div>
      </div>
    </div>
  );
}

export default Home;
