import "./tags.css";

export default function Tags({ header, details }) {
  return (
    <>
      <div className="tags">
        <h5>{header}</h5>
        <p>{details}</p>
      </div>
    </>
  );
}
