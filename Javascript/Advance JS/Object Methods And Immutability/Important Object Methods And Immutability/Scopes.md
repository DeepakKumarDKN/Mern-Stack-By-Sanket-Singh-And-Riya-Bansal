Scope tells us the visibility and accessibility of a particular function and variable. 
Scope ke vajah se hame yeah pata chalta hai ki hamara jo bhi function ho ya phir koi bhi variable ho woh actually kahan present hai. 

So Scope is used to figure out where our function/ variable is accessible or visible.

But do we know how the Scoping Mechanism works in JavaScript. 

In every Language Scope works very differently so don't compare with other languages like Python and Java (`har  language ka apna allag allag tarika hota hai`)

But before learning about Scoping Mechanism We need to have some  basic knowledge about Compilation and interpretation languages.

Most of the languages are divided into two categories
1. Complied Languages
2. Interpreted Languages.

But Is JavaScript a complied language or interpreted language.? 
 
#### Compiled Language
Example of compiled languages are **C** and **C++** etc.
To run code of any complied language we need a software called Complier.

Compiler takes the whole code, analyses it for error, if there is no error then it will give us an executable binary, but if there is any single error than no executable will be made and it throws the error

`sara ka sara code leke check karega ki kya koi error hai yua nahi aggar nahi hai then woh apko ek file dega jo ki hoga binary file aur aggar koi error hai toh woh apko koi binary file nahi dega sidha error show karega
`
`aggar hame 100 line ki code lika hai aur us mein se 100th line mera galat hai baki sab thik hai upto 99th then also it will not execute and throw us an error.`

![[Pasted image 20240907171246.png]]
#### Interpreted Languages
It execute the code line by line until it finds any error, but if it finds any error then it will automatically stops the execution

#### Hybrid Language
This is a kind of language which use both compilation and interpretation for final execution of code. for example Python, JavaScript, Java.
![[Pasted image 20240907171730.png]]