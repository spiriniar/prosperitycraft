ServerEvents.recipes(event =>{
    [
        'fire_charge/signalum_glass_2',
        'fire_charge/electrum_ingot_2',
        'fire_charge/constantan_ingot_2',
        'fire_charge/bronze_ingot_4',
        'fire_charge/enderium_glass_2',
        'fire_charge/signalum_ingot_4',
        'fire_charge/obsidian_glass_2',
        'fire_charge/lumium_glass_2',
        'fire_charge/invar_ingot_3',
        'fire_charge/lumium_ingot_4',
        'fire_charge/enderium_ingot_2',
        'earth_charge/prismarine_shard_from_prismarine_bricks',
        'earth_charge/prismarine_shard_from_prismarine',
        'earth_charge/emerald_dust_from_emerald',
        'earth_charge/cinnabar_dust_from_cinnabar',
        'earth_charge/quartz_from_quartz_block',
        'earth_charge/niter_dust_from_niter',
        'earth_charge/lapis_dust_from_lapis',
        'earth_charge/ender_pearl_dust_from_ender_pearl',
        'earth_charge/sulfur_dust_from_sulfur',
        'earth_charge/apatite_dust_from_apatite',
        'earth_charge/quartz_dust_from_quartz',
        'earth_charge/diamond_dust_from_diamond',
        'ice_charge/ice_from_water_bucket',
        'signalum_dust_4',
        'lumium_dust_4',
        'enderium_dust_2',
        'bronze_dust_4',
        'electrum_dust_2',
        'invar_dust_3',
        'constantan_dust_2',
        'machine_sawmill',
        'machine_pulverizer',
        'machine_smelter',
        'machine_insolator',
        'machine_centrifuge',
        'machine_press',
        'machine_crucible',
        'machine_chiller',
        'machine_refinery',
        'machine_pyrolyzer',
        'machine_bottler',
        'machine_brewer',
        'machine_crafter',
        'machine_crystallizer',
        'device_water_gen',
        'device_tree_extractor',
        'drill_head',
        'machines/smelter/smelter_glass_obsidian',
        'machines/smelter/smelter_alloy_rose_gold',
        'machines/smelter/smelter_alloy_signalum',
        'machines/smelter/smelter_alloy_lumium',
        'machines/smelter/smelter_alloy_enderium',
        'machines/smelter/smelter_alloy_bronze',
        'machines/smelter/smelter_alloy_electrum',
        'machines/smelter/smelter_alloy_invar',
        'machines/smelter/smelter_alloy_constantan',
        'dynamo_stirling',
        'dynamo_compression',
        'dynamo_magmatic',
        'dynamo_numismatic',
        'dynamo_lapidary',
        'dynamo_disenchantment',
        'dynamo_gourmand',
        'storage/slag_block',
        'storage/rich_slag_block'
    ].forEach(recipe => event.remove({id:`thermal:${recipe}`}))
    event.custom({
        type: "thermal:smelter",
        ingredients:[
            {
                tag:"forge:ingots/copper",
                count:2
            },
            {
                tag:"forge:ingots/gold",
                count:4
            },
            {
                tag:"forge:ingots/electrum"
            }
        ],
        result:[
            {
                item:"thermal:rose_gold_ingot",
                count:7
            }
        ],
        energy:11200
    })
    event.custom({
        type: "thermal:smelter",
        ingredients:[
            {
                tag:"forge:ingots/copper",
                count:3
            },
            {
                tag:"forge:ingots/silver"
            },
            {
                item:"minecraft:redstone",
                count:4
            }
        ],
        result:[
            {
                item:"thermal:signalum_ingot",
                count:4
            }
        ],
        energy:12000
    })
    event.custom({
        type: "thermal:smelter",
        ingredients:[
            {
                tag:"forge:ingots/tin",
                count:3
            },
            {
                tag:"forge:ingots/silver"
            },
            {
                item:"minecraft:glowstone_dust",
                count:2
            }
        ],
        result:[
            {
                item:"thermal:lumium_ingot",
                count:4
            }
        ],
        energy:10000
    })
    event.custom({
        type: "thermal:smelter",
        ingredients:[
            {
                tag:"forge:ingots/lead",
                count:2
            },
            {
                tag:"forge:dusts/diamond"
            },
            {
                item:"extendedcrafting:ender_ingot"
            }
        ],
        result:[
            {
                item:"thermal:enderium_ingot",
                count:2
            }
        ],
        energy:16000
    })
    event.custom({
        type: "thermal:smelter",
        ingredients:[
            {
                tag:"forge:ingots/copper",
                count:3
            },
            {
                tag:"forge:ingots/tin"
            }
        ],
        result:[
            {
                item:"thermal:bronze_ingot",
                count:4
            }
        ],
        energy:6400
    })
    event.custom({
        type: "thermal:smelter",
        ingredients:[
            {
                tag:"forge:ingots/gold"
            },
            {
                tag:"forge:ingots/silver"
            }
        ],
        result:[
            {
                item:"thermal:electrum_ingot",
                count:2
            }
        ],
        energy:3200
    })
    event.custom({
        type: "thermal:smelter",
        ingredients:[
            {
                tag:"forge:ingots/nickel"
            },
            {
                tag:"forge:ingots/iron",
                count:2
            }
        ],
        result:[
            {
                item:"thermal:invar_ingot",
                count:3
            }
        ],
        energy:4800
    })
    event.custom({
        type: "thermal:smelter",
        ingredients:[
            {
                tag:"forge:ingots/nickel"
            },
            {
                tag:"forge:ingots/copper"
            }
        ],
        result:[
            {
                item:"thermal:constantan_ingot",
                count:2
            }
        ],
        energy:3200
    })
    event.shaped('thermal:device_water_gen',[
        'AEA','BCB','ADA'
    ],{
        A:'#forge:ingots/lead',
        B:'#c:glass_blocks',
        C:'thermal:machine_frame',
        D:'thermal:redstone_servo',
        E:'minecraft:bucket'
    })
    event.replaceInput('thermal:device_rock_gen','minecraft:piston','thermal:machine_frame')
    event.shaped('thermal:device_tree_extractor',[
        'ABA',
        'CDC',
        'AEA'
    ],{
        A:'botania:livingwood_planks',
        B:'#forge:gears/invar',
        C:'#forge:glass',
        D:'thermal:machine_frame',
        E:'thermal:redstone_servo'
    })
    event.replaceInput('thermal:machine_furnace','thermal:machine_frame','minecraft:blast_furnace')
    event.replaceInput('thermal:machine_furnace','thermal:copper_gear','#forge:gears/iron')
    event.shaped('thermal:machine_smelter',[
        ' A ','BCB','DED'
    ],{
        A:'thermal:machine_furnace',
        B:'#forge:ingots/electrum',
        C:'thermal:machine_frame',
        D:'#forge:gears/tin',
        E:'kubejs:machine_components'
    })
    event.shaped('thermal:machine_centrifuge',[
        ' A ','BCB','DED'
    ],{
        A:'minecraft:compass',
        B:'#forge:ingots/silver',
        C:'thermal:machine_frame',
        D:'enderio:energized_gear',
        E:'kubejs:machine_components'
    })
    event.shaped('thermal:drill_head',[
        ' A ','ABA','ACA'
    ],{
        A:'#forge:ingots/iron',
        B:'#forge:gears/copper',
        C:'#forge:storage_blocks/steel'
    })
    event.shaped('thermal:machine_pulverizer',[
        ' A ','BCB','DED'
    ],{
        A:'thermal:drill_head',
        B:'minecraft:flint',
        C:'thermal:machine_frame',
        D:'#forge:gears/rose_gold',
        E:'kubejs:machine_components'
    })
    event.custom({
        type: "thermal:smelter",
        ingredients:[
            {
                item:"minecraft:obsidian"
            },
            {
                item:"ae2:quartz_glass",
                count:3
            }
        ],
        result:[
            {
                item:"thermal:obsidian_glass",
                count:3
            }
        ],
        energy:4800
    })
    event.shaped('thermal:machine_crystallizer',[
        ' A ','BCB','DED'
    ],{
        A:'thermal:lumium_glass',
        B:'#forge:ingots/lead',
        C:'thermal:machine_frame',
        D:'#forge:gears/signalum',
        E:'kubejs:machine_components'
    })
    event.shaped('thermal:machine_press',[
        ' A ','BCB','DED'
    ],{
        A:'minecraft:piston',
        B:'#forge:plates/invar',
        C:'thermal:machine_frame',
        D:'#forge:gears/constantan',
        E:'kubejs:machine_components'
    })
    event.shaped('thermal:machine_bottler',[
        ' A ','BCB','DED'
    ],{
        A:'minecraft:glass_bottle',
        B:'immersiveengineering:component_electronic_adv',
        C:'thermal:machine_frame',
        D:'#forge:gears/quartz',
        E:'kubejs:machine_components'
    })
    event.shaped('thermal:machine_refinery',[
        ' A ','BCB','DED'
    ],{
        A:'thermal:fluid_reservoir',
        B:'immersiveengineering:component_electronic_adv',
        C:'thermal:machine_frame',
        D:'#forge:gears/electrum',
        E:'kubejs:machine_components'
    })
    event.shaped('thermal:steel_gear',[
        ' A ','ABA',' A '
    ],{
        A:'#forge:ingots/steel',
        B:'minecraft:iron_nugget'
    })
    event.shaped('thermal:machine_chiller',[
        ' A ','BCB','DED'
    ],{
        A:'minecraft:water_bucket',
        B:'immersiveengineering:component_electronic_adv',
        C:'thermal:machine_frame',
        D:'#forge:gears/steel',
        E:'kubejs:machine_components'
    })
    event.shaped('thermal:machine_pyrolyzer',[
        ' A ','BCB','DED'
    ],{
        A:'minecraft:blaze_rod',
        B:'immersiveengineering:component_electronic_adv',
        C:'thermal:machine_frame',
        D:'#forge:gears/lapis',
        E:'kubejs:machine_components'
    })
    event.shaped('thermal:machine_crafter',[
        ' A ','BCB','DED'
    ],{
        A:'craftingstation:crafting_station',
        B:'immersiveengineering:component_electronic_adv',
        C:'thermal:machine_frame',
        D:'#forge:gears/diamond',
        E:'kubejs:machine_components'
    })
    event.replaceInput('thermal:augments/machine_speed_augment','thermal:lead_gear','#forge:gears/steel')
    event.replaceInput('thermal:saw_blade','minecraft:copper_ingot','mysticalagriculture:tertium_ingot')
    event.shaped('thermal:machine_sawmill',[
        ' A ','BCB','DED'
    ],{
        A:'thermal:saw_blade',
        B:'immersiveengineering:component_electronic_adv',
        C:'thermal:machine_frame',
        D:'#forge:gears/gold',
        E:'kubejs:machine_components'
    })
    event.shaped('thermal:machine_crucible',[
        ' A ','BCB','DED'
    ],{
        A:'minecraft:magma_block',
        B:'kubejs:witched_circuit',
        C:'thermal:machine_frame',
        D:'#forge:gears/nickel',
        E:'kubejs:machine_components'
    })
    event.shaped('thermal:machine_brewer',[
        ' A ','BCB','DED'
    ],{
        A:'minecraft:brewing_stand',
        B:'kubejs:witched_circuit',
        C:'thermal:machine_frame',
        D:'#forge:gears/enderium',
        E:'kubejs:machine_components'
    })
	event.custom({
		type: "thermal:press",
		ingredients: [
			{
			  tag: "forge:ingots/steel"
			},
			{
			  item: "thermal:press_coin_die"
			}
		],
		result: [
			{
			  item: "thermal:steel_coin",
			  count: 3
			}
		],
		energy: 2400,
		conditions: [
		{
			flag: "steel",
			type: "thermal:flag"
		}
		]
	})
	event.custom({
		type: "thermal:press",
		ingredients: [
			{
			  tag: "forge:nuggets/steel",
			  count: 3
			},
			{
			  item: "thermal:press_coin_die"
			}
		],
		result: [
			{
			  item: "thermal:steel_coin",
			  count: 1
			}
		],
		energy: 800,
		conditions: [
		{
			flag: "steel",
			type: "thermal:flag"
		}
		]
	})
})