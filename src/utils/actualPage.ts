import { useEffect, useState } from "react";

// export const actualPage = window.location.pathname;

export function actualPage(){
  const [page, setPage] = useState("")

  useEffect(()=>{
    let actualPage = window.location.pathname

    setPage(actualPage)
  },[actualPage])

  return page
}
