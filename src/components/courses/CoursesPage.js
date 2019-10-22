import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/courseActions";

export function CoursesPage(props) {
  const { addCourses, courses } = props;
  const [course, setCourse] = useState({ title: "" });

  function handleInputChange(e) {
    console.log("e: ", e.target.value);
    setCourse({ ...course, title: e.target.value });

    // setCourse(prevCourse => ({ ...prevCourse, title: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("course: ", course);
    addCourses(course);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Courses Dashboard</h2>
      <h3>Add Course</h3>
      <input type="text" onChange={handleInputChange} value={course.title} />
      <input type="submit" value="submit" />
      {courses.map(c => (
        <ul key={c.title}>{c.title}</ul>
      ))}
    </form>
  );
}

CoursesPage.propTypes = {
  addCourses: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  debugger;
  return {
    courses: state.courses
  };
}

export default connect(
  mapStateToProps,
  actions
)(CoursesPage);
