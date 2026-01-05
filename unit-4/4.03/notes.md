# Storing Data Structures as Local Storage
So this is why typescript exists...

`var listOfScores = [20,45,10,344];
localStorage.setItem("scores",listOfScores);`
shows up as  "20,45,10,344" (a string)

`localStorage.setItem("scores", JSON.stringify(listOfScores));`
shows up as "[20,45,10,344]" (still a string)
`var resScores = JSON.parse(localStorage.getItem("scores"));`
shows up as [20,45,10,344] (not a string)