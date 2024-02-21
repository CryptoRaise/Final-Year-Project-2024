import React from "react";
import Card from "./Card";
import Link from "next/link";
import styles from "../styles.css";
const MainBody = () => {
  return (
    <div>
      <div className="project-image w-[100%] h-[25rem]" style={{ styles }}>
        <div className="check font-bold text-white text-3xl" style={{ styles }}>
          Check
        </div>
        <div className="btn-container flex gap-6 justify-center relative top-[45%]">
          <div>
            <Link href="/InitCamp">
              <button
                className="btn rounded p-3 font-bold text-white"
                style={{ styles }}
              >
                Start a Project
              </button>
            </Link>
          </div>
          <div>
            <Link href="/RunningProjects">
              <button className="btn rounded p-3 font-bold text-white">
                Contribute a Project
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className=" flex flex-auto gap-3 cards-display items-center justify-center my-[12%]">
        <Card name={"Treatment of cancer"} />
        <Card name={"Life-style Fit Club"} />
        <Card name={"Renewable Energy"} />
      </div>
    </div>
  );
};

export default MainBody;
