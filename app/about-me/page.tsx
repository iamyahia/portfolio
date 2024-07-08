"use client";
import React from "react";
// TODO: add eslint rule to enforce import order
import Link from "next/link";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

import FileAccordion from "../../components/FileAccordion/FileAccordion";

export default function AboutMe() {
  return (
    <PanelGroup direction="horizontal" className="about-me__container">
      <Panel
        defaultSize={10}
        minSize={5}
        maxSize={20}
        className="about-me__panel"
        collapsible
      >
        <FileAccordion />
      </Panel>
      <PanelResizeHandle
        style={{
          border: "2px solid #1E2D3D",
          display: "flex",
          alignItems: "center",
        }}
        className="about-me__resize-handle"
      />
      <Panel defaultSize={60} minSize={20} className="about-me__panel">
        sourceviewer
      </Panel>
    </PanelGroup>
  );
}
