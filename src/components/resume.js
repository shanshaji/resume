import React, { Component } from "react";

class Resume extends Component {
  render() {
    if (this.props.data) {
      var education = this.props.data.education.map((e) => {
        return (
          <div key={e.school} className="row item">
            <div className="twelve columns">
              <h3>{e.school}</h3>
              <p className="info">
                {e.degree} <span>&bull;</span>{" "}
                <em className="date">{e.graduated}</em>
              </p>
              <p>{e.description}</p>
            </div>
          </div>
        );
      });

      var work = this.props.data.work.map((job) => {
        return (
          <div key={job.company} className="row item">
            <div className="twelve columns">
              <h3>{job.company}</h3>
              <p className="info">
                {job.title}
                <span>&bull;</span> <em className="date">{job.years}</em>
              </p>

              <p>{job.description}</p>
            </div>
          </div>
        );
      });

      var skills = this.props.data.skills.map((skill) => {
        var className = "bar-expand " + skill.name.toLowerCase();
        return (
          <li key={skill.name}>
            <span style={{ width: skill.level }} className={className}></span>
            <em>{skill.name}</em>
          </li>
        );
      });
    }
    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">{education}</div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <p>
              The main skill sets below outline the variety of skills performed
              during my journey as a {this.props.title}.
            </p>
            <div className="bars">
              <ul className="skills">{skills}</ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
