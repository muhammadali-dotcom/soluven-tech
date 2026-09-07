export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

// TODO(open item): no real client testimonials collected yet. Populate this
// once available — Testimonials.tsx renders nothing while it's empty.
export const testimonials: Testimonial[] = [];
