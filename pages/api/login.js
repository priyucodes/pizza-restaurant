import cookie from 'cookie';
const handler = (req, res) => {
  if (req.method === 'POST') {
    const { username, password } = req.body;
    if (
      username.trim() === process.env.USER &&
      password.trim() === process.env.PASSWORD
    ) {
      res.setHeaders(
        'Set-Cookie',
        cookie.serialize('token', process.env.TOKEN, {
          maxAge: 60 * 60,
          sameSite: 'strict',
          path: '/',
          httpOnly: true,
          secure,
        })
      );
      res.status(200).json({ message: 'sucess' });
    } else {
      res.status(400).json({ message: 'Invalid credentials' });
    }
  }
};
export default handler;
