"use client";
import React from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import ResizeIcon from "../../assets/icons/ResizeIcon";
import FilesIcon from "../../assets/icons/Files";
import Link from "next/link";

export default function AboutMe() {
  return (
    <PanelGroup direction="horizontal" className="about-me">
      <div className="about-me__sidebar">
        <Link href="/about-me" className="about-me__link">
          <FilesIcon className="about-me__icon" />
        </Link>
        <Link href="/about-me" className="about-me__link">
          <FilesIcon className="about-me__icon" />
        </Link>
        <Link href="/about-me" className="about-me__link">
          <FilesIcon className="about-me__icon" />
        </Link>
      </div>
      <Panel
        collapsible={true}
        collapsedSize={35}
        minSize={10}
        className="about-me__panel"
      >
        sourcebrowser{" "}
      </Panel>
      <PanelResizeHandle
        style={{
          border: "2px solid #1E2D3D",
          display: "flex",
          alignItems: "center",
        }}
        className="about-me__resize-handle"
      >
        {/* <ResizeIcon /> */}
      </PanelResizeHandle>
      <Panel className="about-me__panel">sourceviewer</Panel>
    </PanelGroup>
  );
}
