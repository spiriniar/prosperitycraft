ItemEvents.modification(event => {
    ["alchemical","iron","copper","gold","lead","silver","aluminium","nickel","uranium","osmium","zinc","tin","cobalt"].forEach(metal => {
        event.modify(`malum:${metal}_impetus`,item =>{
            item.maxDamage=52;
        })
    })
})