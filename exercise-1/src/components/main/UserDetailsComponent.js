import React from "react";
import UserInformationComponent from "./UserInformationComponent";

const UserDetailsComponent = ({userData}) => {
    return (
        <div id="profile" className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
            <div className="p-4 md:p-12 text-center lg:text-left">
                <h1 className="text-3xl font-bold pt-8 lg:pt-0">{userData.username}</h1>
                <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-teal-500 opacity-25"></div>
                <UserInformationComponent title="Adress" info={userData.address.street + userData.address.suite + userData.address.city} />
                <UserInformationComponent title="Email" info={userData.email} />
                <UserInformationComponent title="Phone" info={userData.phone} />
                <UserInformationComponent title="Company" info={userData.company.name} />
            </div>
        </div>
    )
}
export default UserDetailsComponent;
