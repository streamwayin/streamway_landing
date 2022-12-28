import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Design of Main blog page 

const Post = ({post}:{post:any}) => {
  return (
    <div className='mt-10 md:mt-0 mx-5'>
      <Link href={`/blog/${post.slug}`} className="space-y-3">
        <Image src={post.frontmatter.cover_image} width={500} height={10} className="w-full" alt=""/>

      <div className='text-black text-lg md:text-xl'>Posted on {post.frontmatter.date}</div>

      <h3 className='md:text-2xl leading-5 f'>{post.frontmatter.title}</h3> 
      <div className='w-fit p-2 mt-20 rounded-md text-white'>{post.frontmatter.blog_writer}</div>   
      </Link>

    </div>
  )
}

export default Post