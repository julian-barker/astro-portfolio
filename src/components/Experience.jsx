import React, { Component } from "react";
import pkg from "react-vertical-timeline-component-fix";
import "react-vertical-timeline-component-fix/style.min.css";
const { VerticalTimeline, VerticalTimelineElement } = pkg;

class Experience extends Component {
  render() {
    if (this.props.experience) {
      var work = this.props.experience.map(function (work, i) {
        const technologies = work.technologies;

        var tech = technologies.map((technology, i) => {
          return (
            <div key={i} className='inline-block m-0.5 px-3 rounded-l-full rounded-r-full bg-lime-500 text-stone-100'>
              {technology}
            </div>
          );
        });
        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={work.years}
            iconStyle={{
              background: "rgb(245 158 11)",
              color: "#eee",
              textAlign: "center",
            }}
            icon={<i className="fab fa-react experience-icon my-0.5 text-3xl"></i>}
            key={i}
          >
            <h3
              className="vertical-timeline-element-title font-bold text-xl text-amber-500"
              style={{ textAlign: "left" }}
            >
              {work.title}
            </h3>
            <h4
              className="vertical-timeline-element-subtitle font-medium text-base"
              style={{ textAlign: "left" }}
            >
              {work.company}
            </h4>
            <div style={{ textAlign: "left", marginTop: "15px" }}>{tech}</div>
          </VerticalTimelineElement>
        );
      });
    }

    return (
      <section id="resume" className="pb-5">
        {/* <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "black" }}>
              <span className="text-black" style={{ textAlign: "center" }}>
                {sectionName}
              </span>
            </h1>
          </div>
        </div> */}
        <div className=" mx-auto">
          <VerticalTimeline>
            {work}
            <VerticalTimelineElement
              iconStyle={{
                background: "rgb(245 158 11)",
                color: "#fff",
                textAlign: "center",
              }}
              icon={
                <i className="fas fa-hourglass-start mx-auto my-1 experience-icon text-2xl"></i>
              }
            />
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Experience;
