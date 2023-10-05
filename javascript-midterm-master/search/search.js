function search(nameList, searchTerm) {
    let theSearching = searchTerm.toLowerCase();
    let reggy = new RegExp(`\w*${theSearching}\w*`, "gmi");
    
    const lowerCased = nameList.map((ahhhh) => ahhhh.toLowerCase());
    //everything is still here
    //console.log(lowerCased)
    const myResult = lowerCased.filter((ahhh) => reggy.test(ahhh)); //lost numbers and weldon here
    //let weldonSad = reggy.test(lowerCased[9]); // it literally says true but won't show up what
    //where did numbers and weldon go??? well, idk

    const upperCasedFirst = myResult.map((ahh) => ahh[0].toUpperCase() + ahh.slice(1));
   // console.log(upperCasedFirst)
    return upperCasedFirst;
}
//search doesn't seem like a real word anymore 
//both are now lowercased
//how do i get it back uppercased???
//i lost weldon :skull:
//i nearly did this idk why its not working
//besides the last one ofc, idk whats up with that