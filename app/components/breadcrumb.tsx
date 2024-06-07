import type { Navigation } from "@/app/interfaces/navigation"
import { HomeIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import type React from "react"

export function Breadcrumb({
  crumb,
}: { crumb: Navigation }): React.JSX.Element {
  return (
    <div className="text-sm breadcrumbs">
      <ul>
        <li>
          <Link href="/">
            <HomeIcon className="size-5 mr-1 text-primary" />
            ホーム
          </Link>
        </li>
        <li>
          <Link href={crumb.href}>
            <crumb.icon className={`size-5 mr-1 ${crumb.color}`} />
            {crumb.name}
          </Link>
        </li>
      </ul>
    </div>
  )
}
