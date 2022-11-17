
function sort(arr, arg) {
    class Ticket {
        constructor(destination, price, status) {
          this.destination = destination;
          this.price = price;
          this.status = status;
        }
      }
  let result = [];
  for (let ar of arr) {
    let [destination, price, status] = ar.split("|");
    let ticket = new Ticket(destination, price, status);
    result.push(ticket);
  }
  switch (arg){
    case "destination":
        result.sort((a, b) => {
            let fa = a.destination.toLowerCase(),
              fb = b.destination.toLowerCase();
        
            if (fa < fb) {
              return -1;
            }
            if (fa > fb) {
              return 1;
            }
            return 0;
          });
          break;
    case "price":
        result.sort((a,b) => a.price-b.price)
        break;
    case "status":
        result.sort((a, b) => {
            let fa = a.status.toLowerCase(),
              fb = b.status.toLowerCase();
        
            if (fa < fb) {
              return -1;
            }
            if (fa > fb) {
              return 1;
            }
            return 0;
          });

  }
  return result
}

console.table(sort(
    ['Philadelphia|94.20|available',

    'New York City|95.99|available',
    
    'New York City|95.99|sold',
    
    'Boston|126.20|departed'],
    
    'status'
));
