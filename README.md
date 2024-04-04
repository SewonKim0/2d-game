### Puzzle Game
- Shoot: use bullet to break block, limited bullets
- Breakable Block: create new breakable block type
- Dash System: dash in mouse direction via shift
- Health System: ...
- Turret: if player seen, shoots (depletes health)

### Block Types
Center of map located at [0, 0], where player will spawn
- "pos": [x, y]
- "size": [w, h]
- "type": "normal | end | kill | moving"
- block[type=moving]: "motion": [dx, dy], "frameCount": numFrames