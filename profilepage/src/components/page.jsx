import { useState } from "react";
import "../styles/page.css";
import collectiongreen from "../assets/collectiongreen.svg";
import collectiongray from "../assets/collectiongray.svg";
import managetagsgreen from "../assets/greentag.svg";
import managetagsgray from "../assets/graytag.svg";
import saved from "../assets/saved.png";
import liked from "../assets/liked.png";
import files from "../assets/files.png";
import Tags from "./tags";
export default function Page() {
  const [visible, setVisible] = useState("one");

  return (
    <>
      <div className="page">
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <button
            onClick={() => setVisible("one")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: visible === "one" ? "#07E79D" : "gray",
              padding: "10px 20px",
              borderBottom:
                visible === "one"
                  ? "2px solid #07E79D"
                  : "2px solid transparent",
              cursor: "pointer",

              background: "transparent",
            }}
          >
            <img
              src={visible === "one" ? collectiongreen : collectiongray}
              alt="collection icon"
              style={{ width: "20px", height: "20px" }}
            />
            <span>COLLECTIONS</span>
          </button>

          <button
            onClick={() => setVisible("two")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: visible === "two" ? "#07E79D" : "gray",
              padding: "10px 20px",
              borderBottom:
                visible === "two"
                  ? "2px solid #07E79D"
                  : "2px solid transparent",
              cursor: "pointer",

              background: "transparent",
            }}
          >
            <img
              src={visible === "two" ? managetagsgreen : managetagsgray}
              alt="manage tags icon"
              style={{ width: "20px", height: "20px" }}
            />
            <span>MANAGE TAGS</span>
          </button>
        </div>

        {visible === "one" && (
          <div className="one">
            <img src={saved} alt="" />
            <img src={liked} alt="" />
            <img src={files} alt="" />
          </div>
        )}
        {visible === "two" && (
          <div className="two">
            <h4>
              our recommendations work best when you let us know these things:
            </h4>
            <Tags
              header="your difficulty ✨"
              details="you decide the level of challenge you want!"
            />
            <Tags
              header="interests you like ✨ "
              details="we’ll use these to show you cool builds"
            />
            <Tags
              header="tools used 🛠️ "
              details="We’ll suggest better using these picks."
            />
          </div>
        )}
      </div>
    </>
  );
}
