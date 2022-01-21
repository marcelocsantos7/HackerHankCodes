let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

function sockMerchant(n, arr) {
    let count = 0;
    let obj_socks = {};
    for(let sock of arr){
        obj_socks[sock] = obj_socks[sock] + 1 || 1;
    }
    
    for (let sock in obj_socks) {
      obj_socks[sock] = Math.floor(obj_socks[sock] / 2);
      count += obj_socks[sock];
    }
  
    return count;
  }

console.log(sockMerchant(9, ar));