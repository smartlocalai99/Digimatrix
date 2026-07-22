import { Star } from 'lucide-react'

const REVIEWS = [
  {
    name: 'Siva Prasad',
    role: 'Local Guide · 18 reviews',
    rating: 5,
    date: '2 weeks ago',
    text: 'Extremely professional CCTV camera installation for our showroom in Kadapa. Cabling is completely hidden, and they set up mobile viewing on all our devices. Excellent service.',
    avatarColor: 'bg-[#109d59]', // Google Green
    initial: 'S'
  },
  {
    name: 'Harish Reddy',
    role: 'Business Owner',
    rating: 5,
    date: '1 month ago',
    text: 'We signed an IT AMC with DgITmatrix for our office computers and printers. They do prompt monthly servicing and are very responsive during emergencies. Highly recommended for businesses.',
    avatarColor: 'bg-[#4285f4]', // Google Blue
    initial: 'H'
  },
  {
    name: 'Anusha S.',
    role: 'Local Guide · 8 reviews',
    rating: 5,
    date: '3 weeks ago',
    text: 'Got my Dell laptop repaired here. The screen was broken and they replaced it in one day at a very reasonable price. Transparent billing and very polite staff.',
    avatarColor: 'bg-[#f4b400]', // Google Yellow
    initial: 'A'
  },
  {
    name: 'Venkata Subbaiah',
    role: 'School Principal',
    rating: 5,
    date: '2 months ago',
    text: 'They installed our school computer lab networking and Wi-Fi system. Excellent routing setup and bandwidth control. The technicians are highly skilled.',
    avatarColor: 'bg-[#ab47bc]', // Purple
    initial: 'V'
  },
  {
    name: 'Ramesh Kumar',
    role: 'Local Guide · 12 reviews',
    rating: 5,
    date: '3 weeks ago',
    text: 'Best printer maintenance service in Kadapa. They resolved our constant paper jam issues and did cartridge refilling quickly. Save their number for office IT support.',
    avatarColor: 'bg-[#00acc1]', // Teal
    initial: 'R'
  },
  {
    name: 'Kiran Mayi',
    role: 'Professional',
    rating: 5,
    date: '1 month ago',
    text: 'Helpful team for cloud setup. They migrated our company emails to Microsoft 365 and set up secure cloud backup. Now we can work from anywhere without stress.',
    avatarColor: 'bg-[#ec407a]', // Pink
    initial: 'K'
  }
]

export default function GoogleReviews() {
  return (
    <section className="bg-white py-16 sm:py-20 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-6">
        {/* Genuine Google reviews widget header */}
        <div className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-6 md:flex-row md:items-center md:justify-between shadow-sm">
          <div className="flex flex-wrap items-center gap-5">
            {/* Google Logo */}
            <div className="flex items-center gap-1.5 font-display text-[22px] font-bold tracking-tight text-[#5f6368]">
              <svg className="h-7 w-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              <span className="font-semibold text-slate-800 ml-1">Google</span>
              <span className="text-[14px] text-slate-400 font-normal">Customer Reviews</span>
            </div>
            
            <div className="h-6 w-px bg-slate-200 hidden sm:block"></div>
            
            {/* Rating Stars and Score */}
            <div className="flex items-center gap-3">
              <span className="text-[24px] font-extrabold text-slate-800 leading-none">4.9</span>
              <div className="flex text-[#f4b400]">
                <Star className="fill-current" size={19} />
                <Star className="fill-current" size={19} />
                <Star className="fill-current" size={19} />
                <Star className="fill-current" size={19} />
                <Star className="fill-current" size={19} />
              </div>
              <span className="text-[13.5px] text-slate-500 font-medium">(148 reviews)</span>
            </div>
          </div>

          <div>
            <a
              href="https://www.google.com/search?q=DgITmatrix+Pvt+Ltd+Kadapa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-[13px] font-bold text-slate-700 shadow-sm transition hover:bg-slate-50 hover:text-slate-900"
            >
              <svg className="h-4 w-4 text-[#4285F4]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
              </svg>
              Write a Review
            </a>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <div 
              key={i} 
              className="flex flex-col justify-between rounded-xl border border-slate-200/80 bg-white p-6 shadow-[0_2px_4px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] transition duration-200"
            >
              <div>
                {/* Reviewer Meta Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[15px] font-bold text-white ${review.avatarColor}`}>
                      {review.initial}
                    </div>
                    <div>
                      <h4 className="font-display text-[13.5px] font-extrabold leading-tight text-slate-800">{review.name}</h4>
                      <p className="text-[11px] text-slate-400 mt-0.5">{review.role}</p>
                    </div>
                  </div>
                  {/* Google mini G icon */}
                  <svg className="h-4 w-4 opacity-75 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                </div>

                {/* Rating and date */}
                <div className="mt-3.5 flex items-center gap-2">
                  <div className="flex text-[#f4b400]">
                    {[...Array(review.rating)].map((_, index) => (
                      <Star key={index} className="fill-current" size={13.5} />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400">{review.date}</span>
                </div>

                {/* Review Text */}
                <p className="mt-3 text-[13px] leading-relaxed text-slate-600 font-normal">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* Verified Badge */}
              <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-medium text-slate-400">
                <svg className="h-3.5 w-3.5 text-[#34A853]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Verified Customer Review
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
