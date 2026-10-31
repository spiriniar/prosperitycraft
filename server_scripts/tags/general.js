ServerEvents.tags('item', event => {
    event.remove('forge:rods/wooden','immersiveengineering:stick_treated')

    event.add('bloodmagic:blood_orbs_weak',"bloodmagic:weakbloodorb")
    event.add('bloodmagic:blood_orbs_weak',"bloodmagic:apprenticebloodorb")
    event.add('bloodmagic:blood_orbs_weak',"bloodmagic:magicianbloodorb")
    event.add('bloodmagic:blood_orbs_weak',"bloodmagic:masterbloodorb")
    event.add('bloodmagic:blood_orbs_weak',"bloodmagic:archmagebloodorb")
    
    event.add('bloodmagic:blood_orbs_apprentice',"bloodmagic:apprenticebloodorb")
    event.add('bloodmagic:blood_orbs_apprentice',"bloodmagic:magicianbloodorb")
    event.add('bloodmagic:blood_orbs_apprentice',"bloodmagic:masterbloodorb")
    event.add('bloodmagic:blood_orbs_apprentice',"bloodmagic:archmagebloodorb")
    
    event.add('bloodmagic:blood_orbs_magician',"bloodmagic:magicianbloodorb")
    event.add('bloodmagic:blood_orbs_magician',"bloodmagic:masterbloodorb")
    event.add('bloodmagic:blood_orbs_magician',"bloodmagic:archmagebloodorb")
    
    event.add('bloodmagic:blood_orbs_master',"bloodmagic:masterbloodorb")
    event.add('bloodmagic:blood_orbs_master',"bloodmagic:archmagebloodorb")

    event.remove('forge:gears/iron',"enderio:iron_gear")
    event.remove('forge:slimeballs',"malum:runic_sapball")
    event.remove('forge:slimeballs',"malum:cursed_sapball")
    event.add('forge:rubber','thermal:cured_rubber')
    event.remove('forge:gems/quartz','malum:natural_quartz')

    event.removeAllTagsFrom('enderio:powdered_ender_pearl')
    event.remove('forge:dusts/sulfur',"eidolon:sulfur")

    event.remove('forge:ingots/steel',"thermal:steel_ingot")
    event.remove('forge:nuggets/steel',"thermal:steel_nugget")
    event.remove('forge:blocks/steel',"thermal:steel_block")
    event.remove('forge:dusts/steel',"thermal:steel_dust")
    event.remove('forge:plates/steel',"thermal:steel_plate")
})