export async function post (req) {
  let count = req.session.count || 0
  count += 1
  return {
    session: { count },
    json: { count },
    location: '/'
  }
}