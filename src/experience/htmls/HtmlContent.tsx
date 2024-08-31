import { useEffect, useRef, memo, useState, useLayoutEffect } from 'react'
import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import { FaGithub, FaLinkedin, FaLink, FaYoutube } from 'react-icons/fa'
import { MdReplay } from 'react-icons/md'
import { SiUpwork } from 'react-icons/si'

import { HtmlScrollContainer } from '@/src/experience/htmls/HtmlScrollContainer'
import { HtmlSection } from '@/src/experience/htmls/HtmlSection'
import { PhotoMasonry } from '@/src/experience/htmls/PhotoMasonry'
import {
    perfectPageHeight,
    aboutSectionTop,
    skillsSectionTop,
    studySectionTop,
    lifeSectionTop,
    worksSectionTop,
    testimonialsSectionTop,
    memorialSectionTop
} from '@/src/utilities/constants'
import webDesignAnimation from '@/assets/svgs/web_design.json'
import softwareAnimation from '@/assets/svgs/software_skill.json'
import otherSkillAnimation from '@/assets/svgs/other_skill.json'
import { FaGoogle, FaTwitter, FaWhatsapp } from 'react-icons/fa6'

const titles = ['Full-Stack Developer', 'Web Guru', 'or an automation king', 'Human being']
const studyList = [
    {
        type: 'book',
        title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
        image: 'images/study/clean_code.webp',
        alt: 'Clean Code: A Handbook of Agile Software Craftsmanship book cover',
        href: 'https://github.com/jnguyen095/clean-code/tree/master',
        ariaLabel: 'Clean Code: A Handbook of Agile Software Craftsmanship (opens in a new tab)',
        linkIcons: (
            <ul className='flex gap-2'>
                <li>
                    <a
                        href='https://github.com/jnguyen095/clean-code/tree/master'
                        target='_blank'
                        rel='noreferrer noopener'
                        aria-label='Clean Code: A Handbook of Agile Software Craftsmanship (opens in a new tab)'
                        className='block'
                    >
                        <FaGithub className='icon-link-md' />
                    </a>
                </li>
            </ul>
        ),
        summary: 'A lesson on how to improve the readiablity, maintainability and extensibility of the codebase.',

        keypoints: (
            <ul>
                <li className='keypoint-list-item'>Naming</li>
                <li className='keypoint-list-item'>Error Handling</li>
                <li className='keypoint-list-item'>Testing</li>
                <li className='keypoint-list-item'>Reusability</li>
            </ul>
        )
    },
    {
        type: 'book',
        title: 'New FE Textbook Vol.1 IT Fundamentals',
        image: 'images/study/it_fundamentals.webp',
        alt: 'New FE Textbook Vol.1 IT Fundamentals book cover',
        href: 'https://itpec.org/news/20220921_LMS.html',
        ariaLabel: 'New FE Textbook Vol.1 IT Fundamentals (opens in a new tab)',
        linkIcons: (
            <ul className='flex gap-2'>
                <li>
                    <a
                        href='https://itpec.org/news/20220921_LMS.html'
                        target='_blank'
                        rel='noreferrer noopener'
                        aria-label='Vol.1 IT Fundamentals (opens in a new tab)'
                        className='block'
                    >
                        <FaLink className='icon-link-md' />
                    </a>
                </li>
            </ul>
        ),
        summary: 'The book gives a firm foundation in IT principles, which are necessary for my daily work.',
        keypoints: (
            <ul>
                <li className='keypoint-list-item'>Processing Systems</li>
                <li className='keypoint-list-item'>Hardware & Software</li>
                <li className='keypoint-list-item'>Database</li>
                <li className='keypoint-list-item'>Network</li>
                <li className='keypoint-list-item'>DSA</li>
            </ul>
        )
    },
    {
        type: 'book',
        title: 'Vol.2: IT Strategy & Management',
        image: 'images/study/it_strategy_and_management.webp',
        alt: 'New FE Textbook Vol.2 IT Strategy & Management book cover',
        href: 'https://itpec.org/news/20220921_LMS.html',
        ariaLabel: 'New FE Textbook Vol.2 IT Strategy & Management (opens in a new tab)',
        linkIcons: (
            <ul className='flex gap-2'>
                <li>
                    <a
                        href='https://itpec.org/news/20220921_LMS.html'
                        target='_blank'
                        rel='noreferrer noopener'
                        aria-label='New FE Textbook Vol.2 IT Strategy & Management (opens in a new tab)'
                        className='block'
                    >
                        <FaLink className='icon-link-md' />
                    </a>
                </li>
            </ul>
        ),
        summary: 'A discussion on aligning IT with business objectives, project management & strategic innovation.',
        keypoints: (
            <ul>
                <li className='keypoint-list-item'>SDLC Model</li>
                <li className='keypoint-list-item'>IT Management</li>
            </ul>
        )
    },
    {
        type: 'project',
        title: 'Three.js Journey',
        image: 'images/study/threejs_journey_cert.webp',
        alt: 'Three.js Journey certificate of completion',
        href: 'https://threejs-journey.com/',
        ariaLabel: 'Three.js Journey (opens in a new tab)',
        linkIcons: (
            <ul className='flex gap-2'>
                <li>
                    <a
                        href='https://threejs-journey.com/'
                        target='_blank'
                        rel='noreferrer noopener'
                        aria-label='Three.js Journey (opens in a new tab)'
                        className='block'
                    >
                        <FaLink className='icon-link-md' />
                    </a>
                </li>
            </ul>
        ),
        summary: `An extensive 91-hour program that expanded my horizon of 3D web graphics.`,
        keypoints: (
            <ul>
                <li className='keypoint-list-item'>WebGL</li>
                <li className='keypoint-list-item'>Three.js</li>
                <li className='keypoint-list-item'>GLSL</li>
                <li className='keypoint-list-item'>R3F</li>
                <li className='keypoint-list-item'>Blender</li>
            </ul>
        )
    },
    {
        type: 'project',
        title: 'Harvard CS50: Introduction to Computer Science',
        image: 'images/study/cs50.webp',
        alt: 'Harvard CS50: Introduction to Computer Science youtube preview',
        href: 'https://www.youtube.com/watch?v=8mAITcNt710&t=1s&ab_channel=freeCodeCamp.org',
        ariaLabel: 'Harvard CS50: Introduction to Computer Science (opens in a new tab)',
        linkIcons: (
            <ul className='flex gap-2'>
                <li>
                    <a
                        href='https://www.youtube.com/watch?v=8mAITcNt710&t=1s&ab_channel=freeCodeCamp.org'
                        target='_blank'
                        rel='noreferrer noopener'
                        aria-label='Harvard CS50: Introduction to Computer Science (opens in a new tab)'
                        className='block'
                    >
                        <FaYoutube className='icon-link-md' />
                    </a>
                </li>
            </ul>
        ),
        summary: 'A dive into the fundamentals of computer science and programmatic thinking.',
        keypoints: (
            <ul>
                <li className='keypoint-list-item'>C</li>
                <li className='keypoint-list-item'>Memory</li>
                <li className='keypoint-list-item'>DSA</li>
                <li className='keypoint-list-item'>Python</li>
            </ul>
        )
    },
    {
        type: 'project',
        title: 'MIT 6.006 Introduction to Algorithms',
        image: 'images/study/mit6.006.webp',
        alt: 'MIT 6.006 Introduction to Algorithms youtube preview',
        href: 'https://www.youtube.com/watch?v=HtSuA80QTyo&ab_channel=MITOpenCourseWare',
        ariaLabel: 'MIT 6.006 Introduction to Algorithms (opens in a new tab)',
        linkIcons: (
            <ul className='flex gap-2'>
                <li>
                    <a
                        href='https://www.youtube.com/watch?v=HtSuA80QTyo&ab_channel=MITOpenCourseWare'
                        target='_blank'
                        rel='noreferrer noopener'
                        aria-label='MIT 6.006 Introduction to Algorithms (opens in a new tab)'
                        className='block'
                    >
                        <FaYoutube className='icon-link-md' />
                    </a>
                </li>
            </ul>
        ),
        summary: 'An introduction to data structures and algorithmic approaches to problems.',
        keypoints: (
            <ul>
                <li className='keypoint-list-item'>DSA</li>
                <li className='keypoint-list-item'>O(n)</li>
            </ul>
        )
    },
    {
        type: 'project',
        title: 'Stanford CS229: Machine Learning',
        author: 'Robert Cecil Martin',
        image: 'images/study/cs229.webp',
        alt: 'Stanford CS229: Machine Learning youtube preview',
        href: 'https://www.youtube.com/watch?v=jGwO_UgTS7I&ab_channel=StanfordOnline',
        ariaLabel: 'Stanford CS229: Machine Learning (opens in a new tab)',
        linkIcons: (
            <ul className='flex gap-2'>
                <li>
                    <a
                        href='https://www.youtube.com/watch?v=jGwO_UgTS7I&ab_channel=StanfordOnline'
                        target='_blank'
                        rel='noreferrer noopener'
                        aria-label='Stanford CS229: Machine Learning (opens in a new tab)'
                        className='block'
                    >
                        <FaYoutube className='icon-link-md' />
                    </a>
                </li>
            </ul>
        ),
        summary: 'The principles of machine learning and pattern recognition are well-established by this course.',
        keypoints: (
            <ul>
                <li className='keypoint-list-item'>Regression</li>
                <li className='keypoint-list-item'>Gradient Descent</li>
                <li className='keypoint-list-item'>CNN</li>
            </ul>
        )
    },
    {
        type: 'project',
        title: 'Bulletproof React',
        author: 'Robert Cecil Martin',
        image: 'images/study/bulletproof_react.webp',
        alt: 'Bulletproof React github preview',
        href: 'https://github.com/alan2207/bulletproof-react',
        ariaLabel: 'Bulletproof React (opens in a new tab)',
        linkIcons: (
            <ul className='flex gap-2'>
                <li>
                    <a
                        href='https://github.com/alan2207/bulletproof-react'
                        target='_blank'
                        rel='noreferrer noopener'
                        aria-label='Bulletproof React (opens in a new tab)'
                        className='block'
                    >
                        <FaGithub className='icon-link-md' />
                    </a>
                </li>
            </ul>
        ),
        summary: 'A guide on industry best practices for React.',
        keypoints: (
            <ul>
                <li className='keypoint-list-item'>Code Style</li>
                <li className='keypoint-list-item'>Project Structure</li>
                <li className='keypoint-list-item'>Testing</li>
            </ul>
        )
    }
]
const workList = [
    {
        type: 'project',
        title: 'Sustrax MX (carbonfootprint.com)',
        image: 'https://www.carbonfootprint.com/assets/carbonfootprintlogo.gif',
        alt: 'Sustrax MX section',
        href: 'https://youtu.be/4UYHtoFlMQo',
        ariaLabel: 'sustraxmx(opens in a new tab)',
        linkIcons: (
            <ul className='flex gap-2'>
                <li>
                    <a
                        // href='https://github.com/wasiljpy/sustrax'
                        onClick={() => alert('REPO is private🤫')}
                        target='_blank'
                        rel='noreferrer noopener'
                        aria-label='GitHub (opens in a new tab)'
                        className='block'
                    >
                        <FaGithub className='icon-link-md' />
                    </a>
                </li>
                <li>
                    <a
                        href='https://www.sustraxmx.com/'
                        target='_blank'
                        rel='noreferrer noopener'
                        aria-label='sustrax Shop (opens in a new tab)'
                        className='block'
                    >
                        <FaLink className='icon-link-md' />
                    </a>
                </li>
            </ul>
        ),
        summary: `Carbonfootprint tracking webapp with over 2000 companies registered (as of Aug 24).`,
        keypoints: (
            <ul>
                <li className='keypoint-list-item'>Javascript</li>
                <li className='keypoint-list-item'>React</li>
                <li className='keypoint-list-item'>Redux</li>
                <li className='keypoint-list-item'>Python</li>
                <li className='keypoint-list-item'>Stripe</li>
                <li className='keypoint-list-item'>Firebase</li>
                <li className='keypoint-list-item'>Netlify</li>
                <li className='keypoint-list-item'>AntD</li>
            </ul>
        )
    },
    {
        type: 'project',
        title: 'Link-Health.org',
        image: 'images/work/lh.webp',
        alt: 'lh',
        ariaLabel: 'lh',
        href: 'https://www.link-health.org/',
        linkIcons: (
            <ul className='flex gap-2'>
                <li>
                    <a
                        href='https://www.link-health.org/'
                        target='_blank'
                        rel='noreferrer noopener'
                        aria-label='dialedin'
                        className='block'
                    >
                        <FaLink className='icon-link-md' />
                    </a>
                </li>
            </ul>
        ),
        summary: `An organization which has given back 1M+ $ to the people by connecting them to various benefits. My role as a lead automation engineer is to help them centralize and automate 40% of the work.`,
        keypoints: (
            <ul>
                <li className='keypoint-list-item'>Python</li>
                <li className='keypoint-list-item'>Selenium</li>
                <li className='keypoint-list-item'>React</li>
                <li className='keypoint-list-item'>Pandas</li>
                <li className='keypoint-list-item'>Gspread</li>
                <li className='keypoint-list-item'>BeautifulSoap</li>
            </ul>
        )
    },
    {
        type: 'project',
        title: 'Urdu.JS',
        image: 'images/work/urdujs.webp',
        alt: 'Urdu.JS Portfolio hero section',
        href: 'https://urdujs.netlify.app/',
        ariaLabel: 'Urdu.JS Portfolio (opens in a new tab)',
        linkIcons: (
            <ul className='flex gap-2'>
                <li>
                    <a
                        href='https://github.com/wasiljpy/portfolio'
                        target='_blank'
                        rel='noreferrer noopener'
                        aria-label='GitHub (opens in a new tab)'
                        className='block'
                    >
                        <FaGithub className='icon-link-md' />
                    </a>
                </li>
                <li>
                    <a
                        href='https://wasilUrdu.JS.com/'
                        target='_blank'
                        rel='noreferrer noopener'
                        aria-label='Urdu.JS Portfolio (opens in a new tab)'
                        className='block'
                    >
                        <FaLink className='icon-link-md' />
                    </a>
                </li>
            </ul>
        ),
        summary: `Javascript in my native urdu language. It is to help the beginners.`,
        keypoints: (
            <ul>
                <li className='keypoint-list-item'>Javascript</li>
                <li className='keypoint-list-item'>React</li>
                <li className='keypoint-list-item'>HTML</li>
                <li className='keypoint-list-item'>Monaco Editor</li>
                <li className='keypoint-list-item'>Compiler</li>
            </ul>
        )
    },
    {
        type: 'project',
        title: 'Automation of Dialedinbookkeeping',
        image: 'images/work/dialedin.webp',
        alt: 'dialedin',
        ariaLabel: 'Dialedin',
        href: 'https://www.dialedinbookkeeping.com/',
        linkIcons: (
            <ul className='flex gap-2'>
                <li>
                    <a
                        href='https://www.dialedinbookkeeping.com/'
                        target='_blank'
                        rel='noreferrer noopener'
                        aria-label='dialedin'
                        className='block'
                    >
                        <FaLink className='icon-link-md' />
                    </a>
                </li>
            </ul>
        ),
        summary: `Worked with an accounting firm for over 1.5 years automating 10s of workflows. Saving them 300 hours every month.`,
        keypoints: (
            <ul>
                <li className='keypoint-list-item'>Python</li>
                <li className='keypoint-list-item'>Selenium</li>
                <li className='keypoint-list-item'>React</li>
                <li className='keypoint-list-item'>Pandas</li>
                <li className='keypoint-list-item'>Gspread</li>
                <li className='keypoint-list-item'>BeautifulSoap</li>
            </ul>
        )
    },

    {
        type: 'project',
        title: 'Speed Coding Winner- Careem',
        image: 'images/work/careem_winner.webp',
        alt: 'Careem Certificate',
        href: 'https://twitter.com/careem/status/1511239711246872579',
        ariaLabel: 'ITPEC Common Examination (opens in a new tab)',
        linkIcons: (
            <ul className='flex gap-2'>
                <li>
                    <a
                        href='https://twitter.com/careem/status/1511239711246872579'
                        target='_blank'
                        rel='noreferrer noopener'
                        aria-label='ITPEC Common Examination (opens in a new tab)'
                        className='block'
                    >
                        <FaTwitter className='icon-link-md' />
                    </a>
                </li>
            </ul>
        ),
        summary: `Won the careem speed coding competition in 2022. Grabbing a prize of 25,000 PKR`
    },
    {
        type: 'project',
        title: '+ 40 projects on Upwork (as of aug 2024)',
        image: 'images/work/upwork.webp',
        alt: 'Upwork Top rated',
        href: 'https://www.upwork.com/freelancers/itengineer',
        ariaLabel: 'Upwork top rated',
        linkIcons: (
            <ul className='flex gap-2'>
                <li>
                    <a
                        href='https://www.upwork.com/freelancers/itengineer'
                        target='_blank'
                        rel='noreferrer noopener'
                        aria-label='Upwork top rated'
                        className='block'
                    >
                        <SiUpwork className='icon-link-md' />
                    </a>
                </li>
            </ul>
        ),
        summary: `In 2023, I became a top rated engineer on Upwork. With 40+ projects done.`
    }
]
const testimonialsList = [
    {
        name: 'Henry Esparza',
        title: 'Senior SE, Birchgold',
        image: 'images/testimonials/henry.webp',
        alt: "Ben Gavin's avatar",
        href: 'https://birchgold.com/',
        ariaLabel: 'Ben Gavin (opens in a new tab)',
        linkIcons: (
            <ul className='flex gap-2'>
                <li>
                    <a
                        href='https://www.linkedin.com/in/henry-esparza-83bb81a9/'
                        target='_blank'
                        rel='noreferrer noopener'
                        aria-label='Linkedin (opens in a new tab)'
                        className='block'
                    >
                        <FaLinkedin className='icon-link-md' />
                    </a>
                </li>
                <li>
                    <a
                        href='https://dialedinbookkeeping.com.com/'
                        target='_blank'
                        rel='noreferrer noopener'
                        aria-label='Ben Gavin (opens in a new tab)'
                        className='block'
                    >
                        <FaLink className='icon-link-md' />
                    </a>
                </li>
            </ul>
        ),
        summary: `I needed an Automated task to make a SOAP API call to pull report data from my lead manager. With this data we made another API call to update data. This was setup using python and has run flawlessly since Wasil set it up. I highly recommend him for your projects.`
    },
    {
        name: 'Alister Martin',
        title: 'ER physician and an Assistant Professor at Harvard Medical School',
        image: 'images/testimonials/alister.webp',
        alt: "alister",
        href: 'https://www.google.com/search?q=alister+martin',
        ariaLabel: 'alister (opens in a new tab)',
        linkIcons: (
            <ul className='flex gap-2'>
                <li>
                    <a
                        href='https://www.google.com/search?q=alister+martin'
                        target='_blank'
                        rel='noreferrer noopener'
                        aria-label='Linkedin (opens in a new tab)'
                        className='block'
                    >
                        <FaGoogle className='icon-link-md' />
                    </a>
                </li>
            </ul>
        ),
        summary: `(one of the group chat msgs) We are giving the digital MAGICIAN award to Wasil today. @Wasil you created a brand new method using chrome extensions for us to easily capture data from any federal benefits application directly into our Link Health database.`
    },
    {
        name: 'Myles Howard',
        title: 'Senior Environmental Scientist, Carbonfootprint ltd',
        image: 'images/testimonials/myles.webp',
        alt: "myles's avatar",
        href: 'https://www.linkedin.com/in/myles-howard455/',
        ariaLabel: 'myles (opens in a new tab)',
        linkIcons: (
            <ul className='flex gap-2'>
                <li>
                    <a
                        href='https://www.linkedin.com/in/myles-howard455/'
                        target='_blank'
                        rel='noreferrer noopener'
                        aria-label='Linkedin (opens in a new tab)'
                        className='block'
                    >
                        <FaLinkedin className='icon-link-md' />
                    </a>
                </li>
            </ul>
        ),
        summary: ` -Great speed and problems solving
 -Good consistent uploads especially recently
 -Great to see you bring forward ideas and adapt my UI ideas into what works best for the system
 -No change is too big you will always give it a go and let me know if compromises are needed`
    }
]
export const HtmlContent = memo(function HtmlContent() {
    const typingEffectIntervalRef = useRef<number | null>(null)
    const contentObserverRef = useRef<IntersectionObserver | null>(null)
    const aboutSectionRef = useRef<HTMLElement>(null!)
    const lifeSectionRef = useRef<HTMLElement>(null!)
    const skillsSectionRef = useRef<HTMLElement>(null!)
    const studySectionRef = useRef<HTMLElement>(null!)
    const workSectionRef = useRef<HTMLElement>(null!)
    const testimonialsSectionRef = useRef<HTMLElement>(null!)
    const memorialSectionRef = useRef<HTMLElement>(null!)
    const typingTextRef = useRef<HTMLSpanElement>(null)
    const contactListRef = useRef<HTMLUListElement>(null)
    const [focusStudy, setFocusStudy] = useState<string>('')
    const [focusWork, setFocusWork] = useState<string>('')
    const [focusAck, setFocusAck] = useState<string>('')
    const webDesignLottieRef = useRef<LottieRefCurrentProps | null>(null)
    const softwareLottieRef = useRef<LottieRefCurrentProps | null>(null)
    const otherLottieRef = useRef<LottieRefCurrentProps | null>(null)

    const isNumberInRange = (target: number, low: number, high: number): boolean => {
        if (target >= low && target <= high) {
            return true
        }

        return false
    }

    const setHTMLSectionBorderRadius = (element: HTMLElement, width: number, position: 'left' | 'right') => {
        const elementPosition = element.getBoundingClientRect()
        const topDistanceRatioToWindowTop = elementPosition.top / window.innerHeight
        const bottomDistanceRatioToWindowTop = 1 - elementPosition.bottom / window.innerHeight

        if (position === 'left') {
            element.style.borderTopRightRadius = `${width * topDistanceRatioToWindowTop}px`
            element.style.borderBottomRightRadius = `${width * bottomDistanceRatioToWindowTop}px`
        } else if (position === 'right') {
            element.style.borderTopLeftRadius = `${width * topDistanceRatioToWindowTop}px`
            element.style.borderBottomLeftRadius = `${width * bottomDistanceRatioToWindowTop}px`
        }
    }

    const resetAllContainerBorderRadius = () => {
        const refs = [
            aboutSectionRef,
            lifeSectionRef,
            skillsSectionRef,
            studySectionRef,
            workSectionRef,
            testimonialsSectionRef
        ]

        for (const ref of refs) {
            if (ref.current) {
                ref.current.style.borderTopRightRadius = '0px'
                ref.current.style.borderBottomRightRadius = '0px'
                ref.current.style.borderTopLeftRadius = '0px'
                ref.current.style.borderBottomLeftRadius = '0px'
            }
        }
    }

    const setTypingEffectInterval = () => {
        let currentWord = 0
        let currentLetter = 0
        let shouldType = true

        typingEffectIntervalRef.current = window.setInterval(() => {
            if (typingTextRef.current) {
                typingTextRef.current.textContent = titles[currentWord].slice(0, currentLetter)

                if (currentLetter === titles[currentWord].length) {
                    if (shouldType) {
                        currentLetter += 10
                    }
                    shouldType = false
                } else if (currentLetter === 0 && !shouldType) {
                    currentWord++
                    shouldType = true
                }

                if (currentWord > titles.length - 1) {
                    currentWord = 0
                }

                if (shouldType) {
                    currentLetter++
                } else {
                    currentLetter--
                }
            }
        }, 100)
    }

    useLayoutEffect(() => {
        const contentObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const entryName = entry.target.getAttribute('data-name')

                        switch (entryName) {
                            case 'ch':
                                if (entry.target.children.item(2)?.classList.contains('revealed-content')) {
                                    break
                                }
                                const bgText = entry.target?.previousSibling as HTMLElement
                                bgText.classList.add('will-change-transform')
                                entry.target.children.item(1)?.classList.add('will-change-transform')
                                entry.target.children.item(2)?.classList.add('will-change-transform')

                                bgText.classList.replace('translate-x-[40px]', 'translate-x-0')
                                bgText.classList.replace('opacity-0', 'opacity-100')
                                entry.target.children.item(0)?.classList.replace('w-0', 'w-40')
                                entry.target.children.item(1)?.classList.replace('hidden-content', 'revealed-content')
                                entry.target.children.item(2)?.classList.replace('hidden-content', 'revealed-content')

                                if (!typingEffectIntervalRef.current) {
                                    setTypingEffectInterval()
                                }

                                if (contactListRef.current) {
                                    for (const child of contactListRef.current.children) {
                                        child.classList.add('will-change-transform')
                                        child.classList.replace('hidden-content', 'revealed-content')
                                    }
                                }
                                break

                            case 'se':
                                if (entry.target.children.item(2)?.getAttribute('data-name') === 'pm') {
                                    for (const child of entry.target.children.item(2)?.children!) {
                                        child.children.item(0)?.classList.add('will-change-transform')
                                    }
                                }

                                if (entry.target.classList.contains('revealed-content')) {
                                    break
                                }

                                entry.target.classList.add('will-change-transform')
                                entry.target.classList.replace('hidden-content', 'revealed-content')

                                if (entry.target.children.item(1)?.tagName === 'UL') {
                                    const increment = 0.15
                                    let delay = 0.5

                                    for (const listItem of entry.target.children.item(1)?.children!) {
                                        const HtmlListItem = listItem as HTMLElement

                                        HtmlListItem.style.transition = `transform 0.6s ease-out ${delay}s, opacity 0.6s ease-out ${delay}s, filter 0.4s ease-out`
                                        HtmlListItem.classList.add('will-change-transform')
                                        HtmlListItem.classList.replace('hidden-content', 'revealed-content')

                                        if (HtmlListItem.getAttribute('data-name') === 'design') {
                                            setTimeout(
                                                () => {
                                                    webDesignLottieRef.current?.play()
                                                },
                                                delay * 100 + 800
                                            )
                                        } else if (HtmlListItem.getAttribute('data-name') === 'software') {
                                            setTimeout(
                                                () => {
                                                    softwareLottieRef.current?.play()
                                                },
                                                delay * 100 + 1200
                                            )
                                        } else if (HtmlListItem.getAttribute('data-name') === 'other') {
                                            setTimeout(
                                                () => {
                                                    otherLottieRef.current?.play()
                                                },
                                                delay * 100 + 1600
                                            )
                                        }

                                        delay += increment
                                    }
                                }
                                break
                            default:
                                break
                        }
                    } else {
                        const entryName = entry.target.getAttribute('data-name')
                        switch (entryName) {
                            case 'ch':
                                const bgText = entry.target?.previousSibling as HTMLElement
                                bgText.classList.remove('will-change-transform')
                                entry.target.children.item(1)?.classList.remove('will-change-transform')
                                entry.target.children.item(2)?.classList.remove('will-change-transform')

                                if (contactListRef.current) {
                                    for (const child of contactListRef.current.children) {
                                        child.classList.remove('will-change-transform')
                                    }
                                }

                                break
                            case 'se':
                                entry.target.classList.remove('will-change-transform')

                                if (entry.target.children.item(1)?.tagName === 'UL') {
                                    for (const listItem of entry.target.children.item(1)?.children!) {
                                        const HtmlListItem = listItem as HTMLElement
                                        HtmlListItem.classList.remove('will-change-transform')
                                    }
                                } else if (entry.target.children.item(2)?.getAttribute('data-name') === 'pm') {
                                    for (const child of entry.target.children.item(2)?.children!) {
                                        child.children.item(0)?.classList.remove('will-change-transform')
                                    }
                                }
                                break
                        }
                    }
                })
            },
            {
                rootMargin: '0px',
                threshold: 0.1
            }
        )
        contentObserverRef.current = contentObserver
        return () => {
            contentObserverRef.current?.disconnect()
        }
    }, [])

    useEffect(() => {
        const handleScrollAnimation = () => {
            const scrollTop = document.documentElement.scrollTop

            const isInAboutSection = isNumberInRange(
                scrollTop,
                aboutSectionTop - perfectPageHeight - 300,
                aboutSectionTop + 2 * perfectPageHeight + 300
            )
            const isInLifeSection = isNumberInRange(
                scrollTop,
                lifeSectionTop - perfectPageHeight - 300,
                lifeSectionTop + 2 * perfectPageHeight + 300
            )
            const isInSkillsSection = isNumberInRange(
                scrollTop,
                skillsSectionTop - perfectPageHeight - 300,
                skillsSectionTop + 2 * perfectPageHeight + 300
            )
            const isInReadingSection = isNumberInRange(
                scrollTop,
                studySectionTop - perfectPageHeight - 300,
                studySectionTop + 2 * perfectPageHeight + 300
            )
            const isInWorkSection = isNumberInRange(
                scrollTop,
                worksSectionTop - perfectPageHeight - 300,
                worksSectionTop + 2 * perfectPageHeight + 300
            )
            const isInTestimonialsSection = isNumberInRange(
                scrollTop,
                testimonialsSectionTop - perfectPageHeight - 300,
                testimonialsSectionTop + 2 * perfectPageHeight + 300
            )

            const isInMemorialSection = isNumberInRange(
                scrollTop,
                memorialSectionTop - perfectPageHeight - 300,
                memorialSectionTop + 2 * perfectPageHeight + 300
            )

            const width = aboutSectionRef.current?.clientWidth

            switch (true) {
                case isInAboutSection:
                    setHTMLSectionBorderRadius(aboutSectionRef.current, width, 'right')
                    break

                case isInLifeSection:
                    setHTMLSectionBorderRadius(lifeSectionRef.current, width, 'left')
                    break

                case isInSkillsSection:
                    setHTMLSectionBorderRadius(skillsSectionRef.current, width, 'right')
                    break

                case isInReadingSection:
                    setHTMLSectionBorderRadius(studySectionRef.current, width, 'left')
                    break

                case isInWorkSection:
                    setHTMLSectionBorderRadius(workSectionRef.current, width, 'right')
                    break

                case isInTestimonialsSection:
                    setHTMLSectionBorderRadius(testimonialsSectionRef.current, width, 'left')
                    break

                case isInMemorialSection:
                    setHTMLSectionBorderRadius(memorialSectionRef.current, width, 'right')
                    break

                default:
                    resetAllContainerBorderRadius()
                    break
            }
        }

        window.addEventListener('scroll', handleScrollAnimation)

        return () => {
            window.removeEventListener('scroll', handleScrollAnimation)
        }
    }, [])

    return (
        <div
            className='absolute z-40 w-full'
            style={{
                height: perfectPageHeight * 29
            }}
        >
            <HtmlScrollContainer
                top={aboutSectionTop}
                position='right'
                backgroundTitle='About'
                topTitle="Hello. I'm"
                bottomTitle={
                    <>
                        Wasil <span className='text-accent'>Islam</span>
                        <h1 className='text-xl font-bold text-secondary sm:text-2xl'>
                            A{' '}
                            <span
                                ref={typingTextRef}
                                className='animate-typing border-r-2 border-accent text-xl font-semibold text-accent sm:text-2xl'
                            ></span>
                        </h1>
                        <ul ref={contactListRef} className='mt-4 flex gap-4'>
                            <li className='hidden-content [transition:transform_0.4s_ease-out_0.4s,opacity_0.4s_ease-out_0.4s]'>
                                <a
                                    href='https://github.com/wasilislam'
                                    target='_blank'
                                    rel='noreferrer noopener'
                                    aria-label='GitHub (opens in a new tab)'
                                    className='block'
                                >
                                    <FaGithub className='icon-link-lg' />
                                </a>
                            </li>
                            <li className='hidden-content [transition:transform_0.4s_ease-out_0.45s,opacity_0.4s_ease-out_0.45s]'>
                                <a
                                    href='https://www.linkedin.com/in/wasilislam/'
                                    target='_blank'
                                    rel='noreferrer noopener'
                                    aria-label='Linkedin (opens in a new tab)'
                                    className='block'
                                >
                                    <FaLinkedin className='icon-link-lg' />
                                </a>
                            </li>
                            <li className='hidden-content [transition:transform_0.4s_ease-out_0.45s,opacity_0.4s_ease-out_0.45s]'>
                                <a
                                    href='https://wa.me/+923101457770'
                                    target='_blank'
                                    rel='noreferrer noopener'
                                    aria-label='Whatsapp (opens in a new tab)'
                                    className='block'
                                >
                                    <FaWhatsapp className='icon-link-lg' />
                                </a>
                            </li>
                            <li className='hidden-content [transition:transform_0.4s_ease-out_0.55s,opacity_0.4s_ease-out_0.55s]'>
                                <a
                                    href='https://www.upwork.com/freelancers/itengineer'
                                    target='_blank'
                                    rel='noreferrer noopener'
                                    aria-label='Upwork (opens in a new tab)'
                                    className='block'
                                >
                                    <SiUpwork strokeWidth={0} className='icon-link-lg' />
                                </a>
                            </li>
                        </ul>
                    </>
                }
                contentObserverRef={contentObserverRef}
                ref={aboutSectionRef}
            >
                <HtmlSection
                    title={
                        <>
                            <span className='text-accent'>Who</span> am I?
                        </>
                    }
                    contentObserverRef={contentObserverRef}
                >
                    <p>
                        I'm a passionate <span className='text-accent'>Automation Engineer</span> and{' '}
                        <span className='text-accent'>Full Stack Developer</span> from Lahore with 5+ years of
                        experience in transforming ideas into reality. I've enhanced products with 2000+ daily users and
                        built a foundation for a thriving freelance career. My journey is all about continuous growth,
                        staying at the forefront of technology, and creating digital experiences that are both elegant
                        and impactful.
                    </p>
                </HtmlSection>
                <HtmlSection
                    title={
                        <>
                            Bored <span className='text-accent'>reading?</span>
                            <p className='font-semibold'>
                                I know the attention span is so low nowadays. So, here are{' '}
                                <span className='text-accent'>some quick abouts.</span>
                            </p>
                        </>
                    }
                    contentObserverRef={contentObserverRef}
                >
                    <p className='mb-4'>I can assist you with building:</p>
                    <ul className='list-inside list-disc space-y-2'>
                        <li>automation workflows</li>
                        <li>scalable dashboards</li>
                        <li>or a simple to-do app</li>
                    </ul>
                </HtmlSection>
            </HtmlScrollContainer>

            <HtmlScrollContainer
                top={lifeSectionTop}
                position='left'
                backgroundTitle='Life'
                topTitle="I'm a very simple person..."
                bottomTitle={
                    <>
                        My <span className='text-accent'> Life</span>
                    </>
                }
                contentObserverRef={contentObserverRef}
                ref={lifeSectionRef}
            >
                <HtmlSection
                    title={
                        <>
                            <span className='text-accent'>Simple</span> and sometime{' '}
                            <span className='text-accent'>spontaneous</span>
                        </>
                    }
                    contentObserverRef={contentObserverRef}
                >
                    <p>
                    I am still searching for the meaning and purpose of my life. Currently, I spend most of my time coding, researching, and coding again. I also practice martial arts and swim occasionally.
                    </p>
                    <PhotoMasonry />
                </HtmlSection>
            </HtmlScrollContainer>

            <HtmlScrollContainer
                top={skillsSectionTop}
                position='right'
                backgroundTitle='Skills'
                topTitle='Cool. How about...'
                bottomTitle={
                    <>
                        My <span className='text-accent'> Expertise</span>
                    </>
                }
                contentObserverRef={contentObserverRef}
                ref={skillsSectionRef}
            >
                <HtmlSection
                    title={
                        <>
                            What can I offer as a <span className='text-accent'>developer</span>?
                        </>
                    }
                    contentObserverRef={contentObserverRef}
                >
                    <ul>
                        <li data-name='other' className='hidden-content section-list-item p-4'>
                            <div className='relative w-full'>
                                <figure>
                                    <Lottie
                                        lottieRef={otherLottieRef}
                                        animationData={otherSkillAnimation}
                                        autoPlay={false}
                                        loop={false}
                                        onComplete={() => {
                                            otherLottieRef.current?.playSegments([100, 700], false)
                                        }}
                                        onDOMLoaded={() => {
                                            otherLottieRef.current?.stop()
                                        }}
                                        className='m-auto w-[400px] max-sm:w-[340px] max-xs:w-full'
                                    />
                                </figure>
                                <header className='mb-[8px] mt-[8px]'>
                                    <h1 className='text-center text-xl font-black text-accent max-xs:text-base'>
                                        Automation & AI
                                    </h1>
                                </header>
                                <p className='text-center text-secondary-light'>
                                    I value A.I. and automation. They are the biggest time savers.
                                    <br /> It feels good to know my automation's have helped save thousands of hours.
                                </p>
                                <ul className='text-center'>
                                    <li className='keypoint-list-item'>
                                        <p>Python</p>
                                    </li>
                                    <li className='keypoint-list-item'>
                                        <p>Selenium</p>
                                    </li>
                                    <li className='keypoint-list-item'>
                                        <p>GPT apis 💘</p>
                                    </li>
                                </ul>

                                <button
                                    className='absolute right-0 top-0'
                                    onClick={() => {
                                        otherLottieRef.current?.playSegments([0, 100], true)
                                    }}
                                >
                                    <MdReplay size={24} className='icon-link-md' aria-label='Replay' />
                                </button>
                            </div>
                        </li>
                        <li data-name='design' className='hidden-content section-list-item p-4'>
                            <div className='relative w-full'>
                                <figure>
                                    <Lottie
                                        lottieRef={webDesignLottieRef}
                                        animationData={webDesignAnimation}
                                        autoPlay={false}
                                        loop={false}
                                        onDOMLoaded={() => {
                                            webDesignLottieRef.current?.stop()
                                        }}
                                        className='m-auto w-[400px] max-sm:w-[340px] max-xs:w-full'
                                    />
                                </figure>
                                <header className='mb-[8px] mt-[8px]'>
                                    <h1 className='text-center text-xl font-black text-accent max-xs:text-base'>
                                        Web Design
                                    </h1>
                                </header>
                                <p className='text-center text-secondary-light'>
                                    I love creating pixel-perfect, visually appealing, and accessible experiences.
                                </p>
                                <ul className='text-center'>
                                    <li className='keypoint-list-item'>
                                        <p>Figma</p>
                                    </li>
                                    <li className='keypoint-list-item'>
                                        <p>Responsiveness</p>
                                    </li>
                                    <li className='keypoint-list-item'>
                                        <p>Acessibility</p>
                                    </li>
                                </ul>

                                <button
                                    className='absolute right-0 top-0'
                                    onClick={() => webDesignLottieRef.current?.goToAndPlay(0)}
                                >
                                    <MdReplay size={24} className='icon-link-md' aria-label='Replay' />
                                </button>
                            </div>
                        </li>
                        <li data-name='software' className='hidden-content section-list-item p-4'>
                            <div className='relative w-full'>
                                <figure>
                                    <Lottie
                                        lottieRef={softwareLottieRef}
                                        animationData={softwareAnimation}
                                        autoPlay={false}
                                        loop={false}
                                        onComplete={() => {
                                            softwareLottieRef.current?.playSegments([320, 400], false)
                                        }}
                                        onDOMLoaded={() => {
                                            softwareLottieRef.current?.stop()
                                        }}
                                        className='m-auto w-[400px] max-sm:w-[340px] max-xs:w-full'
                                    />
                                </figure>
                                <header className='mb-[8px] mt-[8px]'>
                                    <h1 className='text-center text-xl font-black text-accent max-xs:text-base'>
                                        Full-Stack Development
                                    </h1>
                                </header>
                                <p className='text-center text-secondary-light'>
                                    I enjoy the process of building things from scratch.
                                </p>
                                <ul className='text-center'>
                                    <li className='keypoint-list-item'>
                                        <p>Typescript</p>
                                    </li>
                                    <li className='keypoint-list-item'>
                                        <p>Python</p>
                                    </li>
                                    <li className='keypoint-list-item'>
                                        <p>React</p>
                                    </li>
                                    <li className='keypoint-list-item'>
                                        <p>Node</p>
                                    </li>
                                    <li className='keypoint-list-item'>
                                        <p>AntDesign</p>
                                    </li>
                                    <li className='keypoint-list-item'>
                                        <p>MongoDB</p>
                                    </li>
                                    <li className='keypoint-list-item'>
                                        <p>SQL</p>
                                    </li>
                                    <li className='keypoint-list-item'>
                                        <p>Tailwind CSS</p>
                                    </li>
                                    <li className='keypoint-list-item'>
                                        <p>Docker</p>
                                    </li>
                                    <li className='keypoint-list-item'>
                                        <p>Git</p>
                                    </li>
                                    <li className='keypoint-list-item'>
                                        <p>NextJS</p>
                                    </li>
                                </ul>

                                <button
                                    className='absolute right-0 top-0'
                                    onClick={() => {
                                        softwareLottieRef.current?.playSegments([0, 320], true)
                                    }}
                                >
                                    <MdReplay size={24} className='icon-link-md' aria-label='Replay' />
                                </button>
                            </div>
                        </li>
                    </ul>
                </HtmlSection>
            </HtmlScrollContainer>

            <HtmlScrollContainer
                top={studySectionTop}
                position='left'
                backgroundTitle='Study'
                topTitle='Where Did You Get Those...'
                bottomTitle={
                    <>
                        My <span className='text-accent'> Study</span>
                    </>
                }
                contentObserverRef={contentObserverRef}
                ref={studySectionRef}
            >
                <HtmlSection
                    title={
                        <>
                            Useful <span className='text-accent'>materials</span> I have studied?
                        </>
                    }
                    contentObserverRef={contentObserverRef}
                >
                    <ul>
                        {studyList.map((study, index) => (
                            <li
                                key={index}
                                style={{
                                    filter: focusStudy && focusStudy !== study.title ? 'opacity(40%)' : undefined
                                }}
                                onMouseEnter={() => setFocusStudy(study.title)}
                                onMouseLeave={() => setFocusStudy('')}
                                className='hidden-content section-list-item'
                            >
                                <a
                                    href={study.href}
                                    target='_blank'
                                    aria-label={study.ariaLabel}
                                    rel='noreferrer noopener'
                                    className='flex w-full rounded-[8px] p-4 -outline-offset-2'
                                >
                                    <figure className='list-img-wrapper'>
                                        <img
                                            loading='lazy'
                                            alt={study.alt}
                                            src={study.image}
                                            className={study.type === 'book' ? 'book-list-img' : 'project-list-img'}
                                        />
                                    </figure>
                                    <div className='w-full'>
                                        <header className='w-[85%]'>
                                            <h1 className='section-list-title'>{study.title}</h1>
                                        </header>
                                        <p className='section-list-summary'>{study.summary}</p>
                                        {study.keypoints}
                                    </div>
                                </a>
                                <div className='icons-list-item'>{study.linkIcons}</div>
                            </li>
                        ))}
                    </ul>
                </HtmlSection>
            </HtmlScrollContainer>

            <HtmlScrollContainer
                top={worksSectionTop}
                position='right'
                backgroundTitle='Works'
                topTitle='I Enjoy Creating Stuff...'
                bottomTitle={
                    <>
                        My <span className='text-accent'> Works</span>
                    </>
                }
                contentObserverRef={contentObserverRef}
                ref={workSectionRef}
            >
                <HtmlSection
                    title={
                        <>
                            <span className='text-accent'>Projects</span> I have done?
                        </>
                    }
                    contentObserverRef={contentObserverRef}
                >
                    <ul>
                        {workList.map((work, index) => (
                            <li
                                key={index}
                                className='hidden-content section-list-item'
                                style={{
                                    filter: focusWork && focusWork !== work.title ? 'opacity(40%)' : undefined
                                }}
                                onMouseEnter={() => setFocusWork(work.title)}
                                onMouseLeave={() => setFocusWork('')}
                            >
                                <a
                                    href={work.href}
                                    target='_blank'
                                    rel='noreferrer noopener'
                                    aria-label={work.ariaLabel}
                                    className='flex w-full rounded-[8px] p-4 -outline-offset-2'
                                >
                                    <figure className='list-img-wrapper'>
                                        <img
                                            loading='lazy'
                                            alt={work.alt}
                                            src={work.image}
                                            className='project-list-img h-full bg-white'
                                        />
                                    </figure>
                                    <div className='w-full'>
                                        <header className='w-[85%]'>
                                            <h1 className='section-list-title'>{work.title}</h1>
                                        </header>
                                        <p className='section-list-summary'>{work.summary}</p>
                                        {work.keypoints}
                                    </div>
                                </a>
                                <div className='icons-list-item'>{work.linkIcons}</div>
                            </li>
                        ))}
                    </ul>
                </HtmlSection>
            </HtmlScrollContainer>

            <HtmlScrollContainer
                top={testimonialsSectionTop}
                position='left'
                backgroundTitle='Testimonials'
                topTitle='Some Remarks By My Coworkers...'
                bottomTitle={
                    <>
                        The <span className='text-accent'> Testimonials</span>
                    </>
                }
                contentObserverRef={contentObserverRef}
                ref={testimonialsSectionRef}
            >
                <HtmlSection
                    title={
                        <>
                            My co-workers's <span className='text-accent'>comments</span>?
                        </>
                    }
                    contentObserverRef={contentObserverRef}
                >
                    <ul>
                        {testimonialsList.map((coworker, index) => (
                            <li
                                key={index}
                                className='hidden-content section-list-item relative'
                                style={{
                                    filter: focusAck && focusAck !== coworker.name ? 'opacity(40%)' : undefined
                                }}
                                onMouseEnter={() => setFocusAck(coworker.name)}
                                onMouseLeave={() => setFocusAck('')}
                            >
                                <a
                                    href={coworker.href}
                                    target='_blank'
                                    aria-label={coworker.ariaLabel}
                                    rel='noreferrer noopener'
                                    className='w-full rounded-[8px] p-4 -outline-offset-2'
                                >
                                    <div>
                                        <div className='w-[75%] max-[500px]:w-full'>
                                            <figure className='flex items-center gap-4 pl-[12px] max-[500px]:flex-col max-[500px]:pl-0 max-[500px]:text-center'>
                                                <img
                                                    alt={coworker.alt}
                                                    loading='lazy'
                                                    src={coworker.image}
                                                    className='testimonials-list-img'
                                                />
                                                <figcaption>
                                                    <h1 className='font-semibold'>{coworker.name}</h1>
                                                    <p className='section-list-summary mt-0'>{coworker.title}</p>
                                                </figcaption>
                                            </figure>
                                        </div>
                                        <p className='section-list-summary mt-4'>{coworker.summary}</p>
                                    </div>
                                </a>
                                <div className='icons-list-item'>{coworker.linkIcons}</div>
                            </li>
                        ))}
                    </ul>
                </HtmlSection>
            </HtmlScrollContainer>

            <HtmlScrollContainer
                top={memorialSectionTop}
                position='right'
                backgroundTitle='Finally'
                topTitle='Other links and quotes'
                bottomTitle={<>Other links.</>}
                contentObserverRef={contentObserverRef}
                ref={memorialSectionRef}
            >
                <HtmlSection title={<>Quotes you should read.</>} contentObserverRef={contentObserverRef}>
                    <p>
                        <strong>"Man can have nothing but what he strives for."</strong>
                        <br />
                        <span className='text-accent'>
                            <em>(Quran 53:39)</em>
                        </span>
                    </p>
                    <p>
                        <strong>"The wound is the place where the Light enters you."</strong>
                        <br />
                        <span className='text-accent'>
                            <em>- Rumi</em>
                        </span>
                    </p>
                </HtmlSection>
                <HtmlSection title={<>Links.</>} contentObserverRef={contentObserverRef}>
                    <p>
                        A google sheet i will use to track my discipline.
                        <a
                            className='flex text-accent'
                            href='https://docs.google.com/spreadsheets/d/1cEpdYpIEQyJs_hlwCSHt7Qst-gbMlfrb0MYifWi7Vso/edit?usp=sharing'
                        >
                            <FaLink />
                        </a>
                    </p>
                </HtmlSection>
            </HtmlScrollContainer>
        </div>
    )
})
