function pie(flavours,targ1, targ2){
    let st = flavours.indexOf(targ1)
    let nd = flavours.indexOf(targ2)
    let newarr = flavours.splice(st, flavours.length - nd + 1)
    console.log(newarr);
}
pie(['Pumpkin Pie','Key Lime Pie','Cherry Pie','Lemon Meringue Pie','Sugar Cream Pie'],'Key Lime Pie','Lemon Meringue Pie')