import React from 'react';
import { getAboutInfo } from '../services/aboutService';
import classes from './AboutComponent.scss';

export const AboutComponent = () => {
  const [name, setName] = React.useState('Alberto');

  React.useEffect(() => {
    const name: string = 'Pepe';
    setName(getAboutInfo(name));
  }, []);

  return (
    <div className={classes.aboutbackground}>
      <span>Info About: {name}</span>
    </div>
  );
};
