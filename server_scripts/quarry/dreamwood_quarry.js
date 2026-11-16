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
                callback.clear();
            })
            event.server.scheduleInTicks(2, callback => {
                event.server.runCommandSilent(`playsound minecraft:block.stone.place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
                setOre(x,y+3,z+1);
                setOre(x+1,y+3,z);
                setOre(x,y+3,z-1);
                setOre(x-1,y+3,z);
                callback.clear();
            })
            event.server.scheduleInTicks(3, callback => {
                event.server.runCommandSilent(`playsound minecraft:block.stone.place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
                setOre(x-1,y+3,z-1);
                setOre(x-1,y+3,z+1);
                setOre(x+1,y+3,z-1);
                setOre(x+1,y+3,z+1);
                setOre(x,y+2,z);
                callback.clear();
            })
            event.server.scheduleInTicks(4, callback => {
                event.server.runCommandSilent(`playsound minecraft:block.stone.place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
                setOre(x,y+2,z+1);
                setOre(x-1,y+2,z);
                setOre(x+1,y+2,z);
                setOre(x,y+2,z-1);
                callback.clear();
            })
            event.server.scheduleInTicks(5, callback => {
                event.server.runCommandSilent(`playsound minecraft:block.stone.place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
                setOre(x-1,y+2,z-1);
                setOre(x-1,y+2,z+1);
                setOre(x+1,y+2,z-1);
                setOre(x+1,y+2,z+1);
                setOre(x,y+1,z);
                callback.clear();
            })
            event.server.scheduleInTicks(6, callback => {
                event.server.runCommandSilent(`playsound minecraft:block.stone.place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
                setOre(x-1,y+1,z);
                setOre(x,y+1,z+1);
                setOre(x+1,y+1,z);
                setOre(x,y+1,z-1);
                callback.clear();
            })
            event.server.scheduleInTicks(7, callback => {
                event.server.runCommandSilent(`playsound minecraft:block.stone.place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
                setOre(x-1,y+1,z-1);
                setOre(x-1,y+1,z+1);
                setOre(x+1,y+1,z-1);
                setOre(x+1,y+1,z+1);
                callback.clear();
            })
        }
    }
})
BlockEvents.rightClicked('botania:glimmering_runewood_log', event => {
    function placeBlock(x,y,z,block) {event.block.level.getBlock(event.block.pos.x+x,event.block.pos.y+y,event.block.pos.z+z).set(block)}
    function placeProps(x,y,z,block,props) {event.block.level.getBlock(event.block.pos.x+x,event.block.pos.y+y,event.block.pos.z+z).set(block,props)}
    if(event.item.id === 'kubejs:dreamwood_quarry_blueprint'){
        event.player.mainHandItem.count--;
        event.server.runCommandSilent(`playsound minecraft:block.wood.place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
        placeBlock(0,0,0,'kubejs:dreamwood_quarry');
        event.server.scheduleInTicks(2,callback => {
            event.server.runCommandSilent(`playsound minecraft:block.wood.place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
            placeBlock(-1,0,0,'botania:dreamwood_planks_slab');
            placeBlock(1,0,0,'botania:dreamwood_planks_slab');
            placeBlock(0,0,-1,'botania:dreamwood_planks_slab');
            placeBlock(0,0,1,'botania:dreamwood_planks_slab');
            callback.clear();
        })
        event.server.scheduleInTicks(2,callback => {
            event.server.runCommandSilent(`playsound minecraft:block.wood.place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
            placeBlock(-1,0,0,'botania:dreamwood_planks');
            placeBlock(1,0,0,'botania:dreamwood_planks');
            placeBlock(0,0,1,'botania:dreamwood_planks');
            placeBlock(0,0,-1,'botania:dreamwood_planks');
            callback.clear();
        })
        event.server.scheduleInTicks(3,callback => {
            event.server.runCommandSilent(`playsound minecraft:block.wood.place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
            placeBlock(-1,0,-1,'botania:dreamwood_planks_slab');
            placeBlock(-1,0,1,'botania:dreamwood_planks_slab');
            placeBlock(1,0,-1,'botania:dreamwood_planks_slab');
            placeBlock(1,0,1,'botania:dreamwood_planks_slab');
            callback.clear();
        })
        event.server.scheduleInTicks(4,callback => {
            event.server.runCommandSilent(`playsound minecraft:block.wood.place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
            placeBlock(-1,0,-1,'botania:dreamwood_planks');
            placeBlock(-1,0,1,'botania:dreamwood_planks');
            placeBlock(1,0,-1,'botania:dreamwood_planks');
            placeBlock(1,0,1,'botania:dreamwood_planks');
            callback.clear();
        })
        event.server.scheduleInTicks(5,callback => {
            event.server.runCommandSilent(`playsound minecraft:block.wood.place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
            placeBlock(-2,0,0,'botania:dreamwood_planks_slab');
            placeBlock(2,0,0,'botania:dreamwood_planks_slab');
            placeBlock(0,0,2,'botania:dreamwood_planks_slab');
            placeBlock(0,0,-2,'botania:dreamwood_planks_slab');
            callback.clear();
        })
        event.server.scheduleInTicks(6,callback => {
            event.server.runCommandSilent(`playsound minecraft:block.wood.place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
            placeProps(-2,0,0,'botania:dreamwood_planks_stairs',{facing:'east'});
            placeProps(2,0,0,'botania:dreamwood_planks_stairs',{facing:'west'});
            placeProps(0,0,2,'botania:dreamwood_planks_stairs',{facing:'north'});
            placeProps(0,0,-2,'botania:dreamwood_planks_stairs',{facing:'south'});
            placeBlock(-2,0,-1,'botania:dreamwood_planks_slab');
            placeBlock(-2,0,1,'botania:dreamwood_planks_slab');
            placeBlock(2,0,-1,'botania:dreamwood_planks_slab');
            placeBlock(2,0,1,'botania:dreamwood_planks_slab');
            placeBlock(-1,0,-2,'botania:dreamwood_planks_slab');
            placeBlock(-1,0,2,'botania:dreamwood_planks_slab');
            placeBlock(1,0,-2,'botania:dreamwood_planks_slab');
            placeBlock(1,0,2,'botania:dreamwood_planks_slab');
            callback.clear();
        })
        event.server.scheduleInTicks(7,callback => {
            event.server.runCommandSilent(`playsound minecraft:block.wood.place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
            placeBlock(-2,0,0,'botania:dreamwood_planks');
            placeBlock(2,0,0,'botania:dreamwood_planks');
            placeBlock(0,0,2,'botania:dreamwood_planks');
            placeBlock(0,0,-2,'botania:dreamwood_planks');
            placeProps(-2,0,1,'botania:dreamwood_planks_stairs',{facing:'east'});
            placeProps(-2,0,-1,'botania:dreamwood_planks_stairs',{facing:'east'});
            placeProps(2,0,-1,'botania:dreamwood_planks_stairs',{facing:'west'});
            placeProps(2,0,1,'botania:dreamwood_planks_stairs',{facing:'west'});
            placeProps(-1,0,-2,'botania:dreamwood_planks_stairs',{facing:'south'});
            placeProps(-1,0,2,'botania:dreamwood_planks_stairs',{facing:'north'});
            placeProps(1,0,-2,'botania:dreamwood_planks_stairs',{facing:'south'});
            placeProps(1,0,2,'botania:dreamwood_planks_stairs',{facing:'north'});
            callback.clear();
        })
        event.server.scheduleInTicks(8,callback => {
            event.server.runCommandSilent(`playsound minecraft:block.wood.place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
            placeBlock(-2,0,-1,'botania:dreamwood_planks');
            placeBlock(-2,0,1,'botania:dreamwood_planks');
            placeBlock(2,0,-1,'botania:dreamwood_planks');
            placeBlock(2,0,1,'botania:dreamwood_planks');
            placeBlock(-1,0,-2,'botania:dreamwood_planks');
            placeBlock(-1,0,2,'botania:dreamwood_planks');
            placeBlock(1,0,-2,'botania:dreamwood_planks');
            placeBlock(1,0,2,'botania:dreamwood_planks');
            placeBlock(-2,0,-2,'botania:dreamwood_slab');
            placeBlock(-2,0,2,'botania:dreamwood_slab');
            placeBlock(2,0,-2,'botania:dreamwood_slab');
            placeBlock(2,0,2,'botania:dreamwood_slab');
            callback.clear();
        })
        event.server.scheduleInTicks(9,callback => {
            event.server.runCommandSilent(`playsound minecraft:block.wood.place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
            placeProps(-3,0,0,'botania:dreamwood_planks_stairs',{facing:'east'});
            placeProps(3,0,0,'botania:dreamwood_planks_stairs',{facing:'west'});
            placeProps(0,0,3,'botania:dreamwood_planks_stairs',{facing:'north'});
            placeProps(0,0,-3,'botania:dreamwood_planks_stairs',{facing:'south'});
            placeBlock(-3,0,-1,'botania:dreamwood_planks_slab');
            placeBlock(-3,0,1,'botania:dreamwood_planks_slab');
            placeBlock(3,0,-1,'botania:dreamwood_planks_slab');
            placeBlock(3,0,1,'botania:dreamwood_planks_slab');
            placeBlock(-1,0,-3,'botania:dreamwood_planks_slab');
            placeBlock(-1,0,3,'botania:dreamwood_planks_slab');
            placeBlock(1,0,-3,'botania:dreamwood_planks_slab');
            placeBlock(1,0,3,'botania:dreamwood_planks_slab');
            callback.clear();
        })
        event.server.scheduleInTicks(10,callback => {
            event.server.runCommandSilent(`playsound minecraft:block.wood.place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
            placeProps(-3,0,1,'botania:dreamwood_planks_stairs',{facing:'east'});
            placeProps(-3,0,-1,'botania:dreamwood_planks_stairs',{facing:'east'});
            placeProps(3,0,-1,'botania:dreamwood_planks_stairs',{facing:'west'});
            placeProps(3,0,1,'botania:dreamwood_planks_stairs',{facing:'west'});
            placeProps(-1,0,-3,'botania:dreamwood_planks_stairs',{facing:'south'});
            placeProps(-1,0,3,'botania:dreamwood_planks_stairs',{facing:'north'});
            placeProps(1,0,-3,'botania:dreamwood_planks_stairs',{facing:'south'});
            placeProps(1,0,3,'botania:dreamwood_planks_stairs',{facing:'north'});
            placeBlock(-2,0,-2,'botania:dreamwood');
            placeBlock(-2,0,2,'botania:dreamwood');
            placeBlock(2,0,-2,'botania:dreamwood');
            placeBlock(2,0,2,'botania:dreamwood');
            callback.clear();
        })
        event.server.scheduleInTicks(11,callback => {
            event.server.runCommandSilent(`playsound minecraft:block.wood.place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
            placeBlock(-3,0,-2,'botania:dreamwood_slab');
            placeBlock(-3,0,2,'botania:dreamwood_slab');
            placeBlock(3,0,-2,'botania:dreamwood_slab');
            placeBlock(3,0,2,'botania:dreamwood_slab');
            placeBlock(-2,0,-3,'botania:dreamwood_slab');
            placeBlock(-2,0,3,'botania:dreamwood_slab');
            placeBlock(2,0,-3,'botania:dreamwood_slab');
            placeBlock(2,0,3,'botania:dreamwood_slab');
            callback.clear();
        })
        event.server.scheduleInTicks(11,callback => {
            event.server.runCommandSilent(`playsound minecraft:block.wood.place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
            placeProps(-3,0,-2,'botania:dreamwood_stairs',{facing:'east'});
            placeProps(-3,0,2,'botania:dreamwood_stairs',{facing:'east'});
            placeProps(3,0,-2,'botania:dreamwood_stairs',{facing:'west'});
            placeProps(3,0,2,'botania:dreamwood_stairs',{facing:'west'});
            placeProps(-2,0,-3,'botania:dreamwood_stairs',{facing:'south'});
            placeProps(-2,0,3,'botania:dreamwood_stairs',{facing:'north'});
            placeProps(2,0,-3,'botania:dreamwood_stairs',{facing:'south'});
            placeProps(2,0,3,'botania:dreamwood_stairs',{facing:'north'});
            callback.clear();
        })
        event.server.scheduleInTicks(14,callback => {
            event.server.runCommandSilent(`playsound minecraft:block.wood.place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
            placeBlock(-2,0,-2,'botania:dreamwood_log');
            placeBlock(-2,0,2,'botania:dreamwood_log');
            placeBlock(2,0,-2,'botania:dreamwood_log');
            placeBlock(2,0,2,'botania:dreamwood_log');
            callback.clear();
        })
        event.server.scheduleInTicks(15,callback => {
            event.server.runCommandSilent(`playsound minecraft:block.wood.place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
            placeBlock(-2,1,-2,'botania:dreamwood_fence');
            placeBlock(-2,1,2,'botania:dreamwood_fence');
            placeBlock(2,1,-2,'botania:dreamwood_fence');
            placeBlock(2,1,2,'botania:dreamwood_fence');
            callback.clear();
        })
        event.server.scheduleInTicks(16,callback => {
            event.server.runCommandSilent(`playsound minecraft:block.wood.place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
            placeBlock(-2,2,-2,'botania:dreamwood_fence');
            placeBlock(-2,2,2,'botania:dreamwood_fence');
            placeBlock(2,2,-2,'botania:dreamwood_fence');
            placeBlock(2,2,2,'botania:dreamwood_fence');
            callback.clear();
        })
        event.server.scheduleInTicks(17,callback => {
            event.server.runCommandSilent(`playsound minecraft:block.wood.place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
            placeBlock(-2,3,-2,'botania:dreamwood_fence');
            placeBlock(-2,3,2,'botania:dreamwood_fence');
            placeBlock(2,3,-2,'botania:dreamwood_fence');
            placeBlock(2,3,2,'botania:dreamwood_fence');
            callback.clear();
        })
        event.server.scheduleInTicks(18,callback => {
            event.server.runCommandSilent(`playsound minecraft:block.wood.place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
            placeBlock(-2,4,-2,'botania:dreamwood_fence');
            placeBlock(-2,4,2,'botania:dreamwood_fence');
            placeBlock(2,4,-2,'botania:dreamwood_fence');
            placeBlock(2,4,2,'botania:dreamwood_fence');
            callback.clear();
        })
        event.server.scheduleInTicks(19,callback => {
            event.server.runCommandSilent(`playsound minecraft:block.wood.place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
            placeBlock(-2,5,-2,'botania:dreamwood_fence');
            placeBlock(-2,5,2,'botania:dreamwood_fence');
            placeBlock(2,5,-2,'botania:dreamwood_fence');
            placeBlock(2,5,2,'botania:dreamwood_fence');
            callback.clear();
        })
        event.server.scheduleInTicks(22,callback => {
            event.server.runCommandSilent(`playsound minecraft:block.wood.place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
            placeBlock(-2,1,-2,'botania:dreamwood_wall');
            placeBlock(-2,1,2,'botania:dreamwood_wall');
            placeBlock(2,1,-2,'botania:dreamwood_wall');
            placeBlock(2,1,2,'botania:dreamwood_wall');
            callback.clear();
        })
        event.server.scheduleInTicks(23,callback => {
            event.server.runCommandSilent(`playsound minecraft:block.wood.place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
            placeBlock(-2,2,-2,'botania:dreamwood_wall');
            placeBlock(-2,2,2,'botania:dreamwood_wall');
            placeBlock(2,2,-2,'botania:dreamwood_wall');
            placeBlock(2,2,2,'botania:dreamwood_wall');
            callback.clear();
        })
        event.server.scheduleInTicks(24,callback => {
            event.server.runCommandSilent(`playsound minecraft:block.wood.place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
            placeBlock(-2,3,-2,'botania:dreamwood_wall');
            placeBlock(-2,3,2,'botania:dreamwood_wall');
            placeBlock(2,3,-2,'botania:dreamwood_wall');
            placeBlock(2,3,2,'botania:dreamwood_wall');
            callback.clear();
        })
        event.server.scheduleInTicks(25,callback => {
            event.server.runCommandSilent(`playsound minecraft:block.wood.place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
            placeBlock(-2,4,-2,'botania:dreamwood_wall');
            placeBlock(-2,4,2,'botania:dreamwood_wall');
            placeBlock(2,4,-2,'botania:dreamwood_wall');
            placeBlock(2,4,2,'botania:dreamwood_wall');
            callback.clear();
        })
        event.server.scheduleInTicks(26,callback => {
            event.server.runCommandSilent(`playsound minecraft:block.wood.place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
            placeBlock(-2,5,-2,'botania:dreamwood_wall');
            placeBlock(-2,5,2,'botania:dreamwood_wall');
            placeBlock(2,5,-2,'botania:dreamwood_wall');
            placeBlock(2,5,2,'botania:dreamwood_wall');
            callback.clear();
        })
        event.server.scheduleInTicks(29,callback => {
            event.server.runCommandSilent(`playsound minecraft:block.wood.place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
            placeBlock(-2,1,-2,'botania:dreamwood_log');
            placeBlock(-2,1,2,'botania:dreamwood_log');
            placeBlock(2,1,-2,'botania:dreamwood_log');
            placeBlock(2,1,2,'botania:dreamwood_log');
            callback.clear();
        })
        event.server.scheduleInTicks(30,callback => {
            event.server.runCommandSilent(`playsound minecraft:block.wood.place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
            placeBlock(-2,2,-2,'botania:dreamwood_log');
            placeBlock(-2,2,2,'botania:dreamwood_log');
            placeBlock(2,2,-2,'botania:dreamwood_log');
            placeBlock(2,2,2,'botania:dreamwood_log');
            callback.clear();
        })
        event.server.scheduleInTicks(31,callback => {
            event.server.runCommandSilent(`playsound minecraft:block.wood.place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
            placeBlock(-2,3,-2,'botania:dreamwood_log');
            placeBlock(-2,3,2,'botania:dreamwood_log');
            placeBlock(2,3,-2,'botania:dreamwood_log');
            placeBlock(2,3,2,'botania:dreamwood_log');
            callback.clear();
        })
        event.server.scheduleInTicks(32,callback => {
            event.server.runCommandSilent(`playsound minecraft:block.wood.place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
            placeBlock(-2,4,-2,'botania:dreamwood_log');
            placeBlock(-2,4,2,'botania:dreamwood_log');
            placeBlock(2,4,-2,'botania:dreamwood_log');
            placeBlock(2,4,2,'botania:dreamwood_log');
            callback.clear();
        })
        event.server.scheduleInTicks(33,callback => {
            event.server.runCommandSilent(`playsound minecraft:block.wood.place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
            placeBlock(-2,5,-2,'botania:dreamwood_log');
            placeBlock(-2,5,2,'botania:dreamwood_log');
            placeBlock(2,5,-2,'botania:dreamwood_log');
            placeBlock(2,5,2,'botania:dreamwood_log');
            callback.clear();
        })
        event.server.scheduleInTicks(36,callback => {
            event.server.runCommandSilent(`playsound minecraft:item.axe.strip block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
            placeBlock(-2,2,-2,'botania:stripped_dreamwood_log');
            placeBlock(-2,2,2,'botania:stripped_dreamwood_log');
            placeBlock(2,2,-2,'botania:stripped_dreamwood_log');
            placeBlock(2,2,2,'botania:stripped_dreamwood_log');
            callback.clear();
        })
        event.server.scheduleInTicks(37,callback => {
            event.server.runCommandSilent(`playsound minecraft:item.axe.strip block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
            placeBlock(-2,3,-2,'botania:stripped_dreamwood_log');
            placeBlock(-2,3,2,'botania:stripped_dreamwood_log');
            placeBlock(2,3,-2,'botania:stripped_dreamwood_log');
            placeBlock(2,3,2,'botania:stripped_dreamwood_log');
            callback.clear();
        })
        event.server.scheduleInTicks(38,callback => {
            event.server.runCommandSilent(`playsound minecraft:item.axe.strip block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
            placeBlock(-2,4,-2,'botania:stripped_dreamwood');
            placeBlock(-2,4,2,'botania:stripped_dreamwood');
            placeBlock(2,4,-2,'botania:stripped_dreamwood');
            placeBlock(2,4,2,'botania:stripped_dreamwood');
            callback.clear();
        })
        event.server.scheduleInTicks(39,callback => {
            event.server.runCommandSilent(`playsound minecraft:item.axe.strip block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
            placeBlock(-2,5,-2,'botania:stripped_dreamwood_log');
            placeBlock(-2,5,2,'botania:stripped_dreamwood_log');
            placeBlock(2,5,-2,'botania:stripped_dreamwood_log');
            placeBlock(2,5,2,'botania:stripped_dreamwood_log');
            callback.clear();
        })
        event.server.scheduleInTicks(40,callback => {
            event.server.runCommandSilent(`playsound minecraft:block.wood.place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
            placeProps(-2,5,1,'botania:stripped_dreamwood_stairs',{facing:'south',half:'top'});
            placeProps(-2,5,-1,'botania:stripped_dreamwood_stairs',{facing:'north',half:'top'});
            placeProps(2,5,-1,'botania:stripped_dreamwood_stairs',{facing:'north',half:'top'});
            placeProps(2,5,1,'botania:stripped_dreamwood_stairs',{facing:'south',half:'top'});
            placeProps(-1,5,-2,'botania:stripped_dreamwood_stairs',{facing:'west',half:'top'});
            placeProps(-1,5,2,'botania:stripped_dreamwood_stairs',{facing:'west',half:'top'});
            placeProps(1,5,-2,'botania:stripped_dreamwood_stairs',{facing:'east',half:'top'});
            placeProps(1,5,2,'botania:stripped_dreamwood_stairs',{facing:'east',half:'top'});
            callback.clear();
        })
        event.server.scheduleInTicks(45,callback => {
            event.server.runCommandSilent(`playsound minecraft:block.wood.break block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
            placeProps(-2,4,1,'botania:stripped_dreamwood_stairs',{facing:'south',half:'top'});
            placeProps(-2,4,-1,'botania:stripped_dreamwood_stairs',{facing:'north',half:'top'});
            placeProps(2,4,-1,'botania:stripped_dreamwood_stairs',{facing:'north',half:'top'});
            placeProps(2,4,1,'botania:stripped_dreamwood_stairs',{facing:'south',half:'top'});
            placeProps(-1,4,-2,'botania:stripped_dreamwood_stairs',{facing:'west',half:'top'});
            placeProps(-1,4,2,'botania:stripped_dreamwood_stairs',{facing:'west',half:'top'});
            placeProps(1,4,-2,'botania:stripped_dreamwood_stairs',{facing:'east',half:'top'});
            placeProps(1,4,2,'botania:stripped_dreamwood_stairs',{facing:'east',half:'top'});
            placeBlock(-2,5,1,'botania:stripped_dreamwood_slab');
            placeBlock(-2,5,-1,'botania:stripped_dreamwood_slab');
            placeBlock(2,5,-1,'botania:stripped_dreamwood_slab');
            placeBlock(2,5,1,'botania:stripped_dreamwood_slab');
            placeBlock(-1,5,-2,'botania:stripped_dreamwood_slab');
            placeBlock(-1,5,2,'botania:stripped_dreamwood_slab');
            placeBlock(1,5,-2,'botania:stripped_dreamwood_slab');
            placeBlock(1,5,2,'botania:stripped_dreamwood_slab');
            placeBlock(-2,5,-2,'minecraft:air');
            placeBlock(-2,5,2,'minecraft:air');
            placeBlock(2,5,-2,'minecraft:air');
            placeBlock(2,5,2,'minecraft:air');
            callback.clear();
        })
        event.server.scheduleInTicks(47,callback => {
            event.server.runCommandSilent(`playsound minecraft:block.wood.break block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
            placeProps(-2,5,1,'botania:stripped_dreamwood_stairs',{facing:'north'});
            placeProps(-2,5,-1,'botania:stripped_dreamwood_stairs',{facing:'south'});
            placeProps(2,5,-1,'botania:stripped_dreamwood_stairs',{facing:'south'});
            placeProps(2,5,1,'botania:stripped_dreamwood_stairs',{facing:'north'});
            placeProps(-1,5,-2,'botania:stripped_dreamwood_stairs',{facing:'east'});
            placeProps(-1,5,2,'botania:stripped_dreamwood_stairs',{facing:'east'});
            placeProps(1,5,-2,'botania:stripped_dreamwood_stairs',{facing:'west'});
            placeProps(1,5,2,'botania:stripped_dreamwood_stairs',{facing:'west'});
            placeBlock(-3,0,-2,'botania:dreamwood_slab');
            placeBlock(-3,0,2,'botania:dreamwood_slab');
            placeBlock(3,0,-2,'botania:dreamwood_slab');
            placeBlock(3,0,2,'botania:dreamwood_slab');
            placeBlock(-2,0,-3,'botania:dreamwood_slab');
            placeBlock(-2,0,3,'botania:dreamwood_slab');
            placeBlock(2,0,-3,'botania:dreamwood_slab');
            placeBlock(2,0,3,'botania:dreamwood_slab');
            callback.clear();
        })
        event.server.scheduleInTicks(49,callback => {
            event.server.runCommandSilent(`playsound minecraft:block.wood.place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
            placeBlock(-2,5,0,'botania:dreamwood_planks_slab');
            placeBlock(2,5,0,'botania:dreamwood_planks_slab');
            placeBlock(0,5,2,'botania:dreamwood_planks_slab');
            placeBlock(0,5,-2,'botania:dreamwood_planks_slab');
            placeProps(-3,0,1,'botania:dreamwood_planks_stairs',{facing:'north',shape:'outer_right'});
            placeProps(-3,0,-1,'botania:dreamwood_planks_stairs',{facing:'south',shape:'outer_left'});
            placeProps(3,0,-1,'botania:dreamwood_planks_stairs',{facing:'south',shape:'outer_right'});
            placeProps(3,0,1,'botania:dreamwood_planks_stairs',{facing:'north',shape:'outer_left'});
            placeProps(-1,0,-3,'botania:dreamwood_planks_stairs',{facing:'east',shape:'outer_right'});
            placeProps(-1,0,3,'botania:dreamwood_planks_stairs',{facing:'east',shape:'outer_left'});
            placeProps(1,0,-3,'botania:dreamwood_planks_stairs',{facing:'west',shape:'outer_left'});
            placeProps(1,0,3,'botania:dreamwood_planks_stairs',{facing:'west',shape:'outer_right'});
            callback.clear();
        })
        event.server.scheduleInTicks(54,callback => {
            event.server.runCommandSilent(`playsound minecraft:block.wood.place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
            placeProps(-2,0,1,'botania:framed_dreamwood',{axis:'z'});
            placeProps(-2,0,-1,'botania:framed_dreamwood',{axis:'z'});
            placeProps(2,0,-1,'botania:framed_dreamwood',{axis:'z'});
            placeProps(2,0,1,'botania:framed_dreamwood',{axis:'z'});
            placeProps(-1,0,-2,'botania:framed_dreamwood',{axis:'x'});
            placeProps(-1,0,2,'botania:framed_dreamwood',{axis:'x'});
            placeProps(1,0,-2,'botania:framed_dreamwood',{axis:'x'});
            placeProps(1,0,2,'botania:framed_dreamwood',{axis:'x'});
            callback.clear();
        })
        event.server.scheduleInTicks(57,callback => {
            event.server.runCommandSilent(`playsound minecraft:block.wood.place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
            placeBlock(-2,0,0,'botania:pattern_framed_dreamwood');
            placeBlock(2,0,0,'botania:pattern_framed_dreamwood');
            placeBlock(0,0,2,'botania:pattern_framed_dreamwood');
            placeBlock(0,0,-2,'botania:pattern_framed_dreamwood');
            callback.clear();
        })
        event.server.scheduleInTicks(62,callback => {
            event.server.runCommandSilent(`playsound minecraft:block.wood.place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
            placeBlock(-2,2,-2,'botania:glimmering_stripped_dreamwood_log');
            placeBlock(-2,2,2,'botania:glimmering_stripped_dreamwood_log');
            placeBlock(2,2,-2,'botania:glimmering_stripped_dreamwood_log');
            placeBlock(2,2,2,'botania:glimmering_stripped_dreamwood_log');
            callback.clear();
        })
        event.server.scheduleInTicks(70,callback => {
            event.server.runCommandSilent(`playsound minecraft:block.wood.place block @a ${event.block.pos.x} ${event.block.pos.y} ${event.block.pos.z} 1 1`);
            placeBlock(-2,1,-2,'botania:glimmering_dreamwood_log');
            placeBlock(-2,1,2,'botania:glimmering_dreamwood_log');
            placeBlock(2,1,-2,'botania:glimmering_dreamwood_log');
            placeBlock(2,1,2,'botania:glimmering_dreamwood_log');
            callback.clear();
        })
    }
})