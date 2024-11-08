const hollyHeroes = ["Spiderman", "IronMan", "Hulk"]
const realHeroes = ["Saktiman","Hulk", "Batman"]
 

hollyHeroes.push(realHeroes)
console.log(hollyHeroes);
const allHeroes = hollyHeroes.concat (realHeroes) //combine all array elements
console.log(allHeroes);

const newHeroes =[...realHeroes,...hollyHeroes] //combine all array elements
console.log(newHeroes);

