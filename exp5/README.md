AIM:
	To Create a Todo application using AngularJS Store the data to a JSON file using a simple NodeJS server and retrieve the information from the same during page reloads..

ALGORITHM:
STEP 1: Open a text editor such as Visual Studio Code and create a new HTML file for the frontend.
STEP 2: Include the AngularJS library using a CDN link in the <head> section of the HTML file to enable AngularJS functionality.
STEP 3: Define the root element of the AngularJS application using the ng-app directive to bind AngularJS to a part of the HTML document.
STEP 4: Design the user interface with:
•   A textbox for entering tasks (bound to ng-model="newTask").
•   A button for adding or updating a task (inside an ng-submit form).
•   A dynamic list of todo items (ng-repeat="task in tasks").
•   Edit and Delete buttons beside each item to perform updates.
STEP 5: Create an AngularJS module and controller inside a <script> block to handle application logic.
STEP 6: Inside the controller: Initialize an array to store todo items.Define functions to add a new item, delete an item, and mark an item as completed. Use AngularJS data binding to update the view automatically when the data changes.
STEP 7: Set up a simple Node.js server using Express: Create a server.js file.Use Express to serve the HTML file to the browser.
STEP 8: Inside the AngularJS controller, use the $http service to:Fetch the todo list from the server when the page loads. Send updated todo data to the server whenever a change is made.
STEP 9: Create a todos.json file in the project directory to store the list of todos in JSON format. This acts as the app's data storage.
STEP 10: Run the Node.js server using the terminal. The server will host the HTML file and handle saving and loading todo data.



OUTPUT:

<img width="670" height="377" alt="image" src="https://github.com/user-attachments/assets/27eccc79-68b8-4d47-b88c-0639b899171a" />
<img width="940" height="530" alt="image" src="https://github.com/user-attachments/assets/54a4e612-6003-42cb-be57-87b48ca2b3d9" />
