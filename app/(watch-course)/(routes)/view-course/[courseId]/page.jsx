"use client";
import React, { useEffect, useState } from 'react';
import ChapterNav from './_components/ChapterNav';
import FullVideoPlayer from './_components/FullVideoPlayer';
import { UserButton, useUser } from '@clerk/nextjs';
import { getCourseById } from '@/app/_services';
import { CompletedChapterContext } from '@/app/_context/CompletedChaptercontext';

function ViewCourse({ params }) {
  const { user } = useUser();
  const [course, setCourse] = useState(null);  
  const [userCourse, setUserCourse] = useState(null);  
  const [activeChapter, setActiveChapter] = useState(null);  
  const [completedChapter, setCompletedChapter] = useState([]);  

  useEffect(() => {
    if (user) {
      getCourse();
    }
  }, [user]);

  const getCourse = async () => {
    try {
      const resp = await getCourseById(params?.courseId, user.primaryEmailAddress.emailAddress);
      if (resp) {
        console.log(resp.userEnrollCourses[0]?.completedchapter)
        setCourse(resp.courseList || {});  
        setUserCourse(resp.userEnrollCourses || []); 
        setCompletedChapter(resp.userEnrollCourses?.[0]?.completedchapter || []);  
      }
    } catch (error) {
      console.error("Error fetching course data:", error);
    }
  };

  return course ? (
    <div className='flex'>
      <CompletedChapterContext.Provider value={{ completedChapter, setCompletedChapter }}>
        <div className='hidden fixed bg-white md:block md:w-80 border shadow-sm h-screen z-50'>
          {course ? (
            <ChapterNav 
              course={course} 
              userCourse={userCourse} 
              setActiveChapter={(chapter) => setActiveChapter(chapter)} 
            />
          ) : null}
        </div>
        <div className='ml-80'>
          <div className='float-right p-5'>
            <UserButton />
          </div>
          <FullVideoPlayer 
          userCourse={userCourse} 
          activeChapter={activeChapter} />
        </div>
      </CompletedChapterContext.Provider>
    </div>
  ) : null;  
}

export default ViewCourse;
