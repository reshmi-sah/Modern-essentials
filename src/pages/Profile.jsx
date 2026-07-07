import React from 'react'
import UserInfo from '../components/profile/UserInfo'
import AddressSection from '../components/profile/AddressSection'

const Profile = () => {
  return (
    <div className = 'bg-gray-100 p-2 sm:p-5 md:p-10 mt-20 lg:mt-12 min-h-screen'>
      <div className='flex flex-col lg:flex-row gap-5'>
       <div className='w-full lg:sticky lg:top-7 lg:w-64 h-fit lg:h-96 bg-white rounded-xl shadow'>
         <UserInfo />
       </div>
      
      <div className='flex-1 bg-white rounded-lg shadow'>
        <AddressSection />
      </div>
      </div>
    </div>
  )
}

export default Profile
