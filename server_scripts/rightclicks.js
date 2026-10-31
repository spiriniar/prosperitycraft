BlockEvents.rightClicked('minecraft:grass_block', event => {
    let drops = [
        'mysticalagriculture:air_essence',
        'mysticalagriculture:fire_essence',
        'mysticalagriculture:earth_essence',
        'mysticalagriculture:water_essence'
    ];
    if (event.player.level.dimension === "minecraft:overworld"&&(event.player.mainHandItem.id === "minecraft:air" || drops.includes(event.player.mainHandItem.id))) {
        (event.block.level.getBlock(event.block.pos.above())).popItem(drops[Math.floor(Math.random() * 4)]);
        event.cancel();
    }
});
BlockEvents.rightClicked('minecraft:netherrack', event => {
    let drops = [
        'mysticalagriculture:nether_essence',
        'mysticalagriculture:obsidian_essence',
        'mysticalagriculture:gold_essence',
        'mysticalagriculture:sulfur_essence',
        'mysticalagriculture:glowstone_essence',
        'mysticalagriculture:blaze_essence'
    ];
    if (event.player.level.dimension === "minecraft:the_nether"&&(event.player.mainHandItem.id === 'minecraft:air' || drops.includes(event.player.mainHandItem.id))) {
        let n = Math.floor(Math.random()*128);
        if (n > 126) (event.block.level.getBlock(event.block.pos.above())).popItem(drops[5]);
        else if (n > 119) (event.block.level.getBlock(event.block.pos.above())).popItem(drops[4]);
        else if (n > 112) (event.block.level.getBlock(event.block.pos.above())).popItem(drops[3]);
        else if (n > 104) (event.block.level.getBlock(event.block.pos.above())).popItem(drops[2]);
        else if (n > 86) (event.block.level.getBlock(event.block.pos.above())).popItem(drops[1]);
        else (event.block.level.getBlock(event.block.pos.above())).popItem(drops[0]);
        event.cancel();
    }
});
BlockEvents.rightClicked('botania:apothecary_default', event => {
    if (event.item.id === 'mysticalagriculture:water_essence'){
        event.block.set(event.block.id,{fluid:"water"});
        event.player.mainHandItem.count--;
        event.server.runCommandSilent(`playsound minecraft:item.bucket.empty block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
    }
});
BlockEvents.rightClicked('minecraft:dandelion', event =>{
    if (event.item.id === 'minecraft:bone_meal'){
        event.player.mainHandItem.count--;
        if (Math.random()*4<1) event.block.popItem('minecraft:dandelion');
        event.level.spawnParticles('minecraft:happy_villager',false,event.block.pos.x+0.5,event.block.pos.y+0.2,event.block.pos.z+0.5,0.3,0.3,0.3,10,0.1);
    }
})
BlockEvents.rightClicked('minecraft:poppy', event =>{
    if (event.item.id === 'minecraft:bone_meal'){
        event.player.mainHandItem.count--;
        if (Math.random()*4<1) event.block.popItem('minecraft:poppy');
        event.level.spawnParticles('minecraft:happy_villager',false,event.block.pos.x+0.5,event.block.pos.y+0.2,event.block.pos.z+0.5,0.3,0.3,0.3,10,0.1);
    }
})
BlockEvents.rightClicked('minecraft:cornflower', event =>{
    if (event.item.id === 'minecraft:bone_meal'){
        event.player.mainHandItem.count--;
        if (Math.random()*4<1) event.block.popItem('minecraft:cornflower');
        event.level.spawnParticles('minecraft:happy_villager',false,event.block.pos.x+0.5,event.block.pos.y+0.2,event.block.pos.z+0.5,0.3,0.3,0.3,10,0.1);
    }
})
BlockEvents.rightClicked('minecraft:azure_bluet', event =>{
    if (event.item.id === 'minecraft:bone_meal'){
        event.player.mainHandItem.count--;
        if (Math.random()*4<1) event.block.popItem('minecraft:azure_bluet');
        event.level.spawnParticles('minecraft:happy_villager',false,event.block.pos.x+0.5,event.block.pos.y+0.2,event.block.pos.z+0.5,0.3,0.3,0.3,10,0.1);
    }
})
BlockEvents.rightClicked('minecraft:oxeye_daisy', event =>{
    if (event.item.id === 'minecraft:bone_meal'){
        event.player.mainHandItem.count--;
        if (Math.random()*4<1) event.block.popItem('minecraft:oxeye_daisy');
        event.level.spawnParticles('minecraft:happy_villager',false,event.block.pos.x+0.5,event.block.pos.y+0.2,event.block.pos.z+0.5,0.3,0.3,0.3,10,0.1);
    }
})