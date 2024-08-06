import Image from "next/image"
import Link from "next/link"
import type { JSX } from "react"

export function Footer(): JSX.Element {
  return (
    <footer className="bg-base-300 flex footer items-center justify-center p-4 text-base-content">
      <aside>
        <p>Copyright © Open Up Group Inc. All rights reserved.</p>
      </aside>
      <nav>
        <Link
          href="https://github.com/OpenUp-LabTakizawa/homepage"
          target="_blank"
        >
          <Image src="/github-mark.svg" alt="GitHub" width={24} height={24} />
        </Link>
      </nav>
    </footer>
  )
}
