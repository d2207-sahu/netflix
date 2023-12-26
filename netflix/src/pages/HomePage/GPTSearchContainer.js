import React from 'react';
import {ButtonG} from '../../components/globals';

const GPTSearchContainer = () => {
  return (
    <form className="flex justify-center items-center p-10 bg-black">
      <input
        className="p-8 m-2 w-[35vw] z-10"
        type="text"
        placeholder="What would you watch today?"
      />
      <ButtonG className='z-10'>Search</ButtonG>
    </form>
  );
};

export default GPTSearchContainer;
