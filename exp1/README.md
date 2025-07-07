AIM:
To create a NodeJS server that serves static HTML and CSS files to the user without
using Express.

ALGORITHM:
STEP 1: Start the Process.
STEP 2: Create a project folder to hold all necessary files.
STEP 3: index.html – the structure of your portfolio. style.css – the visual styling of the
page.
STEP 4: Create server.js in the same folder to write the Node.js HTTP server logic.
STEP 5: Import built-in Node.js modules: http, fs, and path.
STEP 6: Define MIME types using an object in server.js to correctly serve HTML, CSS, images, etc.
STEP 7: Map incoming requests to appropriate file paths (e.g., / maps to index.html).
STEP 8: Use fs.readFile() to read and serve the requested file or return a 404 error if not
found.
STEP 9: Run the server by executing node server.js in your terminal.
STEP 10: Visit http://localhost:3001 in your browser to view and test the site. Stop the server
using Ctrl + C after verifying that the webpage and styles load correctly.

output:
![image](https://github.com/user-attachments/assets/1c976bfe-0ed2-4d84-afa3-97d2961c0171)

Result:
Thus the above program has been successfully verified and executed
