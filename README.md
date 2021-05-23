# employee-management-system
A command line application to manage a company's employees using node, inquirer, and MySQL

## Description
---



## Screenshots
---
The following images show the web application's appearance and functionality: 
![Screenshot showing the inquirer prompts](./images/screenshot-1.png)
![Screenshot showing an example of the table that is output](./images/screenshot-2.png)


## Tools & Technologies
---
    * I used a queryHandler function to minimise the repetition in the code 
    * I needed to use a callback function to bring in the array data before then using that data in the choices of my prompts
    * I had an issue with promptHandler being a circular reference so I created confirmPrompt to handle the return or exit
    * I used dotenv to hide my personal login details


## Installation
---
You can view the project on my github repo (link below).  
To do this you will need to clone repository, open the server.js file in integrated terminal and enter 'npm i' to install dependancies.  Use the sql, and seeds files in db folder to create the database.  From there you can run 'npm start' in terminal and the command line prompts will begin in terminal.  

## Questions?
---
  If you have any questions about this project, please contact me directly on [email](mailto:catormerod@gmail.com). You can view more of my projects at [Github](https://github.com/catormerod) or this specific project at [Note Taker](https://github.com/CatOrmerod/employee-management-system). 
