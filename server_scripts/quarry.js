BlockEvents.rightClicked('kubejs:runewood_quarry', event => {
    function blockIDAt(x,y,z) {return event.block.level.getBlock(x,y,z).id};
    function theThing() {event.server.runCommandSilent(`execute in ${event.block.level.dimension} positioned ${event.block.x} ${event.block.y} ${event.block.z} run title @a[distance=..7] actionbar {"text":"Multiblock not formed","color":"white"}`)}
    function setOre(x,y,z) {
        let n = Math.floor(Math.random()*16);
        if(n==0) event.block.level.getBlock(x,y,z).set('malum:cthonic_gold_ore');
        else if(n==1) event.block.level.getBlock(x,y,z).set('malum:deepslate_soulstone_ore');
        else if(n==2) event.block.level.getBlock(x,y,z).set('malum:deepslate_quartz_ore');
        else if(n==3) event.block.level.getBlock(x,y,z).set('malum:brilliant_deepslate');
        else event.block.level.getBlock(x,y,z).set('minecraft:deepslate');
    }

    if(event.item.id === 'kubejs:quarry_putty'){
        let x=event.block.x;
        let y=event.block.y;
        let z=event.block.z;
        if(blockIDAt(x,y,z+1) != 'malum:runewood_planks') theThing()
        else if(blockIDAt(x,y,z-1) != 'malum:runewood_planks') theThing()
        else if(blockIDAt(x+1,y,z) != 'malum:runewood_planks') theThing()
        else if(blockIDAt(x-1,y,z) != 'malum:runewood_planks') theThing()
        else if(blockIDAt(x+1,y,z+1) != 'malum:runewood_planks') theThing()
        else if(blockIDAt(x+1,y,z-1) != 'malum:runewood_planks') theThing()
        else if(blockIDAt(x-1,y,z+1) != 'malum:runewood_planks') theThing()
        else if(blockIDAt(x-1,y,z-1) != 'malum:runewood_planks') theThing()

        else if(blockIDAt(x+2,y,z-1) != 'malum:runewood_boards_stairs') theThing()
        else if(blockIDAt(x+2,y,z) != 'malum:runewood_boards_stairs') theThing()
        else if(blockIDAt(x+2,y,z+1) != 'malum:runewood_boards_stairs') theThing()
        else if(blockIDAt(x-2,y,z-1) != 'malum:runewood_boards_stairs') theThing()
        else if(blockIDAt(x-2,y,z) != 'malum:runewood_boards_stairs') theThing()
        else if(blockIDAt(x-2,y,z+1) != 'malum:runewood_boards_stairs') theThing()
        else if(blockIDAt(x-1,y,z+2) != 'malum:runewood_boards_stairs') theThing()
        else if(blockIDAt(x,y,z+2) != 'malum:runewood_boards_stairs') theThing()
        else if(blockIDAt(x+1,y,z+2) != 'malum:runewood_boards_stairs') theThing()
        else if(blockIDAt(x-1,y,z-2) != 'malum:runewood_boards_stairs') theThing()
        else if(blockIDAt(x,y,z-2) != 'malum:runewood_boards_stairs') theThing()
        else if(blockIDAt(x+1,y,z-2) != 'malum:runewood_boards_stairs') theThing()
        
        else if(blockIDAt(x+2,y,z+2) != 'malum:runewood_log') theThing()
        else if(blockIDAt(x+2,y+1,z+2) != 'malum:exposed_runewood_log') theThing()
        else if(blockIDAt(x+2,y+2,z+2) != 'malum:runewood_boards_wall') theThing()
        else if(blockIDAt(x+2,y+3,z+2) != 'malum:runewood_boards_wall') theThing()
        else if(blockIDAt(x+2,y+4,z+2) != 'malum:runewood_boards_slab') theThing()
        
        else if(blockIDAt(x+2,y,z-2) != 'malum:runewood_log') theThing()
        else if(blockIDAt(x+2,y+1,z-2) != 'malum:exposed_runewood_log') theThing()
        else if(blockIDAt(x+2,y+2,z-2) != 'malum:runewood_boards_wall') theThing()
        else if(blockIDAt(x+2,y+3,z-2) != 'malum:runewood_boards_wall') theThing()
        else if(blockIDAt(x+2,y+4,z-2) != 'malum:runewood_boards_slab') theThing()
        
        else if(blockIDAt(x-2,y,z+2) != 'malum:runewood_log') theThing()
        else if(blockIDAt(x-2,y+1,z+2) != 'malum:exposed_runewood_log') theThing()
        else if(blockIDAt(x-2,y+2,z+2) != 'malum:runewood_boards_wall') theThing()
        else if(blockIDAt(x-2,y+3,z+2) != 'malum:runewood_boards_wall') theThing()
        else if(blockIDAt(x-2,y+4,z+2) != 'malum:runewood_boards_slab') theThing()
        
        else if(blockIDAt(x-2,y,z-2) != 'malum:runewood_log') theThing()
        else if(blockIDAt(x-2,y+1,z-2) != 'malum:exposed_runewood_log') theThing()
        else if(blockIDAt(x-2,y+2,z-2) != 'malum:runewood_boards_wall') theThing()
        else if(blockIDAt(x-2,y+3,z-2) != 'malum:runewood_boards_wall') theThing()
        else if(blockIDAt(x-2,y+4,z-2) != 'malum:runewood_boards_slab') theThing()
        
        else {
            event.player.mainHandItem.count--;
            event.server.scheduleInTicks(1, callback => {
                event.server.runCommandSilent(`playsound minecraft:block.deepslate.place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
                setOre(x,y+1,z);
                callback.stop();
            })
            event.server.scheduleInTicks(2, callback => {
                event.server.runCommandSilent(`playsound minecraft:block.deepslate.place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
                setOre(x-1,y+1,z);
                setOre(x,y+1,z+1);
                setOre(x+1,y+1,z);
                setOre(x,y+1,z-1);
                setOre(x,y+2,z);
                callback.stop();
            })
            event.server.scheduleInTicks(3, callback => {
                event.server.runCommandSilent(`playsound minecraft:block.deepslate.place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
                setOre(x-1,y+1,z-1);
                setOre(x-1,y+1,z+1);
                setOre(x+1,y+1,z-1);
                setOre(x+1,y+1,z+1);
                setOre(x,y+2,z+1);
                setOre(x-1,y+2,z);
                setOre(x+1,y+2,z);
                setOre(x,y+2,z-1);
                setOre(x,y+3,z);
                callback.stop();
            })
            event.server.scheduleInTicks(4, callback => {
                event.server.runCommandSilent(`playsound minecraft:block.deepslate.place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
                setOre(x-1,y+2,z-1);
                setOre(x-1,y+2,z+1);
                setOre(x+1,y+2,z-1);
                setOre(x+1,y+2,z+1);
                setOre(x,y+3,z+1);
                setOre(x+1,y+3,z);
                setOre(x,y+3,z-1);
                setOre(x-1,y+3,z);
                callback.stop();
            })
            event.server.scheduleInTicks(5, callback => {
                event.server.runCommandSilent(`playsound minecraft:block.deepslate.place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
                setOre(x-1,y+3,z-1);
                setOre(x-1,y+3,z+1);
                setOre(x+1,y+3,z-1);
                setOre(x+1,y+3,z+1);
                callback.stop();
            })
        }
    }
})

BlockEvents.rightClicked('malum:revealed_runewood_log', event => {
    function placeBlock(x,y,z,block) {event.block.level.getBlock(event.block.pos.x+x,event.block.pos.y+y,event.block.pos.z+z).set(block)}
    function placeStairs(x,y,z,block,dir) {event.block.level.getBlock(event.block.pos.x+x,event.block.pos.y+y,event.block.pos.z+z).set(block,{facing:dir})}
    if(event.item.id === 'kubejs:quarry_blueprint'){
        event.player.mainHandItem.count--;
        event.server.runCommandSilent(`playsound malum:runewood_place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
        placeBlock(0,0,0,'kubejs:runewood_quarry');
        placeBlock(-1,0,0,'malum:runewood_planks_slab');
        placeBlock(1,0,0,'malum:runewood_planks_slab');
        placeBlock(0,0,-1,'malum:runewood_planks_slab');
        placeBlock(0,0,1,'malum:runewood_planks_slab');
        event.server.scheduleInTicks(2,callback => {
            event.server.runCommandSilent(`playsound malum:runewood_place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
            placeBlock(-1,0,0,'malum:runewood_planks');
            placeBlock(1,0,0,'malum:runewood_planks');
            placeBlock(0,0,1,'malum:runewood_planks');
            placeBlock(0,0,-1,'malum:runewood_planks');
            placeBlock(-1,0,-1,'malum:runewood_boards_slab');
            placeBlock(-1,0,1,'malum:runewood_boards_slab');
            placeBlock(1,0,-1,'malum:runewood_boards_slab');
            placeBlock(1,0,1,'malum:runewood_boards_slab');
            callback.stop();
        })
        event.server.scheduleInTicks(4,callback => {
            event.server.runCommandSilent(`playsound malum:runewood_place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
            placeBlock(-1,0,-1,'malum:runewood_boards_wall');
            placeBlock(-1,0,1,'malum:runewood_boards_wall');
            placeBlock(1,0,-1,'malum:runewood_boards_wall');
            placeBlock(1,0,1,'malum:runewood_boards_wall');
            callback.stop();
        })
        event.server.scheduleInTicks(6,callback => {
            event.server.runCommandSilent(`playsound malum:runewood_place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
            placeBlock(-1,0,-1,'malum:runewood_planks_slab');
            placeBlock(1,0,-1,'malum:runewood_planks_slab');
            placeBlock(-1,0,1,'malum:runewood_planks_slab');
            placeBlock(1,0,1,'malum:runewood_planks_slab');
            placeBlock(-2,0,-2,'malum:runewood_boards_wall');
            placeBlock(-2,0,2,'malum:runewood_boards_wall');
            placeBlock(2,0,-2,'malum:runewood_boards_wall');
            placeBlock(2,0,2,'malum:runewood_boards_wall');
            callback.stop();
        })
        event.server.scheduleInTicks(8,callback => {
            event.server.runCommandSilent(`playsound malum:runewood_place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
            placeBlock(-1,0,-1,'malum:runewood_planks');
            placeBlock(-1,0,1,'malum:runewood_planks');
            placeBlock(1,0,1,'malum:runewood_planks');
            placeBlock(1,0,-1,'malum:runewood_planks');
            placeBlock(-2,0,-2,'malum:exposed_runewood_log');
            placeBlock(-2,0,2,'malum:exposed_runewood_log');
            placeBlock(2,0,-2,'malum:exposed_runewood_log');
            placeBlock(2,0,2,'malum:exposed_runewood_log');
            placeBlock(-2,1,-2,'malum:runewood_boards_wall');
            placeBlock(-2,1,2,'malum:runewood_boards_wall');
            placeBlock(2,1,-2,'malum:runewood_boards_wall');
            placeBlock(2,1,2,'malum:runewood_boards_wall');
            placeBlock(-2,0,-1,'malum:runewood_boards_slab');
            placeBlock(-2,0,1,'malum:runewood_boards_slab');
            placeBlock(-1,0,-2,'malum:runewood_boards_slab');
            placeBlock(1,0,-2,'malum:runewood_boards_slab');
            placeBlock(2,0,-1,'malum:runewood_boards_slab');
            placeBlock(2,0,1,'malum:runewood_boards_slab');
            placeBlock(-1,0,2,'malum:runewood_boards_slab');
            placeBlock(1,0,2,'malum:runewood_boards_slab');
            callback.stop();
        }) 
        event.server.scheduleInTicks(10,callback => {
            event.server.runCommandSilent(`playsound malum:runewood_place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
            placeStairs(-2,0,-1,'malum:runewood_boards_stairs','east');
            placeStairs(-2,0,1,'malum:runewood_boards_stairs','east');
            placeStairs(-1,0,-2,'malum:runewood_boards_stairs','south');
            placeStairs(1,0,-2,'malum:runewood_boards_stairs','south');
            placeStairs(2,0,-1,'malum:runewood_boards_stairs','west');
            placeStairs(2,0,1,'malum:runewood_boards_stairs','west');
            placeStairs(-1,0,2,'malum:runewood_boards_stairs','north');
            placeStairs(1,0,2,'malum:runewood_boards_stairs','north');
            placeBlock(-2,0,0,'malum:runewood_boards_slab');
            placeBlock(2,0,0,'malum:runewood_boards_slab');
            placeBlock(0,0,-2,'malum:runewood_boards_slab');
            placeBlock(0,0,2,'malum:runewood_boards_slab');
            callback.stop();
        }) 
        event.server.scheduleInTicks(12,callback => {
            event.server.runCommandSilent(`playsound malum:runewood_place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
            placeStairs(-2,0,0,'malum:runewood_boards_stairs','east');
            placeStairs(2,0,0,'malum:runewood_boards_stairs','west');
            placeStairs(0,0,-2,'malum:runewood_boards_stairs','south');
            placeStairs(0,0,2,'malum:runewood_boards_stairs','north');
            placeBlock(-2,2,-2,'malum:runewood_boards_wall');
            placeBlock(-2,2,2,'malum:runewood_boards_wall');
            placeBlock(2,2,-2,'malum:runewood_boards_wall');
            placeBlock(2,2,2,'malum:runewood_boards_wall');
            callback.stop();
        })
        event.server.scheduleInTicks(14,callback => {
            event.server.runCommandSilent(`playsound malum:runewood_place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
            placeBlock(-2,3,-2,'malum:runewood_boards_wall');
            placeBlock(-2,3,2,'malum:runewood_boards_wall');
            placeBlock(2,3,-2,'malum:runewood_boards_wall');
            placeBlock(2,3,2,'malum:runewood_boards_wall');
            callback.stop();
        }) 
        event.server.scheduleInTicks(15,callback => {
            event.server.runCommandSilent(`playsound malum:runewood_place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
            placeBlock(-2,4,-2,'malum:runewood_boards_wall');
            placeBlock(-2,4,2,'malum:runewood_boards_wall');
            placeBlock(2,4,-2,'malum:runewood_boards_wall');
            placeBlock(2,4,2,'malum:runewood_boards_wall');
            callback.stop();
        })
        event.server.scheduleInTicks(16,callback => {
            event.server.runCommandSilent(`playsound malum:runewood_place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
            placeBlock(-2,0,-2,'malum:runewood_log');
            placeBlock(-2,0,2,'malum:runewood_log');
            placeBlock(2,0,-2,'malum:runewood_log');
            placeBlock(2,0,2,'malum:runewood_log');
            placeBlock(-2,1,-2,'malum:exposed_runewood_log');
            placeBlock(-2,1,2,'malum:exposed_runewood_log');
            placeBlock(2,1,-2,'malum:exposed_runewood_log');
            placeBlock(2,1,2,'malum:exposed_runewood_log');
            placeBlock(-2,5,-2,'malum:runewood_boards_wall');
            placeBlock(-2,5,2,'malum:runewood_boards_wall');
            placeBlock(2,5,-2,'malum:runewood_boards_wall');
            placeBlock(2,5,2,'malum:runewood_boards_wall');
            callback.stop();
        })
        event.server.scheduleInTicks(19,callback => {
            placeBlock(-2,5,-2,'minecraft:air');
            placeBlock(-2,5,2,'minecraft:air');
            placeBlock(2,5,-2,'minecraft:air');
            placeBlock(2,5,2,'minecraft:air');
            callback.stop();
        })
        event.server.scheduleInTicks(20,callback => {
            event.server.runCommandSilent(`playsound malum:runewood_place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
            placeBlock(-2,4,-2,'malum:runewood_boards_slab');
            placeBlock(-2,4,2,'malum:runewood_boards_slab');
            placeBlock(2,4,-2,'malum:runewood_boards_slab');
            placeBlock(2,4,2,'malum:runewood_boards_slab');
            callback.stop();
        }) 
    }
})