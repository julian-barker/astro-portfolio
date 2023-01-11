import pkg from "react-vertical-timeline-component-fix";
import "react-vertical-timeline-component-fix/style.min.css";
const { VerticalTimeline, VerticalTimelineElement } = pkg;

const Experience = (props) => {
  let work;
  if (props.experience) {
    work = props.experience.map(function (work, i) {
      const technologies = work.technologies;

      const tech = technologies.map((technology, i) => {
        return (
          <div key={i} className='inline-block m-0.5 px-3 rounded-l-full rounded-r-full bg-stone-500 text-stone-100'>
            {technology}
          </div>
        );
      });
      return (
        <VerticalTimelineElement
          className="vertical-timeline-element--work relative text-stone-300"
          date={work.years}
          iconStyle={{
            background: "rgb(245 158 11)",
            color: "#eee",
            textAlign: "center",
          }}
          icon={<i className="fab fa-react experience-icon text-3xl md:text-4xl absolute inset-0 flex justify-center items-center"></i>}
          key={i}
        >
          <h3
            className="vertical-timeline-element-title font-bold text-xl text-amber-500"
            style={{ textAlign: "left" }}
          >
            {work.title}
          </h3>
          <h4
            className="vertical-timeline-element-subtitle font-medium text-base text-stone-700"
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
      <div className=" mx-auto">
        <VerticalTimeline>
          {work}
          <VerticalTimelineElement
            className='relative'
            iconStyle={{
              background: "rgb(245 158 11)",
              color: "#fff",
              textAlign: "center",
            }}
            icon={
              <i className="fas fa-hourglass-start experience-icon text-2xl md:text-3xl absolute inset-0 flex justify-center items-center"></i>
            }
          />
        </VerticalTimeline>
      </div>
    </section>
  );
}


export default Experience;
