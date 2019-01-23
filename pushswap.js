// recupère les arguments
const args = process.argv.slice(2);

let la = args.map(function (el){
  return parseFloat(el);
});

let lb = [];

function sa(la, lb) {
  if (la.length > 1) {
    let tmp = la[0];

    la[0] = la[1];
    la[1] = tmp;
  }
  return "sa";
}

function sb(la, lb) {
  if (lb.length > 1) {
    let tmp = lb[0];

    lb[0] = lb[1];
    lb[1] = tmp;
  }
  return "sb";
}

function sc (la, lb) {
  sa(la, lb);
  sb(la, lb);
  return "sc";
}

function pa(la, lb) {
  if (lb.length > 0)
    la.unshift(lb.shift());
  return "pa";
}

function pb(la, lb) {
  if (la.length > 0)
    lb.unshift(la.shift());
  return "pb";
}

function ra(la, lb) {
  if (la.length > 0)
    la.push(la.shift());
return "ra";
}

function rb(la, lb) {
  if (lb.length > 0)
    lb.push(lb.shift());
  return "rb";
}

function rr(la, lb) {
  ra(la, lb);
  rb(la, lb);
  return "rr";
}

function rra(la, lb) {
  if (la.length > 0)
    la.unshift(la.pop())
  return "rra";
}

function rrb(la, lb) {
  if (lb.length > 0)
    lb.unshift(lb.pop())
  return "rrb";
}

function rrr(la, lb) {
  rra(la, lb);
  rrb(la, lb);
  return "rrc";
}



function pushSwap(la, lb) {
  while (la.length > 0){
    var min = la[0];
    var index_min = 0;
    for (var i = 1 ; i < la.length; i++){
      if(la[i]<min){
        min = la[i];
        index_min = i;
      }
    }
    while (la[0] != min){
      ret.push(ra(la, lb));
    }
    if (la[0] == min) {
      ret.push(pb(la, lb));
    }
  }
  while(lb.length != 0){
    ret.push(pa(la, lb));
  }
  return ret; 
}

let ret = [];

// Exemple si lancé avec ces arguments : $>node pushswap.js 1 2 3 4 5
pushSwap(la, lb);
console.log("La liste est rangée : " + la);
console.log("L'ordre de raisonnement est : " + ret.join(" "));
