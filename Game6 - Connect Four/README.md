One player is red, second player is blue, your goal is to match 4 of your colored balls in any direction (horizontal, vertical or diagonal).

NOTES:

Checking for wins is kind of lazy:
  - I've created an array with all possible win combinations (since the grid is 7x6 so not too big)
  - Then after every players move, I loop over each possible win combination and check if it appeared on board

Will probably try to figure out a more clever way to do it and change it in the future.

https://g6-connect-four.netlify.app/ (or through the landing page in the main repository)
