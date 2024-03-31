### Puzzle Game
- Modal: create modal function
- 2 levels
- Moving Block: motion=[x, y]
    deletion of motion block: deletes the alternate as well
- Shoot: use bullet to break block, limited bullets
- Health System: ...
- Turret: if player seen, shoots (depletes health)

### Block Types
Center of map located at [0, 0], where player will spawn
- "pos": [x, y]
- "size": [w, h]
- "type": "normal | end | kill | moving"
- block[type=moving]: "motion": [dx, dy], "frameCount": numFrames