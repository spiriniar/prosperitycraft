function gooTransform(inputGoo,outputGoo,inputBlocks){
    BlockEvents.placed(event => {
        let block=event.block;
        let level=event.level;
        let gx=0,y=0,gz=0;
        if (inputBlocks.includes(block.id)){
            let x=block.x,z=block.z;
            y=block.y
            gx=x,gz=z;
            if(level.getBlock(x+1,y,z).id==inputGoo)gx=x+1
            if(level.getBlock(x-1,y,z).id==inputGoo)gx=x-1
            if(level.getBlock(x,y,z+1).id==inputGoo)gz=z+1
            if(level.getBlock(x,y,z-1).id==inputGoo)gz=z-1
            if(gx==x&&gz==z) return;
        }
        else if(block.id==inputGoo)
        {
            gx=block.x,y=block.y,gz=block.z;
        } 
        else return;
        let ingrds=[]
        ingrds.push(level.getBlock(gx+1,y,gz).id)
        ingrds.push(level.getBlock(gx-1,y,gz).id)
        ingrds.push(level.getBlock(gx,y,gz+1).id)
        ingrds.push(level.getBlock(gx,y,gz-1).id)
        let flag=0;
        inputBlocks.forEach(inputblock=>{
            if(!ingrds.includes(inputblock)){
                event.player.tell('check '+inputblock)
                flag=1
            }
        })
        if(flag==0){
            level.getBlock(gx+1,y,gz).set('minecraft:air')
            level.getBlock(gx-1,y,gz).set('minecraft:air')
            level.getBlock(gx,y,gz+1).set('minecraft:air')
            level.getBlock(gx,y,gz-1).set('minecraft:air')
            level.getBlock(gx,y,gz).set(outputGoo)
            event.server.runCommandSilent(`playsound minecraft:block.slime_block.place block @a ${gx} ${y} ${gz} 1 0.05`)
            event.server.runCommandSilent(`playsound minecraft:block.slime_block.hit block @a ${gx} ${y} ${gz} 1 0.5`)
            event.level.spawnParticles('minecraft:explosion',false,gx+0.5,y,gz+0.5,0.3,0.3,0.3,3,2);
        }
    })
}
//text example
gooTransform('minecraft:stone','minecraft:terracotta',['minecraft:podzol','minecraft:conduit','minecraft:dandelion','minecraft:glass'])