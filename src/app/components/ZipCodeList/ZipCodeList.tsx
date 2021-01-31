import * as React from 'react';
import { useSelector } from 'react-redux';
import ZipCode from './../ZipCode/ZipCode';
import { ZipCodeListContainer } from './styled';
import { RootStateInterface } from '../../../shared/interfaces/rootState';

const ZipCodeList: React.FC = () => {
  const zipCodes = useSelector((state: RootStateInterface) => state.zipCodes);
  const zipCodeList = (
    <div className="zipCodeList">
      {zipCodes?.map(zipCode => (
        <ZipCode key={zipCode.id} id={zipCode.id} text={zipCode.text} />
      ))}
    </div>
  );
  return <ZipCodeListContainer>{zipCodeList}</ZipCodeListContainer>;
};
export default ZipCodeList;
