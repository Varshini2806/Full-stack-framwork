AIM:
      To create a web application that allows users to Add, Update, and Deletestudent details using an HTML form, storing the data in MongoDB Atlas.

ALGORITHM:
STEP 1: Start the Process.
STEP 3: Create the MongoDB Atlas cluster and get the connection URI. Use this URI to
connect MongoDB in server.js via Mongoose.
STEP 4: Set up the Express server in server.js, configure middleware using body-parser, and
connect to MongoDB Atlas using Mongoose.
STEP 5: Create a Mongoose schema and model in models/Student.js to store student details
– name, age, and Email.
STEP 6: Design a form using HTML (public/index.html) to input student details (Name,
Age, Email) and send the data using POST method to /member.
STEP 7: Style the form and page using CSS (public/style.css) with a clean and responsive
layout for better user experience.
STEP 8: Define routes in server.js to:
• Serve the form via GET /
• Handle form submission and insert student record via POST /member
• View all students using GET /member
• Delete a student using GET /delete/:id
• Show a pre-filled form for editing using GET /member/:id
• Handle the update using POST /update/:id
STEP 9: In the /students GET route, apply logic to loop through student data and display
each student's Name, Age, and Email along with Update and Delete links.
STEP 10: Run the server using node server.js and open http://localhost:3000 in the browser
to test the form, view records, update, and delete.
STEP 11: Once the application works as expected, verify the inserted and updated entries in
the MongoDB Atlas cluster under the correct database and collection.
STEP 12: After testing, stop the server by pressing Ctrl + C in the terminal.

OUTPUT:

<img width="1600" height="900" alt="image" src="https://github.com/user-attachments/assets/9dd1d9bd-00e7-4a1b-9489-d82e04afdb45" />

<img width="1600" height="900" alt="image" src="https://github.com/user-attachments/assets/4f479c11-5fc2-4a05-9a0c-7e2a79fbc436" />

