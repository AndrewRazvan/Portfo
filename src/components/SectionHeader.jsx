// Numbered section heading: "01 // experience" + title (+ optional lead)
const SectionHeader = ({ index, eyebrow, title, lead }) => {
  return (
    <div className="section-header reveal">
      <p className="section-eyebrow">
        <span className="section-eyebrow-index">{index} {"//"}</span>
        {eyebrow}
      </p>
      <h2>{title}</h2>
      {lead && <p className="section-lead">{lead}</p>}
    </div>
  );
};

export default SectionHeader;
