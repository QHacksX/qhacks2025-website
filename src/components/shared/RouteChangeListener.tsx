"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function RouteChangeListener() {
  const pathname = usePathname();
  const [prevPath, setPrevPath] = useState("/");

  useEffect(() => {
    if (pathname === "/") {
      if (prevPath !== "/") {
        window.location.reload();
      }
    }
    setPrevPath(pathname);
  }, [pathname, prevPath]);

  return <></>;
}
