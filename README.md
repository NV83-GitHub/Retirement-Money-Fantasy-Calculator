# Retirement-Money-Fantasy-Calculator

Made for fun as i was watching a youtube video on the "Fuck you money" concept lol, just to see how much money i would need to be able to sit back and relax on a beach somewhere.

I learned more about:

<ul>
  <li>using user input with input tag and .value</li>
</ul>

Issues i faced:

<ul>
  <li>I used .value directly at the end of my global variable let age = document.getElementById("age-el").value and it was returning an empty string, i finally understood that it was because at the moment of the variable declaration there was no value in the input, i had to instead age.value in the function triggered by the button, at that time there was a value given by the user, i guess i should go over global execution context, memory allocation phase and code execution phase again... </li>
  <li>Also i scratche my head for a few minutes because i forgot the defer attribute in my script tag in the header....</li>
</ul>

Could get better if :

<ul>
  <li>responsive design</li>
  <li>better contrast between font-color and background</li>
  <li>would take inflation into account</li>
  <li>type of the input set to number</li>
  <li>better styling overall</li>
</ul>
