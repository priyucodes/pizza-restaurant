import cookie from 'cookie';
const handler = (req, res) => {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    if (
      username.trim() === process.env.ADMIN_USER &&
      password.trim() === process.env.ADMIN_PASSWORD
    ) {
      res.setHeader(
        'Set-Cookie',
        cookie.serialize('token', process.env.TOKEN, {
          maxAge: 60 * 60,
          sameSite: 'strict',
          path: '/',
          httpOnly: true,
        })
      );
      return res.status(200).json({ message: 'success' });
    } else {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
  }
};
export default handler;
