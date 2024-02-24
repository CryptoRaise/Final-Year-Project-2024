import React from "react";
import Card from "./Card";
import Link from "next/link";
import styles from "../styles.css";
const MainBody = () => {
  return (
    <div className="MainBody">
      <div className="project-image w-[100%] h-[25rem]" style={{ styles }}>
        <div className="flex flex-col gap-2 justify-around">
          <div
            className="check font-bold text-white items-center"
            style={{
              styles,
              width: "29%",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            eveniet ipsum autem beatae, sint sapiente sit maxime aspernatur
            iste, minus dolorem numquam ut aperiam nisi veniam asperiores quidem
            laboriosam quaerat sequi? Provident! Lorem ipsum dolor sit amet
            consecteturatis voluptas quis nobis culpa placeat excepturi magnam
            nemo ipsum cum. Porro perferendis tempora dolore? nemo, eum, aliquid
            itaque,
          </div>
          <div className="btn-container flex gap-6 justify-center relative top-[45%]">
            <div>
              <Link href="/InitCamp">
                <button
                  className="btn rounded p-3 font-bold text-white"
                  style={{ styles }}
                >
                  Contribute to this Project
                </button>
              </Link>
            </div>
            <div>
              <Link href="/RunningProjects">
                <button className="btn rounded p-3 font-bold text-white">
                  Contribute to a Project
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-3 gap-6 ml-[12%] my-[3%]">
        <Card name={"Treatment of cancer"} />
        <Card name={"Life-style Fit Club"} />
        <Card name={"Renewable Energy"} />
        <Card name={"Green Environment"} />
        <Card name={"Sustainable Development"} />
        <Card name={"Earthquake Relief"} />
      </div>
    </div>
  );
};

export default MainBody;
