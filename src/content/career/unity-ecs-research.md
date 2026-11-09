---
level: 4
title: Unity ECS Research
mapName: Unity ECS
subtitle: Data-oriented programming
chapter: 2
role: Independent research
summary: "A research project I took on purely to explore data-oriented programming. I built a crowd battle simulation with up to 100,000 attacking entities in a single scene and a range of weapons to hold off endless waves."
stats:
  - 100,000 entities
  - 4–5 months
tags:
  - Unity ECS
media:
  - type: link
    url: https://medium.com/@tasinbaris95_18623/exploring-data-oriented-programming-my-unity-ecs-journey-e78a75e4a544
    label: Read the full guide on Medium
  - type: image
    src: ./images/unity-ecs-fire.webp
    alt: "Unity Editor with the Statistics panel over the game view: turrets on rooftops fire into a horde of zombies, and the panel shows 66.4 FPS at 3840×2160"
    caption: "The horde under fire: 66 FPS in 4K, in the Unity Editor"
  - type: image
    src: ./images/unity-ecs-explosions.webp
    alt: "Unity Editor game view: explosions in a dense horde of zombies next to a turret, with the Statistics panel showing 58.4 FPS at 3840×2160"
    caption: "Explosions in the horde: 58 FPS in 4K"
  - type: video
    src: /videos/unity-ecs-turret.mp4
    poster: /videos/unity-ecs-turret.webp
    title: "A turret's view: hit zombies turn red and fall"
---

Data-oriented programming had always intrigued me for what it can do for optimization. To learn it, I built a game with Unity ECS: Zombie Madness.

I also turned the journey into a guide to the essentials of Unity ECS: how it differs from Unity's GameObjects, how it stores data in chunks and keeps data apart from logic, how SubScenes turn a scene into data that ECS can use, and how systems find the data they need.
