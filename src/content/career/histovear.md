---
level: 10
title: HistoVeaR
subtitle: Markerless motion capture
years: "2026–"
chapter: 3
role: Software engineer · Research assistant
summary: "I received a research assistant offer at the end of my first semester and joined the project at the start of my second. As a software engineer, I build a markerless motion capture system that works with a single depth camera."
credits:
  - Solo programmer
tags:
  - Single depth camera
  - Markerless
  - Ongoing
media:
  - type: video
    src: /videos/histovear-live-test.mp4
    poster: /videos/histovear-live-test.webp
    title: "Live test: the avatar in Unity follows the pose from the camera"
  - type: image
    src: ./images/histovear-chair.jpg
    alt: "Left: the camera image with the detected pose drawn over a person sitting on a chair with crossed legs. Right: Unity, where the raw pose points and a blue avatar take the same pose"
    caption: Sitting on a chair with crossed legs
  - type: image
    src: ./images/histovear-floor.jpg
    alt: "Left: the camera image with the detected pose drawn over a person sitting cross-legged on the floor. Right: Unity, where the raw pose points and a blue avatar take the same pose"
    caption: Sitting cross-legged on the floor
---

Markerless motion capture is on the rise, and many companies work on it. Well-known examples include Rokoko, Move.ai, DeepMotion and RADiCAL.

The system takes the data from pose-estimation neural networks, runs it through several filters, sends it to Unity and maps it onto the bones of rigged characters there. Along the way it deals with many complicated problems: grounding, IK, filtering out unwanted movement and working out the axes each bone bends around.
