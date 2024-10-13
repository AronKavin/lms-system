"use client"
import React, { useEffect, useState } from 'react'
import CategoryFilter from './_components/CategoryFilter';
import { getCourseList } from '@/app/_services/index'
import CourseList from './_components/CourseList';
function browse() {
  const [courses,setCourses]=useState([]);
  const [coursesOrg,setCoursesOrg]=useState([]);
  useEffect(()=>{
    getCourses();
  },[])
  const getCourses = async () => {
    try {
      const resp = await getCourseList();
      console.log(resp);
      setCourses(resp.courseLists);
      setCoursesOrg(resp.courseLists);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };
  const filterCourse = (category) => {
    if (category === 'all') {
      setCourses(coursesOrg);
      return;
    }
  
    const filteredList = coursesOrg.filter((course) => {
      
      return course.tags && Array.isArray(course.tags) && course.tags.includes(category);
    });
  
    setCourses(filteredList);
  };
  return (
    <div>
      <CategoryFilter selectedCategory={(category)=>filterCourse(category)}/>
      {courses.length > 0 ? <CourseList courses={courses} /> : <p>No courses available.</p>}
    </div>
  )
}

export default browse
