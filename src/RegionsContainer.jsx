import React from 'react';

import { useSelector } from 'react-redux';

import Regions from './Regions';

export default function Regionscontainer() {
  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  return (
    <Regions regions={regions} />
  );
}