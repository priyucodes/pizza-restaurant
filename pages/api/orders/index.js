import dbConnect from '../../../lib/mongo';
import Order from '../../../models/Order';

const handler = async (req, res) => {
  const { method } = req;

  await dbConnect();
  console.log('connectted', method);
  if (method === 'GET') {
    console.log('GET');
    try {
      const orders = await Order.find();
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === 'POST') {
    console.log('You reached POST');
    try {
      const order = await Order.create(req.body);
      res.status(201).json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  res.json({ status: 'alive' });
};

export default handler;
