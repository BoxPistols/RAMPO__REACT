import React, { useRef } from "react";
import useIntersectionObserver from "./usehooks-ts";
import { css } from "@emotion/css";

export const anime = css`
  opacity: 0;
  transition: 1s;

  min-height: 100vh;
  display: flex;
  border: 1px dashed #999;
  background: #ccc;
`;

const Section = (props: { title: string }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  // console.log(`Render Section ${props.title}`, { isVisible });

  return (
    <div
      className={anime}
      ref={ref}
      style={{
        width: isVisible ? "100%" : 0,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateX(0%)" : "#translateX(-150%)"
      }}
    >
      <div style={{ margin: "auto" }}>
        {props.title}
        {/* <p>{isVisible ? "Open" : "Clone"}</p> */}
      </div>
    </div>
  );
};

export default function Component() {
  return (
    <>
      {Array.from({ length: 5 }).map((_, index) => (
        <Section key={index + 1} title={`${index + 1}`} />
      ))}
    </>
  );
}
