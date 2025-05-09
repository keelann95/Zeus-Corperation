import { useState } from 'react';

export function CTASection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Submitted email:', email);
    setEmail('');
    // In a real implementation, you would send this to a server
  };

  return (
    <section className="py-12 bg-secondary text-white">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold mb-2">
              Join The <span className="text-primary">Zeus Corporation</span> Experience
            </h3>
            <p className="text-gray-400">Top Notch Enterprise Solutions.</p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-6 md:mt-0 flex flex-col sm:flex-row w-full md:w-auto gap-3"
          >
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="rounded-full px-6 py-3 bg-white/10 border border-gray-700 focus:outline-none focus:border-primary text-white w-full sm:w-64"
            />
            <button
              type="submit"
              className="btn btn-primary"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
