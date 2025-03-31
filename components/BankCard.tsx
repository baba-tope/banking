'use client'

import { formatAmount } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BankCard = ({ account, userName, showBalance = true }: CreditCardProps) => {
  return (
    <div className="flex flex-col">
        <Link
            href="/" 
            className="bank-card"
        >
            <div className="bank-card_content">
                <div>
                    <Image
                        src="icons/capital-one.svg"
                        width={60}
                        height={24}
                        alt="bank-1-logo"
                    />
                </div>
                <article className="flex flex-col gap-2">
                    <p className="text-10 font-semibold tracking-[1.1px] text-white">
                        •••• <span className="text-14">1234</span>
                    </p>
                </article>
            </div>

            <div className="bank-card_icon">
                <Image
                    src="icons/Paypass.svg"
                    width={20}
                    height={24}
                    alt="pay"
                />
                <p className="font-inter font-bold text-12 text-black z-10">
                    debit
                </p>
                <Image
                    src="icons/mastercard.svg"
                    width={45}
                    height={32}
                    alt="mastercard"
                    className="ml-5"
                />
            </div>

            <Image
                src="/icons/lines.png"
                width={316}
                height={190}
                alt="lines"
                className="absolute top-0 left-0"
            />
        </Link>
    </div>
  )
}

export default BankCard