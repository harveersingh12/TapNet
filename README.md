# TapNet

TAPNET LLC is a NFC business card company built as a university project in the module Product Design to Online Business.
It is a product-service-system (PSS) in which a physical NFC business card is paired with this application, a contact management system. 
The current app is an MVP, it contains minimal functionality, it was used simply to demonstrate the essence of the idea.
It has a Spring boot backend with Firebase as the database, and a React frontend.

To start the application and use it on your phone (only supported on Android Chrome) follow these steps:
1) Start TapNetApplication, check that Tomcat is running on port 8080
2) Open the terminal integrated in the IDE and navigate to the React frontend with thhis command: cd src/main/resources/static/frontend
3) Use the command "npm start" to launch the frontend
4) Go to command prompt and run the following: ngrok http 3000 --host-header="localhost:3000"
5) Copy the HTTPS link and open it in Chrome
