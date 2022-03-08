// 1
export default function contarOvejas(ovejas) {
  return ovejas.filter((a)=>{

    return a.color == 'rojo'
    && (a.name.includes('n') || a.name.includes('N'))
    && (a.name.includes('a') || a.name.includes('A'))
  })
}

// 2
export default function listGifts(letter) {
 let  obj = {}
 letter.split(" ").forEach(item =>{
   if(item[0] != '_' && item != ""){
     if(obj[item] != undefined) obj[item]+=1
     else obj[item] = 1;
   }
 })

 return obj
}

// 3
export default function isValid(l) {
 if( l.includes('[') || l.includes('{') ) return false
 l = l.split(" ")
 let r = ""
 for(let i = 0; i < l.length;i++){
   r = l[i]
   if(r[0] == ')' || r[1] == ')') return false
   if(r[0] == '(' && r[r.length - 1] != ')') return false
   if(r.substring(1,r.length -1).includes('('))  return false
 }
 return true
}

// 4
function strRepet(s,cant){
  let str = ""
  for(let i = 0; i < cant ; i++) str += s
  return str
}
export default function createXmasTree(h) {
  let str = ""
  for(let i = 0; i < h; i++){
    str += strRepet("_",((1+2*h)-(1+2*i))/2 -1);
    str += strRepet("*", 1+2*i);
    str += strRepet("_",((1+2*h)-(1+2*i))/2 -1);
    str += "\n"
  }
  str += strRepet("_",((1+2*(h-2)))/2 ) + "#"
  str += strRepet("_",((1+2*(h-2)))/2 ) + "\n"
  str += strRepet("_",((1+2*(h-2)))/2 ) + "#"
  str += strRepet("_",((1+2*(h-2)))/2 )
  console.log(str)
  return str
}

// 5
export default function daysToXmas(date) {
  let n = new Date("Dec 25, 2021")
  return Math.ceil((n.getTime() - date.getTime()) / 86400000)
  }

// 6
export default function sumPairs(numbers, result) {

  for(let i = 0; i<numbers.length;i++){
    for(let j=i+1;j<numbers.length;j++){
      if(numbers[i]+numbers[j] == result)
       return [numbers[i],numbers[j]]
    }
  }
  return null
}

// 7
export default function contains(store, product) {
  let r = JSON.stringify(store).includes(':"'+product+'"')
  return r
}

// 8
export default function maxProfit(prices) {
  console.log(prices)
  let g = []
  for(let i = 0; i < prices.length; i++){
    for(let j = i; j < prices.length; j++){
      g.push(prices[j] - prices[i])
    }
  }
  let r = Math.max(...g)
  return (r==0)?-1:r;
}

// 9
export default function groupBy(c, p) {
  let ret = {}
    for(let i = 0; i < c.length; i++){
      let key = (typeof(p) != "function")?c[i][p]:p(c[i])
      if(ret[key]==undefined)ret[key] = [c[i]]
      else ret[key].push(c[i])
    }
    return ret;
}

 // 10
 export default function getCoins(change) {
   let coins = [1,2,5,10,20,50];
   let uses = [0,0,0,0,0,0];

   let index = 5;
   while (change != 0) {
     while (change >= coins[index]) {
       change = change - coins[index];
       uses[index]+=1;
     }
     index-=1;
   }
   return uses
}

// 11

  // para 3 pelis
  // 250  +  12  * 0.75  +   12  * 0.75 * 0.75  +  12 * 0.75 * 0.75 * 0.75
  // 250  +  12  * 0.75   +   12  * 0.75**2     +  12 * 0.75**3
  // 250  +  12*[ 0.75   +  0.75**2  + 0.75**3]

// Ademas
// r + r**2 + r**3 + ... + r**n
// = (r-(r**(n+1)))/(1-r)
// demostracion por inducion



  export default function shouldBuyFidelity(times) {
    return 250 + 12*[(0.75-(0.75**(times+1)))/(1-0.75)]  <= 12 * times
  }

// 12

export default function getMinJump(obstacles) {
  let ljump = 1;
  let pos = 0;
  while (pos <= Math.max(...obstacles)) {
    console.log(pos,ljump);
    pos += ljump;
    if(obstacles.includes(pos)){
      pos = 0;
      ljump +=1;
    }
  }
  return  ljump;
}

// 13
function strRepet(s,cant){
  let str = ""
  for(let i = 0; i < cant ; i++) str += s
  return str
}

export default function wrapGifts(gifts) {
  let l = 0;
  gifts = gifts.map((r)=>{
    l = r.length;
    return "*"+r+"*"
  })
  return [strRepet("*",l+2),...gifts,strRepet("*",l+2)]
}

// 14
export default function missingReindeer(ids) {
  ids = ids.sort((a,b)=>a-b);
  if(ids[0]!=0)return 0
  for (let i = 0; i <=  ids.length; i++) {
    console.log(i)
    if(i+ 1 != ids[i+1]){
      console.log(">",i+1)
      return i+1;
    }
  }
}

