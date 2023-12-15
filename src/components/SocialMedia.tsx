import React from 'react'
import { SocialButton } from './SocialButton'
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react'

function SocialMedia() {
  return (
    <div className="w-full flex flex-col gap-4">
    <div className="flex w-full items-center justify-center gap-4 md:gap-8 mt-4">
      <div>
        <SocialButton url="https://www.linkedin.com/in/maycomwill/">
          <Linkedin />
        </SocialButton>
      </div>
      <div>
        <SocialButton url="https://twitter.com/maycomwillams">
          <Twitter />
        </SocialButton>
      </div>
      <div>
        <SocialButton url="https://github.com/maycomwill">
          <Github />
        </SocialButton>
      </div>
    </div>
  </div>
  )
}

export default SocialMedia
