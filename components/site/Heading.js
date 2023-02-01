import React from 'react'
import Link from 'next/link'

function Heading({ head }) {
    return (
        <div>
            <div class="col-12 mb-2 text-right">
                <h3 class="m-2">
                    <Link href="/" class="">
                        الوفاق الاخباري
                    </Link> |
                    <a href='#' class="color_main custom_font">
                        {head}
                    </a>
                </h3>
            </div>
        </div>
    )
}

export default Heading
