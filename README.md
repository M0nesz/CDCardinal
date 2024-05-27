Setup: 
  1. download MongoDB if not installed: https://www.mongodb.com/try/download/community
      a. add MondgoDB to path if it isn't added File explorer>right click on This PC>Propertities>Advanced system settings>Advanced>Environment Variables>System Variables>Double click path>
         new and type the route of the installation folder something like this: C:\Program Files\MongoDB\Server\{version}\bin (replace version with the actual version folder name)
  3. Download Visual Studio Code if not installed
  4. Open project folder in VS code
  5. Open terminal (ctrl+ö)
  6. Type npm init -y 
  7. Type npm install express mongoose body-parser
  8. Type mongod --dbpath /path/to/your/database  In my instance for example: mongod --dbpath C:/Users/Monesz/Desktop/PCCardinal/db
  9. If everything goes well you can start the app by typing node server.js and open it in a browser through http://localhost:3000

     Az adatbázist le lehet ellenőrizni a http://localhost:3000/contacts oldalon
