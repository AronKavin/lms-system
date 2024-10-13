import { EnrollCourse, PublishCourse } from '@/app/_services';
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation';
import React from 'react'
function EnrollmentSection({courseDetail,userCourse}) {
    const {user}=useUser();
    const router=useRouter();
    const enrollCourse=async()=>{
       if(user)
       {
        await EnrollCourse(courseDetail.id,user.primaryEmailAddress.emailAddress)
        .then(async(resp)=>{
            console.log("EnrollCourseResp=>",resp);
            if(resp)
            {
                await PublishCourse(resp?.createUserEnrollCourse?.id)
                .then(result=>{
                    console.log(result);
                    if(result)
                    {
                        router.push('/view-course/'+courseDetail.id)
                    }
                })
            }

        })
    }
    else{
        router.push('/sign-in');

    }}

  return (
    <div>
    {userCourse?.courseId?
    <div className='mt-5 border rounded-lg p-2 text-center'>
       <h2 className='text-gray-500'>
           Continue to Learn
       </h2>
       <button 
       className='p-2 w-full bg-purple-500 text-white roundd-lg text-[14px] mt-2
        hover:bg-purple-700' onClick={()=>router.push('/view-course/'+courseDetail.id)}
        >Continue </button>
     </div>:null
     }
     {courseDetail.free&&!userCourse?.courseId? 
     <div className='mt-5 border rounded-lg p-2 text-center'>
        <h2 className='text-gray-500'>
            Join and crack competitive examination
        </h2>
        <button className='p-2 w-full bg-purple-500 text-white roundd-lg text-[14px] mt-2 hover:bg-purple-700'
        onClick={()=>enrollCourse()}>
            Enroll Now</button>
      </div> 
      
      
   : !userCourse?.courseId? <div className='mt-5 border rounded-lg p-2 text-center'>
      <h2 className='text-gray-500'>
          Buy this course, Get more contents and study materials
      </h2>
      <button className='p-2 w-full bg-purple-500 text-white roundd-lg text-[14px] mt-2 hover:bg-purple-700'>
       Buy for 499 </button>
    </div>:null}
  </div>
  )
}

export default EnrollmentSection
