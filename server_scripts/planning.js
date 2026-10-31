ServerEvents.recipes(event => {
    [
        //stuff i need to add eventually
        'immersiveengineering:crafting/cloche',
        //ch4
        'immersiveengineering:squeezer/graphite_dust',
        'mysticalagriculture:soulium_dust_smelted',
        'enderio:alloy_smelting/soularium_ingot',
        'bloodmagic:ritual_stone_master', //probably not
        'bloodmagic:altar/magicianbloodorb',
        'bloodmagic:alchemy_table',
        'matc:crystals/imperium',
        'extendedcrafting:ultimate_table',
        'naturesaura:offering_table',
        'naturesaura:tree_ritual/conversion_catalyst',
        'naturesaura:tree_ritual/crushing_catalyst', // maybe not this idk
        'powah:energizing/spirited_crystal',
        'malum:spirit_infusion/runewood_totem_base',
        'eidolon:research_table', //idk what it does but i don't need it soo
        'ae2:network/blocks/io_condenser',
        'ae2:network/blocks/inscribers',
        'ae2:network/blocks/energy_energy_acceptor',
        'ae2:network/parts/quartz_fiber_part',
        //ch5
        'mythicbotany:central_rune_holder',
        'mythicbotany:rune_holder',
        'botania:alfheim_portal',
        'extendedcrafting:epic_table',
        'extendedcrafting:flux_table',
        'extendedcrafting:flux_crafter',
    ].forEach((recipeID) => event.remove({id: recipeID}));
})

/* 

mods to add:
-rftools
-reactive alchemy - probably chapter 3, looks really interesting

mods of interest:
-magic feather (for later)
-archogenum (in beta now, looks to have a lot of potential)
-force craft (eh just check it out, maybe it's not terrible)
-mystical garden cloches
-biome beans
-enderio: evolution
-forbidden and arcanus

changelog:
chapter 3:
*doubled the rates of ores in the runewood quarry

added mods:
*trash cans
*extreme sound muffler

to do:
-introduction quest page??
-consider adding farmer's delight
-overgrowth seed
-essence right clicking on/off switch
-steel coin recipe
-9x9 table recipe
-quest ideas:
 -blood magic runes
 -malum books
-mods:
 -trash cans

custom items for polish:
-grass block bucket (for earth rune)
-azure leafball (for terrasteel)
-cobalt plates (for witched circuits)

random chapter 3 things:
-add sounds to mob spawner rod
-change frozen redstone texture
-crying lava touching water = crying obsidian?
-finish quest descriptions

random stuff i should do when the whole pack's finished
-crafting table upgrades
-change all botania flower recipes to have ma seeds (+change the apothecary reagent to vanilla seeds)
-cottage cheese bucket
-all mob spawns
-tiered essence mixer multi for alloys (custom machinery or smth)

chapter 4:
-me system
-botania conjuration catalyst (why would i need it though realistically)
-actually additions
-automated mob spawning and woot
-island dimension
-biomancy
-blood altar t4
-nature's aura offering table
-terrain generator (custom 9x9x9 multi)
-gaia boss -> spirited crystals
-mana rune as end goal??

chapter 5:
-hopefully a bunch of custom multis that i can come up with
-nuclear stuff (?)
-alfheim and mythicbotany
-draconic evolution
-void stuff
-avaritia (?)
-end dim (?)

*/