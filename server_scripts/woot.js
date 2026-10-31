ServerEvents.recipes(event =>{
	//todo: remove all unwanted
	[
        'factory_base',
		'copper_pylon',
		'copper_plinth',
		'stygian_dust'
    ].forEach(recipe => event.remove({id:`woot_revived:${recipe}`}))
	
	event.shaped('4x woot_revived:factory_base',[
        'IPI','PEP','IPI'
    ],{
        I:'woot_revived:stygian_ingot',
        P:'woot_revived:stygian_plate',
        E:'mysticalagriculture:imperium_essence'
    })
	
	event.shaped('16x woot_revived:stygian_dust',[
        'CSC','SIS','CSC'
    ],{
        S:'minecraft:soul_soil',
        C:'minecraft:fire_charge',
        I:'malum:soul_stained_steel_ingot'
    })
	
	event.custom({
        type:"extendedcrafting:shaped_table",
        pattern:[
            "IICCCII",
			"ICCPCCI",
			"CCSNSCC",
			"CPNBNPC",
			"CCSNSCC",
			"ICCPCCI",
			"IICCCII"
        ],
        key:{
			B:"woot_revived:factory_base",
			C:"mysticalagriculture:copper_essence",
			I:"woot_revived:stygian_ingot",
			N:"botania:terrasteel_nugget",
			P:"thermal:copper_plate",
			S:"woot_revived:copper_shard",
        },
        result:{
            item:"woot_revived:copper_pylon",
			count: 8
        }
    })
	
	event.custom({
        type:"extendedcrafting:shaped_table",
        pattern:[
            "IICCCII",
			"ICCSCCI",
			"CCPNPCC",
			"CSNBNSC",
			"CCPNPCC",
			"ICCSCCI",
			"IICCCII"
        ],
        key:{
			B:"woot_revived:factory_base",
			C:"mysticalagriculture:copper_essence",
			I:"woot_revived:stygian_ingot",
			N:"botania:terrasteel_nugget",
			P:"thermal:copper_plate",
			S:"woot_revived:copper_shard",
        },
        result:{
            item:"woot_revived:copper_plinth",
			count: 8
        }
    })
	
})