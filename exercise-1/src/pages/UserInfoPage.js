import React from 'react';
import { useQuery } from '@apollo/client';
import Loading from '../components/helpers/Loading'
import GET_USER_DATA from "../graphql/queries/GetUserData";
import ErrorComponent from '../components/helpers/ErrorComponent'
import InfoPageLayout from '../components/layouts/InfoPageLayout'
import UserPostsComponent from "../components/main/UserPostsComponent";
import UserDetailsComponent from "../components/main/UserDetailsComponent";

const UserInfoPage = () => {
  const { loading, error, data } = useQuery(GET_USER_DATA);
  if (loading) return <Loading />;
  if (error) return <ErrorComponent error={error} />;

  return(
      <InfoPageLayout>
          <UserDetailsComponent userData={data.user}/>
          <UserPostsComponent username={data.user.username} postData={data.user.posts.data}/>
      </InfoPageLayout>
  )
}

export default UserInfoPage
