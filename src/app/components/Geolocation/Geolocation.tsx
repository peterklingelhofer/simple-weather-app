import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addZipCode } from '../../../store/actions/zipCodes';
import { geolocation } from '../../../api/googleGeolocation';

const Geolocation: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      (async function () {
        const zip: string = await geolocation(position);
        dispatch(addZipCode(zip));
      })();
    });
  }, [dispatch]);

  return <></>;
};

export default Geolocation;
