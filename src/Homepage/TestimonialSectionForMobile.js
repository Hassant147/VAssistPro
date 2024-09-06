import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import './ReviewsForMobile.css'; // Ensure this path is correct

const reviews = [
  {
    title: 'Excellent Service',
    body: 'V Assist Pro Inc. provided exceptional service, and their team was extremely professional and helpful.',
    author: 'John Doe',
    rating: 5,
  },
  {
    title: 'Great Experience',
    body: 'I had a great experience with V Assist Pro Inc. They were efficient and met all my expectations.',
    author: 'Jane Smith',
    rating: 4,
  },
  {
    title: 'Highly Recommend',
    body: 'I highly recommend V Assist Pro Inc. Their attention to detail and customer service are outstanding.',
    author: 'Chris Wilson',
    rating: 5,
  },
  {
    title: 'Very Satisfied',
    body: 'I am very satisfied with the service from V Assist Pro Inc. They went above and beyond to ensure my needs were met.',
    author: 'Amanda Taylor',
    rating: 5,
  },
  {
    title: 'Quick and Efficient',
    body: 'V Assist Pro Inc. provided quick and efficient service. I am pleased with the results.',
    author: 'Laura Martin',
    rating: 4,
  },
  {
    title: 'Outstanding Performance',
    body: 'The performance of V Assist Pro Inc. was outstanding. I am extremely happy with their work.',
    author: 'Daniel Harris',
    rating: 5,
  },
  {
    title: 'Professional and Reliable',
    body: 'V Assist Pro Inc. is professional and reliable. I trust them with my business needs.',
    author: 'Brian Walker',
    rating: 4,
  },
  {
    title: 'Exceeded Expectations',
    body: 'V Assist Pro Inc. exceeded my expectations with their top-notch service and professionalism.',
    author: 'Olivia Parker',
    rating: 5,
  },
  {
    title: 'Exceptional Quality',
    body: 'The quality of service provided by V Assist Pro Inc. is exceptional. They truly care about their clients.',
    author: 'Liam Turner',
    rating: 5,
  },
  {
    title: 'Impressive Service',
    body: 'I am impressed with the service provided by V Assist Pro Inc. They are reliable and efficient.',
    author: 'Sophia White',
    rating: 4,
  },
  {
    title: 'Top-Notch Support',
    body: 'V Assist Pro Inc. offers top-notch support. They are always available to help and provide great solutions.',
    author: 'Mason Green',
    rating: 5,
  },
  {
    title: 'Fantastic Team',
    body: 'The team at V Assist Pro Inc. is fantastic. They work hard to meet all of our needs.',
    author: 'Isabella Brown',
    rating: 5,
  }
];
  

function StarIcon({ filled }) {
    return (
        <svg viewBox="0 0 20 20" aria-hidden="true" className={filled ? 'starForMobile star-filledForMobile' : 'starForMobile'}>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
    );
}

function StarRating({ rating }) {
    return (
        <div className="star-ratingForMobile">
            {[...Array(5).keys()].map((index) => (
                <StarIcon key={index} filled={rating > index} />
            ))}
        </div>
    );
}

function Review({ title, body, author, rating, darkMode }) {
    return (
        <div className={`reviewForMobile ${darkMode ? 'dark' : ''}`}>
            <blockquote>
                <StarRating rating={rating} />
                <p className={`review-titleForMobile ${darkMode ? 'dark' : ''}`}>{title}</p>
                <p className={`review-bodyForMobile ${darkMode ? 'dark' : ''}`}>{body}</p>
            </blockquote>
            <figcaption className={`review-authorForMobile ${darkMode ? 'dark' : ''}`}>{author}</figcaption>
        </div>
    );
}

function ReviewGridSingleColumn({ darkMode }) {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.4 });

    return (
        <div ref={containerRef} className={`review-grid-single-columnForMobile ${darkMode ? 'dark' : ''}`}>
            {isInView && reviews.map((review, index) => (
                <Review key={index} {...review} darkMode={darkMode} />
            ))}
        </div>
    );
}

export default function ReviewsForMobile({ darkMode }) {
    return (
        <>
            <section id="reviews-smallForMobile" aria-labelledby="reviews-titleForMobile" className={`sectionForMobile review-section-smallForMobile ${darkMode ? 'dark' : ''}`}>
                <div className="containerForMobile">
                    <h2 id="reviews-titleForMobile" className={`section-titleForMobile ${darkMode ? 'dark' : ''}`}>
                        Everyone is changing their life with V Assist Pro Inc.
                    </h2>
                    <p className={`section-subtitleForMobile ${darkMode ? 'dark' : ''}`}>
                        Thousands of people have doubled their net-worth in the last 30 days.
                    </p>
                    <ReviewGridSingleColumn darkMode={darkMode} />
                </div>
            </section>
        </>
    );
}
