TakeOutApp
A simple food ordering and delivery tracking application with:
Frontend: React Native (Expo) for mobile and React (with React Leaflet) for web
Backend: Node.js + Express

📁 Project Structure
TakeOutApp/
  food-frontend/    React Native (Expo) app for mobile + React web app
  food-backend/     Node.js/Express backend
  
🚀 Features
Checkout page: Place a food order with address and payment options
Order status page: See live status updates (Order Placed → Delivered)
Delivery tracking: Animated map with bike marker moving from restaurant to user (mobile: react-native-maps, web: react-leaflet)
Mock backend: Simulates order status progression

🛠️ Setup Instructions
Clone the Repository
git clone https://github.com/aamalrxj/TakeOutApp.git
cd TakeOutApp

3. Backend Setup (food-backend)
Install Dependencies
cd food-backend
npm install

Start the Backend
node index.js
The backend runs on http://localhost:3000

4. Frontend Setup (food-frontend)
Install Dependencies
cd ../food-frontend
npm install

For Mobile (Expo Go or Emulator)
npx expo start
Scan the QR code with Expo Go or run on an emulator.

For Web
npx expo start --web
Open http://localhost:19006 in your browser.

For Standalone React Web (with React Leaflet)
If you are using a separate React app for web, run:
npm start

4. Environment Variables
For local development, ensure your frontend fetches from http://localhost:3000.

If using a physical device, replace localhost with your PC's LAN IP in API URLs.
🗺️ Map Tracking
Mobile: Uses react-native-maps for animated bike delivery.
Web: Uses react-leaflet and OpenStreetMap for bike animation.
The map is displayed in a card and the bike moves from restaurant to user location.

📦 Project Scripts
Backend
npm install	Install dependencies
node index.js	Start backend server

Frontend
npm install	Install dependencies
npx expo start	Start Expo (mobile/web)
npx expo start --web	Start Expo in web mode
npm start	Start React web app (if standalone)

📝 Folder Structure
text
TakeOutApp/
  food-frontend/
    App.js
    CheckoutPage.js
    OrderStatus.js
    DeliveryMap.native.js
    DeliveryMap.web.js
    ...
  food-backend/
    index.js
    package.json
    ...
🧹 .gitignore Example
At the root and in each subfolder:
text
node_modules/
npm-debug.log
.env
.expo/
.expo-shared/
dist/
web-build/

🧑‍💻 Contributing

Fork the repo
Create your feature branch (git checkout -b feature/your-feature)
Commit your changes (git commit -am 'Add feature')
Push to the branch (git push origin feature/your-feature)
Create a new Pull Request

AI Used:
Perplexity AI
