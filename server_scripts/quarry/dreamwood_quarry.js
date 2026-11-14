BlockEvents.rightClicked('kubejs:dreamwood_quarry',event => {
    function blockIDAt(x,y,z) {return event.block.level.getBlock(x,y,z).id};
    function theThing() {event.server.runCommandSilent(`execute in ${event.block.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run title @a[distance=..7] actionbar {"text":"Multiblock not formed","color":"white"}`)}
    function setOre(x,y,z) {
        let n = Math.floor(Math.random()*16);
        if(n<=1) event.block.level.getBlock(x,y,z).set('mythicbotany:gold_ore');
        else if(n==2) event.block.level.getBlock(x,y,z).set('mythicbotany:dragonstone_ore');
        else if(n==3) event.block.level.getBlock(x,y,z).set('mythicbotany:elementium_ore');
        else event.block.level.getBlock(x,y,z).set('botania:livingrock');
    }

    if(event.item.id==='kubejs:alf_quarry_putty'){
        let x=event.block.x;
        let y=event.block.y;
        let z=event.block.z;
        if(blockIDAt(x,y,z+1) != 'botania:dreamwood_planks') theThing()
        else if(blockIDAt(x,y,z-1) != 'botania:dreamwood_planks') theThing()
        else if(blockIDAt(x+1,y,z) != 'botania:dreamwood_planks') theThing()
        else if(blockIDAt(x-1,y,z) != 'botania:dreamwood_planks') theThing()
        else if(blockIDAt(x+1,y,z+1) != 'botania:dreamwood_planks') theThing()
        else if(blockIDAt(x+1,y,z-1) != 'botania:dreamwood_planks') theThing()
        else if(blockIDAt(x-1,y,z+1) != 'botania:dreamwood_planks') theThing()
        else if(blockIDAt(x-1,y,z-1) != 'botania:dreamwood_planks') theThing()
        
        else if(blockIDAt(x,y,z+2) != 'botania:pattern_framed_dreamwood') theThing()
        else if(blockIDAt(x,y,z-2) != 'botania:pattern_framed_dreamwood') theThing()
        else if(blockIDAt(x+2,y,z) != 'botania:pattern_framed_dreamwood') theThing()
        else if(blockIDAt(x-2,y,z) != 'botania:pattern_framed_dreamwood') theThing()

        else if(blockIDAt(x+2,y,z+1) != 'botania:framed_dreamwood') theThing()
        else if(blockIDAt(x+2,y,z-1) != 'botania:framed_dreamwood') theThing()
        else if(blockIDAt(x-2,y,z+1) != 'botania:framed_dreamwood') theThing()
        else if(blockIDAt(x-2,y,z-1) != 'botania:framed_dreamwood') theThing()
        else if(blockIDAt(x+1,y,z+2) != 'botania:framed_dreamwood') theThing()
        else if(blockIDAt(x+1,y,z-2) != 'botania:framed_dreamwood') theThing()
        else if(blockIDAt(x-1,y,z+2) != 'botania:framed_dreamwood') theThing()
        else if(blockIDAt(x-1,y,z-2) != 'botania:framed_dreamwood') theThing()
        
        else if(blockIDAt(x+2,y,z+2) != 'botania:dreamwood_log') theThing()
        else if(blockIDAt(x+2,y,z-2) != 'botania:dreamwood_log') theThing()
        else if(blockIDAt(x-2,y,z+2) != 'botania:dreamwood_log') theThing()
        else if(blockIDAt(x-2,y,z-2) != 'botania:dreamwood_log') theThing()
    
        else if(blockIDAt(x,y,z+3) != 'botania:dreamwood_planks_stairs') theThing()
        else if(blockIDAt(x,y,z-3) != 'botania:dreamwood_planks_stairs') theThing()
        else if(blockIDAt(x+3,y,z) != 'botania:dreamwood_planks_stairs') theThing()
        else if(blockIDAt(x-3,y,z) != 'botania:dreamwood_planks_stairs') theThing()
        else if(blockIDAt(x+3,y,z+1) != 'botania:dreamwood_planks_stairs') theThing()
        else if(blockIDAt(x+3,y,z-1) != 'botania:dreamwood_planks_stairs') theThing()
        else if(blockIDAt(x-3,y,z+1) != 'botania:dreamwood_planks_stairs') theThing()
        else if(blockIDAt(x-3,y,z-1) != 'botania:dreamwood_planks_stairs') theThing()
        else if(blockIDAt(x+1,y,z+3) != 'botania:dreamwood_planks_stairs') theThing()
        else if(blockIDAt(x+1,y,z-3) != 'botania:dreamwood_planks_stairs') theThing()
        else if(blockIDAt(x-1,y,z+3) != 'botania:dreamwood_planks_stairs') theThing()
        else if(blockIDAt(x-1,y,z-3) != 'botania:dreamwood_planks_stairs') theThing()
    
        else if(blockIDAt(x+3,y,z+2) != 'botania:dreamwood_slab') theThing()
        else if(blockIDAt(x+3,y,z-2) != 'botania:dreamwood_slab') theThing()
        else if(blockIDAt(x-3,y,z+2) != 'botania:dreamwood_slab') theThing()
        else if(blockIDAt(x-3,y,z-2) != 'botania:dreamwood_slab') theThing()
        else if(blockIDAt(x+2,y,z+3) != 'botania:dreamwood_slab') theThing()
        else if(blockIDAt(x+2,y,z-3) != 'botania:dreamwood_slab') theThing()
        else if(blockIDAt(x-2,y,z+3) != 'botania:dreamwood_slab') theThing()
        else if(blockIDAt(x-2,y,z-3) != 'botania:dreamwood_slab') theThing()
        
        else if(blockIDAt(x+2,y+1,z+2) != 'botania:glimmering_dreamwood_log') theThing()
        else if(blockIDAt(x+2,y+1,z-2) != 'botania:glimmering_dreamwood_log') theThing()
        else if(blockIDAt(x-2,y+1,z+2) != 'botania:glimmering_dreamwood_log') theThing()
        else if(blockIDAt(x-2,y+1,z-2) != 'botania:glimmering_dreamwood_log') theThing()
        
        else if(blockIDAt(x+2,y+2,z+2) != 'botania:glimmering_stripped_dreamwood_log') theThing()
        else if(blockIDAt(x+2,y+2,z-2) != 'botania:glimmering_stripped_dreamwood_log') theThing()
        else if(blockIDAt(x-2,y+2,z+2) != 'botania:glimmering_stripped_dreamwood_log') theThing()
        else if(blockIDAt(x-2,y+2,z-2) != 'botania:glimmering_stripped_dreamwood_log') theThing()
        
        else if(blockIDAt(x+2,y+3,z+2) != 'botania:stripped_dreamwood_log') theThing()
        else if(blockIDAt(x+2,y+3,z-2) != 'botania:stripped_dreamwood_log') theThing()
        else if(blockIDAt(x-2,y+3,z+2) != 'botania:stripped_dreamwood_log') theThing()
        else if(blockIDAt(x-2,y+3,z-2) != 'botania:stripped_dreamwood_log') theThing()
        
        else if(blockIDAt(x+2,y+4,z+2) != 'botania:stripped_dreamwood') theThing()
        else if(blockIDAt(x+2,y+4,z-2) != 'botania:stripped_dreamwood') theThing()
        else if(blockIDAt(x-2,y+4,z+2) != 'botania:stripped_dreamwood') theThing()
        else if(blockIDAt(x-2,y+4,z-2) != 'botania:stripped_dreamwood') theThing()

        else if(blockIDAt(x+2,y+4,z+1) != 'botania:stripped_dreamwood_stairs') theThing()
        else if(blockIDAt(x+2,y+4,z-1) != 'botania:stripped_dreamwood_stairs') theThing()
        else if(blockIDAt(x-2,y+4,z+1) != 'botania:stripped_dreamwood_stairs') theThing()
        else if(blockIDAt(x-2,y+4,z-1) != 'botania:stripped_dreamwood_stairs') theThing()
        else if(blockIDAt(x+1,y+4,z+2) != 'botania:stripped_dreamwood_stairs') theThing()
        else if(blockIDAt(x+1,y+4,z-2) != 'botania:stripped_dreamwood_stairs') theThing()
        else if(blockIDAt(x-1,y+4,z+2) != 'botania:stripped_dreamwood_stairs') theThing()
        else if(blockIDAt(x-1,y+4,z-2) != 'botania:stripped_dreamwood_stairs') theThing()

        else if(blockIDAt(x+2,y+5,z+1) != 'botania:stripped_dreamwood_stairs') theThing()
        else if(blockIDAt(x+2,y+5,z-1) != 'botania:stripped_dreamwood_stairs') theThing()
        else if(blockIDAt(x-2,y+5,z+1) != 'botania:stripped_dreamwood_stairs') theThing()
        else if(blockIDAt(x-2,y+5,z-1) != 'botania:stripped_dreamwood_stairs') theThing()
        else if(blockIDAt(x+1,y+5,z+2) != 'botania:stripped_dreamwood_stairs') theThing()
        else if(blockIDAt(x+1,y+5,z-2) != 'botania:stripped_dreamwood_stairs') theThing()
        else if(blockIDAt(x-1,y+5,z+2) != 'botania:stripped_dreamwood_stairs') theThing()
        else if(blockIDAt(x-1,y+5,z-2) != 'botania:stripped_dreamwood_stairs') theThing()
        
        else if(blockIDAt(x,y+5,z+2) != 'botania:dreamwood_planks_slab') theThing()
        else if(blockIDAt(x,y+5,z-2) != 'botania:dreamwood_planks_slab') theThing()
        else if(blockIDAt(x+2,y+5,z) != 'botania:dreamwood_planks_slab') theThing()
        else if(blockIDAt(x-2,y+5,z) != 'botania:dreamwood_planks_slab') theThing()

        else{
            event.player.mainHandItem.count--;
            event.server.scheduleInTicks(1, callback => {
                setOre(x,y+3,z);
                callback.stop();
            })
            event.server.scheduleInTicks(2, callback => {
                event.server.runCommandSilent(`playsound minecraft:block.stone.place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
                setOre(x,y+3,z+1);
                setOre(x+1,y+3,z);
                setOre(x,y+3,z-1);
                setOre(x-1,y+3,z);
                callback.stop();
            })
            event.server.scheduleInTicks(3, callback => {
                event.server.runCommandSilent(`playsound minecraft:block.stone.place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
                setOre(x-1,y+3,z-1);
                setOre(x-1,y+3,z+1);
                setOre(x+1,y+3,z-1);
                setOre(x+1,y+3,z+1);
                setOre(x,y+2,z);
                callback.stop();
            })
            event.server.scheduleInTicks(4, callback => {
                event.server.runCommandSilent(`playsound minecraft:block.stone.place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
                setOre(x,y+2,z+1);
                setOre(x-1,y+2,z);
                setOre(x+1,y+2,z);
                setOre(x,y+2,z-1);
                callback.stop();
            })
            event.server.scheduleInTicks(5, callback => {
                event.server.runCommandSilent(`playsound minecraft:block.stone.place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
                setOre(x-1,y+2,z-1);
                setOre(x-1,y+2,z+1);
                setOre(x+1,y+2,z-1);
                setOre(x+1,y+2,z+1);
                setOre(x,y+1,z);
                callback.stop();
            })
            event.server.scheduleInTicks(6, callback => {
                event.server.runCommandSilent(`playsound minecraft:block.stone.place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
                setOre(x-1,y+1,z);
                setOre(x,y+1,z+1);
                setOre(x+1,y+1,z);
                setOre(x,y+1,z-1);
                callback.stop();
            })
            event.server.scheduleInTicks(7, callback => {
                event.server.runCommandSilent(`playsound minecraft:block.stone.place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
                setOre(x-1,y+1,z-1);
                setOre(x-1,y+1,z+1);
                setOre(x+1,y+1,z-1);
                setOre(x+1,y+1,z+1);
                callback.stop();
            })
        }
    }
})
//tbd: spawning animation