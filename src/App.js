import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [pages, setPosts] = useState([])

  useEffect(() => {
    axios.get('http://localhost/wpapi/wp-json/wp/v2/pages?_embed')
      .then((res) => setPosts(res.data))
  }, [])

  const pagesJsx = pages.map((page) => (
    <li key={page.id} dangerouslySetInnerHTML={{ __html: page.content.rendered }}></li>
  ))

  return (
    <ul>{pagesJsx}</ul>
  )
}

export default App;
