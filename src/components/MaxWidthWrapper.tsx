import { ReactNode } from "react"

const MaxWidthWrapper = ({children}:{children:ReactNode}) => {
  return (
    <div className="min-w-screen  bg-[url(https://oneqid.com/wp-content/uploads/2023/09/grid-for-video.png)] bg-contain bg-center">
      <div className="w-full h-full bg-black/80 px-6">

      {children}
      </div>
    </div>
  )
}

export default MaxWidthWrapper
