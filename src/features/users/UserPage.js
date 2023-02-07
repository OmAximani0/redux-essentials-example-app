import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { selectUserById } from './userSlice'
import { selectAllPosts } from '../posts/postsSlice'

export const UserPage = ({ match }) => {
  const { userId } = match.params

  const user = useSelector((state) => selectUserById(state, userId))

  const postForUser = useSelector((state) => selectUserById(state, userId))

  const postTitles = postForUser.map((post) => (
    <li key={post.id}>
      <Link to={`/posts/${post.id}`}>{post.title}</Link>
    </li>
  ))

  return (
    <sectiom>
      <h2>{user.name}</h2>

      <ul>{postTitles}</ul>
    </sectiom>
  )
}
