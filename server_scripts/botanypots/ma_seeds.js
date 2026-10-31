//i'm so proud of this
function crop(name,tier) {
    this.name=name
    this.tier=tier
    this.tiername=function(){
        switch(tier) {
            case 1:
                return 'inferium'
            case 2:
                return 'prudentium'
            case 3:
                return 'tertium'
            case 4:
                return 'imperium'
            case 5:
                return 'supremium'
            case 6:
                return 'insanium'
        }
    }
    this.growthticks=function(){
        return 1200+tier*600
    }
}

ServerEvents.highPriorityData(event => {
    const crops = [
        new crop('nature',1),
        new crop('dye',1),
        new crop('coal',1),
        new crop('mystical_flower',1),
        new crop('iron',1),
        new crop('redstone',1),
        new crop('silicon',1),
        new crop('copper',1),
        new crop('gold',2),
        new crop('manasteel',2),
        new crop('steel',2),
        new crop('redstone_alloy',2),
        new crop('copper_alloy',2),
        new crop('tin',2),
        new crop('obsidian',2),
        new crop('glowstone',2),
        new crop('ice',2),
        new crop('dark_steel',3),
        new crop('blaze',3),
        new crop('nickel',3),
        new crop('diamond',3),
        new crop('energized_steel',3),
        new crop('sulfur',3),
        new crop('amethyst',3),
        new crop('electrum',3),
        new crop('energetic_alloy',3),
        new crop('nether_quartz',4),
        new crop('vibrant_alloy',4),
        new crop('niotic_crystal',4)
    ]
    crops.forEach(crop => {
        event.addJson(`botanypots:recipes/mysticalagriculture/crop/${crop.name}`, {
            type:"botanypots:crop",
            seed:{
                item:`mysticalagriculture:${crop.name}_seeds`
            },
            categories:[
                crop.tiername()
            ],
            growthTicks:crop.growthticks(),
            display: {
                type: "botanypots:aging",
                block: `mysticalagriculture:${crop.name}_crop`
            },
            lightLevel:0,
            drops:[
                {
                    chance:1.00,
                    output:{
                        item:`mysticalagriculture:${crop.name}_essence`
                    }
                },
                {
                    chance:0.01,
                    output:{
                        item:`mysticalagriculture:${crop.name}_seeds`
                    }
                },
                {
                    chance:0.01,
                    output:{
                        item:"mysticalagriculture:fertilized_essence"
                    },
                    minRolls:1,
                    maxRolls:1
                }
            ]
        })
    })
})