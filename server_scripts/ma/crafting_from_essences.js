ServerEvents.recipes(event => {
    [
        'mysticalagriculture:essence/minecraft/dirt',
        'mysticalagriculture:essence/minecraft/grass_block',
        'mysticalagriculture:essense/minecraft/soul_sand'
    ].forEach((recipeID) => event.remove({id: recipeID}));
    event.shaped(Item.of('minecraft:wheat_seeds',4),[
        'A','B'
    ],{
        A:'mysticalagriculture:water_essence',
        B:'mysticalagriculture:nature_essence'
    })
    event.shaped(Item.of('immersiveengineering:seed',3),[
        ' A ','A  ','  A'
    ],{
        A:'mysticalagriculture:nature_essence'
    })
    event.shaped(Item.of('minecraft:grass',3),[
        'A','A'
    ],{
        A:'mysticalagriculture:nature_essence'
    })
    event.shaped(Item.of('minecraft:tall_grass',3),[
        ' A ',' A ','  A'
    ],{
        A:'mysticalagriculture:nature_essence'
    }).noMirror().noShrink()
    event.shaped(Item.of('minecraft:dirt',12),[
        'AA',
        'AA'
    ],{
        A:'mysticalagriculture:dirt_essence'
    })
    event.shaped('minecraft:oak_planks',[
        'AA',
        'AA'
    ],{
        A:'mysticalagriculture:wood_essence'
    })
    event.shaped(Item.of('minecraft:magma_block',3),[
        'AAA','ABA','AAA'
    ],{
        A:'mysticalagriculture:nether_essence',
        B:'mysticalagriculture:blaze_essence'
    })
    event.shaped(Item.of('minecraft:moss_block',12),[
        ' A ','ABA',' A '
    ],{
        A:'mysticalagriculture:nature_essence',
        B:'mysticalagriculture:air_essence'
    })
})