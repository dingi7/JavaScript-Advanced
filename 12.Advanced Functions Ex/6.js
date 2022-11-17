function solution(arg) {
  switch (arg) {
    case "upvote":
      this.upvotes++;
      break;
    case "downvote":
      this.downvotes++;
      break;
    case "score":
      let result = [];
      let totalVotes = this.downvotes + this.upvotes;
      let higher =
        this.upvotes > this.downvotes ? this.upvotes : this.downvotes;
      let percent = Math.ceil(higher * 0.25);
      let upV = this.upvotes + percent;
      let downV = this.downvotes + percent;
      let balance = this.upvotes - this.downvotes;
      let p = (100 * this.upvotes) / totalVotes;
      let rating = "";
      if (totalVotes < 10) {
        rating = "new";
      } else if (p > 66) {
        rating = "hot";
      } else if (balance >= 0 && totalVotes > 100) {
        rating = "controversial";
      } else if (balance < 0) {
        rating = "unpopular";
      } else {
        rating = "new";
      }
      if (totalVotes > 50) {
        result.push(upV);
        result.push(downV);
      } else {
        result.push(upV - percent);
        result.push(downV - percent);
      }
      result.push(balance);
      result.push(rating);
      return result;
  }
}
let post = {
  id: "3",
  author: "emil",
  content: "wazaaaaa",
  upvotes: 100,
  downvotes: 100,
};
solution.call(post, 'upvote'); 
solution.call(post, 'downvote')
console.log(solution.call(post, 'score'))
solution.call(post, 'downvote')
console.log(solution.call(post, 'score'));