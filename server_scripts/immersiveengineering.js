ServerEvents.recipes(event => {
    [
        'crafting/electrum_mix',
        'crafting/constantan_mix',
        'crafting/blueprint_molds',
        'blueprint/component_iron',
        'blueprint/component_steel',
        'crafting/alloybrick',
        'alloysmelter/insulating_glass',
        'alloysmelter/rose_gold',
        'alloysmelter/invar',
        'alloysmelter/constantan',
        'alloysmelter/electrum',
        'alloysmelter/bronze'
    ].forEach(recipe => event.remove({id:`immersiveengineering:${recipe}`}));
    ['copper','aluminum','lead','silver','nickel','uranium','constantan','electrum','steel','iron','gold'].forEach(ingot => {
        event.remove({id: `immersiveengineering:crafting/plate_${ingot}_hammering`})
        event.remove({id: `immersiveengineering:crafting/sheetmetal_${ingot}`})
        event.custom({
            type:"immersiveengineering:metal_press",
            energy:5000,
            input:
            { 
                count:9,
                base_ingredient:{
                    tag:`forge:plates/${ingot}`
                }
            },
            mold:"immersiveengineering:mold_packing_9",
            result:
            { 
                item:`immersiveengineering:sheetmetal_${ingot}`,
                count:4
            }
        })
        event.remove({id:`immersiveengineering:metalpress/plate_${ingot}`})
        event.custom({
            type:"immersiveengineering:metal_press",
            energy:2000,
            input:
            { 
                count:2,
                base_ingredient:{
                    tag:`forge:ingots/${ingot}`
                }
            },
            mold:"immersiveengineering:mold_plate",
            result:
            { 
                item:`immersiveengineering:plate_${ingot}`
            }
        })
    });
    ['copper','electrum','aluminum','steel','lead'].forEach(ingot => {
        event.shapeless(`immersiveengineering:wire_${ingot}`,[
            `#forge:ingots/${ingot}`,
            `#forge:ingots/${ingot}`,
            'immersiveengineering:hammer',
            'immersiveengineering:wirecutter'
        ])
    })
    event.shaped(Item.of('immersiveengineering:blueprint', '{blueprint:"molds"}'),[
        ' A ','BBB','CCC'
    ],{
        A:'immersiveengineering:hammer',
        B:'minecraft:blue_dye',
        C:'minecraft:paper'
    }).damageIngredient('immersiveengineering:hammer',100);
    ['plate','gear','rod','bullet_casing','wire','packing_4','packing_9','unpacking'].forEach(mold => {
        event.remove({id: `immersiveengineering:blueprint/mold_${mold}`})
        event.custom({
            type:"immersiveengineering:blueprint",
            inputs:[
                {
                    count:3,
                    base_ingredient:{
                        tag:"forge:ingots/steel"
                    }
                },
                {
                    item:"immersiveengineering:wirecutter"
                }
            ],
            category:"molds",
            result: {
                item:`immersiveengineering:mold_${mold}`
            }
        })
    })
})