player.onItemInteracted(MUSHROOM_STEW, function () {
    mobs.applyEffect(SPEED, mobs.target(LOCAL_PLAYER), 600, 255)
    mobs.applyEffect(NIGHT_VISION, mobs.target(LOCAL_PLAYER), 600, 255)
    mobs.applyEffect(LEVITATION, mobs.target(ALL_ENTITIES), 2, 1)
    mobs.applyEffect(JUMP_BOOST, mobs.target(LOCAL_PLAYER), 600, 255)
    mobs.applyEffect(HASTE, mobs.target(NEAREST_PLAYER), 600, 255)
    mobs.applyEffect(STRENGTH, mobs.target(NEAREST_PLAYER), 600, 255)
    blocks.fill(
    FIRE,
    pos(-5, 0, -5),
    pos(5, 0, 5),
    FillOperation.Replace
    )
})
