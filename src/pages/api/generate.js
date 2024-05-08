import jwt from 'jsonwebtoken'

export async function GET(req, res) {
  const token = jwt.sign({ foo: 'bar' }, 'shhhhh')
  return new Response(token, {
    headers: {
      'content-type': 'text/plain',
    },
  })
}