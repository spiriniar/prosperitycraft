ServerEvents.recipes(event => {
    [
        'powah:crafting/dielectric_paste',
        'powah:crafting/dielectric_paste_2',
        'powah:crafting/dielectric_casing',
        'powah:crafting/capacitor_basic',
        'powah:crafting/capacitor_hardened'
    ].forEach((recipeID) => event.remove({id: recipeID}));
    event.shapeless(Item.of('powah:dielectric_paste',32),[
        'minecraft:charcoal',
        'minecraft:charcoal',
        'minecraft:charcoal',
        'minecraft:clay_ball',
        'minecraft:clay_ball',
        'minecraft:lava_bucket'
    ]).replaceIngredient('minecraft:lava_bucket','minecraft:bucket')
    event.shaped('powah:dielectric_casing',[
        'ABA','C C','ABA'
    ],{
        A:'#forge:ingots/steel',
        B:'powah:dielectric_rod_horizontal',
        C:'powah:dielectric_rod'
    })
    event.shaped(Item.of('powah:capacitor_basic_tiny',4),[
        'AAA',' B ','AAA'
    ],{
        A:'powah:dielectric_paste',
        B:'mysticalagriculture:prosperity_ingot'
    })
    event.shaped('powah:capacitor_basic',[
        'ABA','DCD','ABA'
    ],{
        A:'powah:dielectric_paste',
        B:'#forge:ingots/dark_steel',
        C:'minecraft:redstone_block',
        D:'powah:capacitor_basic_tiny'
    })
    event.shaped('powah:capacitor_basic_large',[
        'DBD',
        'ACA',
        'DBD'
    ],{
        A:'powah:capacitor_basic',
        B:'enderio:dark_steel_ingot',
        C:'enderio:redstone_alloy_ingot',
        D:'powah:dielectric_paste'
    })
    event.replaceInput('powah:crafting/energizing_rod_starter','minecraft:quartz','enderio:energy_conduit');
    ['thermo_generator','battery','energy_cell','ender_cell'].forEach(thing => {
        event.replaceInput(`powah:crafting/${thing}_basic`,'#forge:ingots/iron','#forge:storage_blocks/iron')
        event.replaceInput(`powah:crafting/${thing}_hardened`,'powah:steel_energized','powah:energized_steel_block')
        event.replaceInput(`powah:crafting/${thing}_blazing`,'powah:crystal_blazing','powah:blazing_crystal_block')
        event.replaceInput(`powah:crafting/${thing}_niotic`,'powah:crystal_niotic','powah:niotic_crystal_block')
        event.replaceInput(`powah:crafting/${thing}_spirited`,'powah:crystal_spirited','powah:spirited_crystal_block')
        event.replaceInput(`powah:crafting/${thing}_nitro`,'powah:crystal_nitro','powah:nitro_crystal_block')
    })
    let tiers = ['starter','basic','hardened','blazing','niotic','spirited','nitro'];
    let materials = ['minecraft:iron_ingot','powah:steel_energized','powah:crystal_blazing','powah:crystal_niotic','powah:crystal_spirited','powah:crystal_nitro']
    let blocks = ['minecraft:iron_block','powah:energized_steel_block','powah:blazing_crystal_block','powah:niotic_crystal_block','powah:spirited_crystal_block','powah:nitro_crystal_block']
    for(let i = 1; i < 7; i++) {
        event.remove({id: `powah:crafting/furnator_${tiers[i]}`})
        event.shaped(`powah:furnator_${tiers[i]}`,[
            'ABA',
            'CDC',
            'AEA'
        ],{
            A:materials[i-1],
            B:blocks[i-1],
            C:`powah:capacitor_${tiers[i]}`,
            D:'powah:dielectric_casing',
            E:`powah:furnator_${tiers[i-1]}`
        })
        event.remove({id: `powah:crafting/magmator_${tiers[i]}`})
        event.shaped(`powah:magmator_${tiers[i]}`,[
            'ABA',
            'CDC',
            'AEA'
        ],{
            A:materials[i-1],
            B:blocks[i-1],
            C:`powah:capacitor_${tiers[i]}`,
            D:'powah:dielectric_casing',
            E:`powah:magmator_${tiers[i-1]}`
        })
        event.remove({id: `powah:crafting/solar_panel_${tiers[i]}`})
        event.shaped(`powah:solar_panel_${tiers[i]}`,[
            'AEA',
            'CDC',
            'BBB'
        ],{
            A:materials[i-1],
            B:blocks[i-1],
            C:`powah:capacitor_${tiers[i]}`,
            D:'powah:dielectric_casing',
            E:`powah:solar_panel_${tiers[i-1]}`
        })
        event.replaceInput(`powah:crafting/energizing_rod_${tiers[i]}`,'#c:quartz_blocks','minecraft:quartz')
        if(i>1){
            event.remove({id: `powah:crafting/capacitor_${tiers[i]}`})
            event.shaped(`powah:capacitor_${tiers[i]}`,[
                'AAA',
                'BCB',
                'AAA'
            ],{
                A:'powah:dielectric_paste',
                B:materials[i-1],
                C:`powah:capacitor_basic_large`
            }).id(`minecraft:kjs/powah_capacitor_${tiers[i]}`)
        }  
    }
    event.replaceInput('powah:crafting/thermoelectric_plate','powah:capacitor_basic_tiny','powah:capacitor_blazing')
})