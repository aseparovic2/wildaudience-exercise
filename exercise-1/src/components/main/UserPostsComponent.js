import React from "react";

const UserPostsComponent = ({username, postData}) => {
    return (
        <div className="w-full lg:w-2/5 mx-6 lg:mx-0 h-screen py-12">
            <div
                className="w-full rounded-lg lg:rounded-r-lg lg:rounded-l-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0 px-12 h-full overflow-auto">
                <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start mt-4">{username}'s Posts:</p>
                {
                    postData.map((data) => {
                        return <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start" key={data.id} id={data.id}>Title: {data.title}</p>
                    })
                }
            </div>
        </div>
    )
}

export default UserPostsComponent
