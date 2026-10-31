ServerEvents.recipes(event => {
    [
        'botanypots:botanypots/crafting/terracotta_botany_pot',
        'botanypots:botanypots/crafting/terracotta_compact_hopper_botany_pot'
    ].forEach((recipeID) => event.remove({id: recipeID}));
    event.shaped('botanypots:terracotta_botany_pot',[
        'A A',
        'ABA',
        'CAC'
    ],{
        A:'minecraft:terracotta',
        B:'minecraft:flower_pot',
        C:'enderio:nethercotta'
    })
    event.shaped('botanypots:terracotta_hopper_botany_pot',[
        'A A',
        'ABA',
        'CDC'
    ],{
        A:'minecraft:terracotta',
        B:'minecraft:flower_pot',
        C:'enderio:nethercotta',
        D:'minecraft:hopper'
    })
    Color.DYE.forEach(colour => {
        [
            'terracotta',
            'glazed_terracotta',
            'concrete',
            'terracotta_compact_hopper',
            'glazed_terracotta_compact_hopper',
            'concrete_compact_hopper'
        ].forEach((potType) => event.remove({id: `botanypots:botanypots/crafting/${colour}_${potType}_botany_pot`}));
    });
    ['elite','ultra','creative'].forEach(tier => {
        Color.DYE.forEach(colour => {
            [
                'terracotta',
                'glazed_terracotta',
                'concrete'
            ].forEach((potType) => {event.remove({id: `botanypotstiers:crafting/${tier}_${colour}_${potType}_botany_pot`})
                                    event.remove({id: `botanypotstiers:crafting/${tier}_${colour}_${potType}_botany_pot_2`})});

            [
                'terracotta_compact_hopper',
                'glazed_terracotta_compact_hopper',
                'concrete_compact_hopper'
            ].forEach((potType) => {event.remove({id: `botanypotstiers:crafting/${tier}_${colour}_${potType}_botany_pot`})
                                    event.remove({id: `botanypotstiers:crafting/${tier}_${colour}_${potType}_botany_pot_2`})
                                    event.remove({id: `botanypotstiers:crafting/${tier}_${colour}_${potType}_botany_pot_3`})});
        })
    })

    event.replaceInput({mod:'botanypotstiers'},'minecraft:ender_pearl','extendedcrafting:ender_ingot')
})