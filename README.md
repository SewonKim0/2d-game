### Puzzle Game
- Shoot: create remaining bullets indicator
- Breakable Block: create new breakable block type
    break during render() in response to shootObj.shoot?
- Dash System: dash in mouse direction via shift
- Health System: ...
- Turret: if player seen, shoots (depletes health)

### Block Types
Center of map located at [0, 0], where player will spawn
- "pos": [x, y]
- "size": [w, h]
- "type": "normal | end | kill | moving"
- block[type=moving]: "motion": [dx, dy], "frameCount": numFrames