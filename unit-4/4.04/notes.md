# Using Objects in Javascript
name:value
name is a property
value is a property value

`var person = {
  userName:"kevin123",
  difficulty:"easy",
  scores:[20,40,50]
  highScore:function(){
    return Math.max(this.scores);
  }
};

\\this is the variable (person)

\\person.userName --> "kevin123"
\\person["userName"] --> "kevin123"`
still need to stringify and parse