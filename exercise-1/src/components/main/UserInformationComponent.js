import React from "react";

const UserInformationComponent = ({title,info}) => {
  return (
      <>
      <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start mt-4">{title} :</p>
      <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">{info}</p>
      </>
  )
}
export default UserInformationComponent;
