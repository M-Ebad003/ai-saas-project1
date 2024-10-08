import { Collection } from '@/components/shared/Collection'
import PopToast from '@/components/shared/PopToast'
import { navLinks } from '@/constant'
import { getAllImages } from '@/lib/actions/image.action'
import { SearchParamProps } from '@/types'
import { SignedIn } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Home = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchQuery = (searchParams?.query as string) || '';
  const images = await getAllImages({ page, searchQuery });
  return (
    <>
      <SignedIn>
        <PopToast />
      </SignedIn>
      <section className='home'>
        <h1 className='home-heading'>
          Unleash Your Creativity Vision with Nextify
        </h1>
        <ul className='flex-center w-full gap-20'>
          {navLinks.slice(1, 6).map((link) => (
            <Link key={link.route} href={link.route} className='flex-center flex-col  gap-2'>
              <li className='flex-center w-fit rounded-full bg-white p-4'>
                <Image src={link.icon} alt='image' width={24} height={24} />
              </li>
              <p className='p-14-medium text-white text-center'>{link.label}</p>
            </Link>
          ))}
        </ul>
      </section>
      <section className='sm:mt-12'>
        <Collection hasSearch={true} images={images?.data} totalPages={images?.totalPage} page={page} />
      </section>
    </>
  )
}

export default Home