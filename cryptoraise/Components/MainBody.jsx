import React from "react";
import Card from "./Card";
import Link from "next/link";
import styles from "../styles.css";
const MainBody = () => {
  return (
    <div className="MainBody">
      <div className="project-image w-[100%] h-[25rem]" style={{ styles }}>
        <div className="pt-5 w-[90%] mx-auto">
          <div className="flex flex-col gap-2 justify-around">
            <div
              className="check font-bold text-white items-center"
              style={{ styles }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              eveniet ipsum autem beatae, sint sapiente sit maxime aspernatur
              iste, minus dolorem numquam ut aperiam nisi veniam asperiores
              quidem laboriosam quaerat sequi? Provident! Lorem ipsum dolor sit
              amet consecteturatis voluptas quis nobis culpa placeat excepturi
              magnam nemo ipsum cum. Porro perferendis tempora dolore? nemo,
              eum, aliquid itaque,
            </div>
            <div className="btn-container flex gap-6 justify-center">
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
