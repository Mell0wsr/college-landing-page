import React from 'react';
import './Courses.scss';

const coursesData = [
  {
    faculty: 'Management',
    courses: ['Business Management', 'Human Resource Management', 'Financial Accounting'],
  },
  {
    faculty: 'Law',
    courses: ['Legal Studies', 'Corporate Law', 'Criminal Justice'],
  },
  {
    faculty: 'Science',
    courses: ['Biological Sciences', 'Physics', 'Chemistry'],
  },
  {
    faculty: 'Technology',
    courses: ['Information Technology', 'Data Science', 'Cybersecurity'],
  },
  {
    faculty: 'Engineering',
    courses: ['Mechanical Engineering', 'Civil Engineering', 'Electrical Engineering'],
  },
];

const Courses = () => {
  return (
    <div className="courses-page">
      <h1>Browse & Explore Our Courses</h1>
      <p>Discover a wide range of courses offered at Giyani TVET College, categorized by faculty.</p>
      <div className="faculties">
        {coursesData.map((facultyData, index) => (
          <div key={index} className="faculty-section">
            <h2>{facultyData.faculty}</h2>
            <div className="courses-grid">
              {facultyData.courses.map((course, idx) => (
                <div key={idx} className="course-card">
                  <h3>{course}</h3>
                  <p>Learn more about {course} and how it can shape your future.</p>
                  <button>Read More</button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
