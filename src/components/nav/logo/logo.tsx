import React from 'react'
import Image from "next/image";

const Logo = () => {
  return (
    <div>
        <Image
            src="/logo.png"
            alt='logo'
            width={100}
            height={100}
            className="rounded-lg"
        />
    </div>
  )
}

export default Logo;