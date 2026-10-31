function rodSpawn(block,mob){
    BlockEvents.rightClicked(block, event => {
        if(event.item.id === 'kubejs:mob_spawner_rod'){
            event.player.mainHandItem.damageValue++;
            if(event.player.mainHandItem.damageValue>=16) event.player.mainHandItem.count--;
            event.block.set('minecraft:air');
            event.server.runCommandSilent(`summon ${mob} ${event.block.x} ${event.block.y} ${event.block.z}`)
        }
    })
    createRecipe(block,mob)
}
function createRecipe(block,mob){
    ServerEvents.recipes(event =>{
        event.shaped(`${mob}_spawn_egg`,[
            '   ','ABC','   '
        ],{
            A:'kubejs:mob_spawner_rod',
            B:'kubejs:right_click',
            C:block
        }).noShrink()
    })
}
rodSpawn('malum:block_of_hex_ash','minecraft:enderman')
rodSpawn('minecraft:bone_block','minecraft:skeleton')
rodSpawn('minecraft:tnt','minecraft:creeper')
rodSpawn('minecraft:cobweb','minecraft:spider')
rodSpawn('immersiveengineering:balloon','minecraft:ghast')
rodSpawn('minecraft:hay_block','minecraft:cow')
rodSpawn('thermal:slag_block','minecraft:zombie')
rodSpawn('thermal:charcoal_block','minecraft:squid')
createRecipe('minecraft:wheat_seeds','minecraft:chicken')
rodSpawn('minecraft:wheat','minecraft:chicken')

//special cases:
function rodSpawnWithType(block,mob,type){
    BlockEvents.rightClicked(block, event => {
        if(event.item.id === 'kubejs:mob_spawner_rod'){
            event.player.mainHandItem.damageValue++;
            if(event.player.mainHandItem.damageValue>=16) event.player.mainHandItem.count--;
            event.block.set('minecraft:air');
            event.player.runCommandSilent(`summon ${mob} ${event.block.x} ${event.block.y} ${event.block.z} ${type}`)
        }
    })
}
//mooshreem
createRecipe(['minecraft:brown_mushroom','minecraft:red_mushroom'],'minecraft:mooshroom')
rodSpawnWithType('minecraft:brown_mushroom','minecraft:mooshroom','{Type:"brown"}')
rodSpawnWithType('minecraft:red_mushroom','minecraft:mooshroom','{Type:"red"}')

//sheep
createRecipe('#minecraft:wool','minecraft:sheep')
rodSpawnWithType('minecraft:white_wool','minecraft:sheep','{Color:0b}')
rodSpawnWithType('minecraft:orange_wool','minecraft:sheep','{Color:1b}')
rodSpawnWithType('minecraft:magenta_wool','minecraft:sheep','{Color:2b}')
rodSpawnWithType('minecraft:light_blue_wool','minecraft:sheep','{Color:3b}')
rodSpawnWithType('minecraft:yellow_wool','minecraft:sheep','{Color:4b}')
rodSpawnWithType('minecraft:lime_wool','minecraft:sheep','{Color:5b}')
rodSpawnWithType('minecraft:pink_wool','minecraft:sheep','{Color:6b}')
rodSpawnWithType('minecraft:gray_wool','minecraft:sheep','{Color:7b}')
rodSpawnWithType('minecraft:light_gray_wool','minecraft:sheep','{Color:8b}')
rodSpawnWithType('minecraft:cyan_wool','minecraft:sheep','{Color:9b}')
rodSpawnWithType('minecraft:purple_wool','minecraft:sheep','{Color:10b}')
rodSpawnWithType('minecraft:blue_wool','minecraft:sheep','{Color:11b}')
rodSpawnWithType('minecraft:brown_wool','minecraft:sheep','{Color:12b}')
rodSpawnWithType('minecraft:green_wool','minecraft:sheep','{Color:13b}')
rodSpawnWithType('minecraft:red_wool','minecraft:sheep','{Color:14b}')
rodSpawnWithType('minecraft:black_wool','minecraft:sheep','{Color:15b}')