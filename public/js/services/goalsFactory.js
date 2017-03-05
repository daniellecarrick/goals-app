app.factory('goalsFactory', function(){
  var goals = [
  {
    goal: "Hike the PCT",
    type: "travel",
    description: "Cheryl strayed is BAE",
    image: "http://lorempixel.com/400/300/cats/"
  },
  {
    goal: "Start my own business",
    type: "career",
    description: "Time to put the business degree to use",
    image: "http://lorempixel.com/400/300/cats/"
  },
  {
    goal: "Run a marathon",
    type: "personal",
    description: "The more you run, the more you can eat",
    image: "http://lorempixel.com/400/300/cats/"
  },
  {
    goal: "Plant a garden",
    type: "project",
    description: "Plants are dope",
    image: "http://lorempixel.com/400/300/cats/"
  }
  ];

  var completed = [];

  return {
    goals: goals,
    completed: completed
  };
});