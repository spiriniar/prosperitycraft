ServerEvents.recipes(event => {
    event.remove({mod: "infused_crystals_2"});
    ['ironium','coalium','redstonium','diamondium','emeraldium','goldium','lapisium'].forEach(crystal => {
        event.shaped(`infused_crystals_2:${crystal}_block`,[
            'AAA','AAA','AAA'
        ],{
            A:`infused_crystals_2:${crystal}`
        })
        event.shapeless(Item.of(`infused_crystals_2:${crystal}`,9),[
            `infused_crystals_2:${crystal}_block`
        ])
        event.shaped(`infused_crystals_2:infused_${crystal}_block`,[
            'AAA','AAA','AAA'
        ],{
            A:`infused_crystals_2:infused_${crystal}`
        })
        event.shapeless(Item.of(`infused_crystals_2:infused_${crystal}`,9),[
            `infused_crystals_2:infused_${crystal}_block`
        ])
        event.custom({
            type:"powah:energizing",
            ingredients:[
                {
                    item:`infused_crystals_2:${crystal}`
                },
                {
                    item:'malum:ether'
                }
            ],
            energy:500000,
            result:{
	            item:`infused_crystals_2:infused_${crystal}`,
                count:1
            }
        })
    })
})