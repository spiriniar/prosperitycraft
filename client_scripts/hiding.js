JEIEvents.hideItems(event => {
    event.hide('thermal:steel_ingot')
    event.hide('thermal:steel_nugget')
    event.hide('thermal:steel_block')
    event.hide('thermal:steel_dust')
    event.hide('thermal:steel_plate')

    event.hide('thermal:dynamo_stirling')
    event.hide('thermal:dynamo_compression')
    event.hide('thermal:dynamo_magmatic')
    event.hide('thermal:dynamo_numismatic')
    event.hide('thermal:dynamo_lapidary')
    event.hide('thermal:dynamo_disenchantment')
    event.hide('thermal:dynamo_gourmand')

    event.hide('simplest_hammers:wooden_hammer')
    event.hide('simplest_hammers:stone_hammer')
    event.hide('simplest_hammers:iron_hammer')
    event.hide('simplest_hammers:golden_hammer')

    event.hide('enderio:crafter')
    event.hide('immersiveengineering:alloy_smelter')
    event.hide('immersiveengineering:alloybrick')
    event.hide('immersiveengineering:slab_alloybrick')

    event.hide('enderio:powdered_ender_pearl')

    Color.DYE.forEach(colour => {
        [
            'terracotta',
            'glazed_terracotta',
            'concrete',
            'terracotta_hopper',
            'glazed_terracotta_hopper',
            'concrete_hopper'
        ].forEach((potType) => event.hide(`botanypots:${colour}_${potType}_botany_pot`));
    });
    ['elite','ultra','creative'].forEach(tier =>
        Color.DYE.forEach(colour => {
            [
                'terracotta',
                'glazed_terracotta',
                'concrete',
                'terracotta_hopper',
                'glazed_terracotta_hopper',
                'concrete_hopper'
            ].forEach((potType) => event.hide(`botanypotstiers:${tier}_${colour}_${potType}_botany_pot`));
        })
    )
})