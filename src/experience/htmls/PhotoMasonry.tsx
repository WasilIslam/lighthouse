import { useRef } from 'react'

interface AnimatedPhotoProps {
    src: string
    alt: string
    title: string
    description: string
}

function AnimatedPhoto({ src, alt, title, description }: AnimatedPhotoProps) {
    return (
        <>
            <img
                alt={alt}
                loading='lazy'
                src={src}
                className='life-list-img group-hover:scale-105 group-focus:scale-105'
            />
            <span className='life-list-img-mask-bg group-hover:opacity-100 group-focus:opacity-100'></span>
            <span className='life-list-img-mask-frame group-hover:h-[75%] group-hover:w-[75%] group-hover:opacity-100 group-hover:backdrop-blur-[2px] group-focus:h-[75%] group-focus:w-[75%] group-focus:opacity-100' />
            <figcaption className='life-list-img-caption w-[75%] group-hover:-translate-y-1/2 group-hover:opacity-100 group-focus:-translate-y-1/2 group-focus:opacity-100'>
                <h1 className='font-medium'>{title}</h1>
                <p className='text-sm'>{description}</p>
            </figcaption>
        </>
    )
}

export function PhotoMasonry() {
    const photoGalleryRef = useRef<HTMLDivElement>(null)

    return (
        <div
            data-name='pm'
            className='mt-6 grid h-[900px] w-full grid-cols-3 grid-rows-12 gap-[12px] rounded-[4px] bg-primary-monochrome p-[12px] max-2xl:h-[1100px] max-2xl:grid-cols-2 max-mobile:h-[900px] max-mobile:grid-cols-3 max-sm:grid-cols-2 max-xs:gap-[4px] max-xs:p-0'
            ref={photoGalleryRef}
        >
            <figure tabIndex={0} className='life-list-img-wrapper group col-span-1 row-span-6'>
                <AnimatedPhoto
                    src='images/life/lahore_museum.webp'
                    alt='lahore museum'
                    title='Lahore Museum'
                    description='...'
                />
            </figure>
            <figure tabIndex={0} className='life-list-img-wrapper group col-span-1 row-span-3'>
                <AnimatedPhoto
                    src='images/life/hk_island.webp'
                    alt='Overlooking the South China Sea from Po Toi Island'
                    title='Hong Kong'
                    description='Po Toi Island'
                />
            </figure>
            <figure tabIndex={0} className='life-list-img-wrapper group col-span-1 row-span-5'>
                <AnimatedPhoto
                    src='images/life/kaaba.webp'
                    alt='Holy kaaba'
                    title='Kaaba'
                    description='On a wishlist💗'
                />
            </figure>
            <figure tabIndex={0} className='life-list-img-wrapper group row-span-6'>
                <AnimatedPhoto
                    src='images/life/thailand_dragon_tower.webp'
                    alt='A high tower with a Chinese dragon twining around it'
                    title='Bangkok'
                    description='Dragon Tower'
                />
            </figure>
            <figure tabIndex={0} className='life-list-img-wrapper group col-span-1 row-span-7'>
                <AnimatedPhoto
                    src='images/life/kumamoto_forest.webp'
                    alt='A stone road leading into a forest'
                    title='Kumamoto'
                    description='Forest'
                />
            </figure>
            <figure tabIndex={0} className='life-list-img-wrapper group col-span-1 row-span-6'>
                <AnimatedPhoto
                    src='images/life/mma.png'
                    alt='boxing'
                    title='Me learning'
                    description='M.M.A'
                />
            </figure>
            <figure tabIndex={0} className='life-list-img-wrapper group col-span-1 row-span-3'>
                <AnimatedPhoto
                    src='images/life/kumrat.webp'
                    alt='kumrat'
                    title='Kumrat'
                    description='Visit 2022'
                />
            </figure>
        </div>
    )
}
