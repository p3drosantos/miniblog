import './styles.css'

import React from 'react'

export const PostCard = ({cover, title, body, id}) => {
  return (
    <div className='post'>
    <img src={cover} alt={title} />
    <div className='post-content'>
    <h2>{title}</h2>
    <p>{body}</p>
    </div>
</div>
  )
}
