'use client';

import React, { useEffect, useState } from 'react';
import { getCourseList, getCourseById } from '@/app/_services';
import CourseList from './_components/CourseList';

const Dashboard = ({ userEmail }) => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      setLoading(true);
      setError(null);
      try {
        
        const allCoursesResponse = await getCourseList();

        
        const enrolled = [];
        for (const course of allCoursesResponse.courseLists) {
          const courseData = await getCourseById(course.id, userEmail);
          if (courseData.userEnrollCourses && courseData.userEnrollCourses.length > 0) {
            enrolled.push(course);
          }
        }
        setEnrolledCourses(enrolled);
      } catch (err) {
        console.error('Error fetching enrolled courses:', err);
        setError('Failed to load enrolled courses.');
      } finally {
        setLoading(false);
      }
    };

    fetchEnrolledCourses();
  }, [userEmail]);

  return (
    <div className="dashboard-container">
      <h1>Your Dashboard</h1>

      {/* Enrolled Courses Section */}
      <section>
        <h2>Enrolled Courses</h2>
        {loading ? (
          <p>Loading enrolled courses...</p>
        ) : error ? (
          <p className="error">{error}</p>
        ) : enrolledCourses.length > 0 ? (
          <CourseList courses={enrolledCourses} />
        ) : (
          <p>No enrolled courses. Please enroll in courses to access videos.</p>
        )}
      </section>
    </div>
  );
};

export default Dashboard;
