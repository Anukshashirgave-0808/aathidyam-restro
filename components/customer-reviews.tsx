"use client"

import { useEffect, useState } from "react"
import { Star } from "lucide-react"

const reviews = [
  {
    name: "Anjali Rao",
    review:
      "The food at Aathidyam is absolutely delicious! The Chicken Pulao was flavorful and perfectly cooked.",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    review:
      "Authentic South Indian taste with a beautiful ambience. Highly recommend the Mutton Pulao!",
    rating: 5,
  },
  {
    name: "Sneha Kulkarni",
    review:
      "Loved the hospitality and the food quality. Prawns Pulao was outstanding!",
    rating: 4,
  },
  {
    name: "Arjun Patil",
    review:
      "A perfect place for family dining. Fresh ingredients and excellent service.",
    rating: 5,
  },
]

export default function CustomerReviews() {
  const [index, setIndex] = useState(0)
  const [animate, setAnimate] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false)
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % reviews.length)
        setAnimate(true)
      }, 300)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const review = reviews[index]

  return (
    <section className="py-28 px-6 bg-linear-to-b from-background to-card overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <p className="text-accent font-semibold uppercase tracking-widest mb-3">
          Customer Reviews
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-14">
          Loved by Our Guests
        </h2>

        {/* Review Card */}
        <div
          className={`mx-auto max-w-3xl bg-background/80 backdrop-blur-xl rounded-2xl p-10 border border-accent/20 shadow-2xl transition-all duration-700
          ${animate ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-95"}`}
        >
          {/* Stars */}
          <div className="flex justify-center mb-6">
            {Array.from({ length: review.rating }).map((_, i) => (
              <Star
                key={i}
                className="w-6 h-6 text-accent fill-accent transition-transform duration-300 hover:scale-110"
              />
            ))}
          </div>

          {/* Review Text */}
          <p className="text-xl md:text-2xl text-muted-foreground italic leading-relaxed mb-8">
            “{review.review}”
          </p>

          {/* Reviewer Name */}
          <p className="font-semibold text-lg text-foreground">
            — {review.name}
          </p>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {reviews.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                i === index ? "bg-accent scale-125" : "bg-accent/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
