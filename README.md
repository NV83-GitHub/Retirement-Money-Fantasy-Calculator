# Retirement-Money-Fantasy-Calculator

Made for fun as i was watching a youtube video on the "Fuck you money" concept lol, just to see how much money i would need to be able to sit back and relax on a beach somewhere.

I learned more about using user input with the .value , i had problems initially because i was using le .value directly in the global variable document.getElementById("").value
but it returned an empty string, i finally understood it was because there were no value yet when the variable was declared, i needed to use the .value in the function as when 
the function is called there is normally an input by the user.

also i forgot to put the defer attribute in my script tag in the html lol , it took me a few minutes of head scratching for that one too ..

Could get better if :

-responsive design
-better contrast between font-color and background
-would take inflation into account
-type of the input set to number
-better styling overall

