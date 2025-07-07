AIM:
	To create a NodeJS server using Express that stores data from a form as a JSON file and displays it in another page.The redirect page should be prepared using Handlebars.

ALGORITHM:
STEP 1: Start the process.
STEP 2: Create a project folder and add views (for .hbs files) and public (optional for static files).	
STEP 3: Inside views, create form.hbs for the input form and data.hbs to display submitted data.
STEP 4: In the root folder, create server.js with Express logic, routing, and view rendering.
STEP 5: Create an empty data.json file with {} to store submitted data.
STEP 6: Run npm init -y in the terminal to initialize the Node.js project.
STEP 7: Install dependencies using npm install express body-parser hbs.
STEP 8:  Set up middleware, view engine, and routes for /, /submit, and /data in server.js.
STEP 9: Run the server using node app.js and open http://localhost:3000 in a browser.
STEP 10: Fill and submit the form, view saved data on /data, and stop the server when done.

OUTPUT:
![image](https://github.com/user-attachments/assets/131332b9-4d5f-4536-8fb7-dde349090988)
![image](https://github.com/user-attachments/assets/4c5810fe-98b8-487f-9357-6b90dfae85b8)

Result:
Thus the above program has been successfully verified and executed.