// 15
export default function checkSledJump(heights) {
  console.log(heights)
  let i = 0;
  let l = heights.length-1;

  // subida
  while (i<l && heights[i] < heights[i + 1])i++;
  if(l==i || heights[i]==heights[i + 1]) return false;
  console.log(i)
  // bajada
  while (i<l && heights[i] > heights[i + 1])i++;
  if(heights[i] <= heights[i + 1]) return false;
  return true;
}

// 16
export default function decodeNumber(symbols) {

  let res = 0;
  let key = {
    ".":1,
    ",":5,
    ":":10,
    ";":50,
    "!":100
  }
  for (let i = 0; i < symbols.length  ; i++) {
    if(key[symbols[i]] < key[symbols[i+1]]) res -= key[symbols[i]];
    else  res += key[symbols[i]];
  }
  console.log(res)
  return  res;
}

// 17
export default function countPackages(carriers, carrierID) {
  let carrier = carriers.filter((c)=>{
    return c[0]==carrierID;
  })[0]

  if(carrier[2].length == 0) return carrier[1];

  let res = carrier[1];
  for (let i = 0; i < carrier[2].length; i++) {
    res += countPackages(carriers, carrier[2][i]);
  }
  console.log(res)
  return res;
}

// 18
export default function fixFiles(files) {
  let dic = {};
 for (let i = 0; i < files.length; i++) {
   if(dic[files[i]] == undefined){
     dic[files[i]] = 0;
   }
   else {
     dic[files[i]] += 1;
     files[i] = files[i]+"("+dic[files[i]]+")"
   }
 }
 return files;
}

// 19
export default function learn(time, courses) {

 let comb = []
 let i = 0;
 let j = 0;
 for (i = 0; i < courses.length; i++) {
   for (j = i+1; j < courses.length; j++) {
     comb.push([i,j,courses[i] + courses[j]])
   }
 }

 comb = comb.sort((a,b)=>{
   return b[2]-a[2]
 })
 console.log(comb)

 for (let i = 0; i < comb.length; i++) {
   if(comb[i][2] <= time){
     console.log("ret>",[ comb[i][0], comb[i][1] ])
     return [comb[i][0], comb[i][1] ]
   }
 }
 console.log("null")
 return null;
}

// 20
export default function pangram(letter){

  letter = eliminarDiacriticosEs(letter )
  letter = letter.toLowerCase();

  console.log(letter);
  let abc = "abcdefghijklmnñopqrstuvwxyz";
  let bool = true;
  for (let i = 0; i < abc.length; i++) {
    bool = bool && ( letter.includes(abc[i]) );
  }
  return  bool;
}

function eliminarDiacriticosEs(texto) {
    return texto
           .normalize('NFD')
           .replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,"$1")
           .normalize();
}

// 21
export default function canCarry(capacity, trip) {
  console.log(capacity,trip)
  let nodos = [];
  for (let i = 0; i < trip.length; i++) {
    if(!nodos.includes(trip[i][1])) nodos.push(trip[i][1])
    if(!nodos.includes(trip[i][2])) nodos.push(trip[i][2])
  }
  nodos.sort((a,b)=> a - b)
  let nitemsactual = 0;
  for (let i = 0; i < nodos.length; i++) {
    let nodo = nodos[i];
    for (let i = 0; i < trip.length; i++) {
      if(trip[i][1] == nodo) nitemsactual += trip[i][0]
      if(trip[i][2] == nodo) nitemsactual -= trip[i][0]
    }
    console.log(nodo,nitemsactual)
    if(nitemsactual > capacity) return false
  }
  console.log("true")
  return true;
}

// 22

export default function countDecorations(bigTree) {
  if(bigTree == null)   return 0;
  return bigTree.value + countDecorations(bigTree.left) + countDecorations(bigTree.right);
}

// 23
export default function canReconfigure(from, to) {
 if(from.length != to.length) return false
 let dic = {}
 for (var i = 0; i < from.length; i++) {
   if( from[i] == to[i] ||
       (dic[from[i]] == undefined && dic[to[i]] == undefined) ||
       dic[from[i]] == to[i]
      ){
       dic[from[i]] = to[i]
       dic[to[i]] = from[i]
   }else return false
 }
 return true;
}

// 24
export default function checkIsSameTree(treeA, treeB) {
  if(treeA == null && treeB == null ) return true
  if(treeA == null || treeB == null) return false
  return (treeA.value == treeB.value) && checkIsSameTree(treeA.left, treeB.left) &&  checkIsSameTree(treeA.right, treeB.right)
}

// 25

export default function canMouseEat(direction, game) {
  console.log(game,direction);
  for (let i = 0; i < game.length; i++) {
    for (let j = 0; j < game[i].length; j++) {
      if(game[i][j] == 'm'){
        switch (direction) {
          case "up": return game[i-1] != undefined && game[i-1][j] == '*'
          case "down": return game[i+1] != undefined && game[i+1][j] == '*'
          case "right": return game[i] != undefined && game[i][j+1] == '*'
          case "left": return game[i] != undefined && game[i][j-1] == '*'
          default: return false
        }
      }
    }
  }
}
