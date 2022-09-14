import { supabase } from '../../utils/supabase'

export const config = {
  runtime: 'experimental-edge',
}

const fetchNotesEdge = async () => {
  const { data, error } = await supabase
    .from('notes')
    .select('*')
    .order('created_at', { ascending: true })

  if (error)
    return new Response(JSON.stringify(`${error.message}: ${error.details}`), {
      status: 401,
      headers: {
        'content-type': 'application/json',
      },
    })

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'content-type': 'application/json',
    },
  })
}

export default fetchNotesEdge
