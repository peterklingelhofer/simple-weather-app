import * as React from 'react';
import { useSelector } from 'react-redux';
import ZipCode from './../ZipCode/ZipCode';
import { ZipCodeProps } from './types';
import { ZipCodeListContainer } from './styled';

const ZipCodeList: React.FC = () => {
  const zipCodes = useSelector((state: any) => state.zipCodes);
  const zipCodeList = (
    <div className="zipCodeList">
      {zipCodes?.map((zipCode: ZipCodeProps) => (
        <ZipCode key={zipCode.id} id={zipCode.id} text={zipCode.text} />
      ))}
    </div>
  );
  return <ZipCodeListContainer>{zipCodeList}</ZipCodeListContainer>;
};
export default ZipCodeList;
