export async function get (req) {
  let count = req.session.count || 0
  return {
    json: { count }
  }
}

