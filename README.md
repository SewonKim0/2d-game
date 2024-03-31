### Puzzle Game
- Draw Tool: make json unpack system (edit existing maps)
- Draw Tool: make moving block frameCount customizable
- Moving: fix vertical movers going haywire error
- Shoot: use bullet to break block, limited bullets
- Health System: ...
- Turret: if player seen, shoots (depletes health)

### Block Types
Center of map located at [0, 0], where player will spawn
- "pos": [x, y]
- "size": [w, h]
- "type": "normal | end | kill | moving"
- block[type=moving]: "motion": [dx, dy], "frameCount": numFrames