<<<<<<< HEAD
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

let orders = {};

app.post('/place-order', (req, res) => {
  const orderData = req.body;
  const orderId = Math.random().toString(36).substring(2, 10);
  orderData.orderId = orderId;
  orderData.statusIndex = 0;
  orderData.statusTimeline = [
    { label: 'Order Placed', desc: 'Your order has been placed successfully' },
    { label: 'Order Accepted', desc: 'Restaurant has accepted your order' },
    { label: 'Preparing Food', desc: 'The restaurant is preparing your delicious meal' },
    { label: 'On the Way', desc: 'Your order is being delivered to you' },
    { label: 'Delivered', desc: 'Enjoy your meal!' }
  ];
  orders[orderId] = orderData;
  res.json({ orderId });
});

app.get('/order-status/:orderId', (req, res) => {
  const order = orders[req.params.orderId];
  if (!order) return res.status(404).json({ error: 'Order not found' });
  res.json({
    orderId: order.orderId,
    statusIndex: order.statusIndex,
    statusTimeline: order.statusTimeline,
    total: order.total,
    address: order.address,
    items: order.items
  });
});

// Simulate status updates every 15 seconds
setInterval(() => {
  Object.values(orders).forEach(order => {
    if (order.statusIndex < order.statusTimeline.length - 1) {
      order.statusIndex += 1;
    }
  });
}, 15000);

app.listen(3000, () => console.log('Server running on port 3000'));
=======
import { registerRootComponent } from 'expo';

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
>>>>>>> 6412a747 (Created a new Expo app)
