import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'

export const metadata = {
  title: 'Vision & Mission | IIT Guwahati Alumni Association',
  description: 'Our vision and mission to cultivate a vibrant and supportive community of IIT Guwahati Alumni.',
}

export default function VisionMissionPage() {
  return (
    <div className="container mx-auto px-6 sm:px-6 lg:px-8">
      <Header />
      <main className="py-12 max-w-4xl mx-auto px-4 sm:px-0">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-text-light dark:text-text-dark">
            Vision - Mission
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-2">
            Indian Institute of Technology Guwahati Alumni Association
          </h2>
        </div>

        {/* Vision Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-text-light dark:text-text-dark">
            Vision
          </h2>
          <div className="bg-gray-50 dark:bg-zinc-800 rounded-lg p-5 sm:p-6 md:p-8 shadow-sm">
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Our vision is to cultivate a vibrant and supportive community of IIT Guwahati Alumni that serves as a strong network of support for all its members. We aim to foster lifelong connections among alumni, creating a nurturing environment where individuals can thrive both personally and professionally. We also want to create an opportunity for the IITGAA community to actively contribute to IIT Guwahati&apos;s development, India&apos;s growth and make a positive impact on their local community.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-text-light dark:text-text-dark">
            Mission
          </h2>
          <div className="bg-gray-50 dark:bg-zinc-800 rounded-lg p-5 sm:p-6 md:p-8 shadow-sm">
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
              Our mission is to cultivate a robust and interconnected community of IIT Guwahati alumni, dedicated to mutual support, continuous learning, and impactful contributions to IIT Guwahati, India and society. We strive to:
            </p>

            <div className="space-y-6 ">
              {/* Mission Point 1 */}
              <div className="border-l-4 border-primary pl-3 sm:pl-4 py-4">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-text-light dark:text-text-dark">
                  Building a Strong IITGAA Community:
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Foster meaningful connections and camaraderie among alumni, creating a sense of belonging and unity within the IITGAA family.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Provide inclusive platforms for alumni to engage, collaborate, and support each other in their professional and personal endeavours</span>
                  </li>
                </ul>
              </div>

              {/* Mission Point 2 */}
              <div className="border-l-4 border-primary pl-3 sm:pl-4 py-4">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-text-light dark:text-text-dark">
                  Promote Excellence and Innovation within IITG community:
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Recognize and celebrate the achievements of our alumni, inspiring the next generation to strive for excellence.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Encourage innovation, research, and entrepreneurship among alumni, fostering an environment of continuous growth and contribution.</span>
                  </li>
                </ul>
              </div>

              {/* Mission Point 3 */}
              <div className="border-l-4 border-primary pl-3 sm:pl-4 py-4">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-text-light dark:text-text-dark">
                  Give Back to Alma Mater:
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Encourage alumni to contribute to the growth and development of the institute IIT Guwahati. Fostering a culture of gratitude and philanthropy.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Enabling active and bi-directional interaction and collaboration between the alumni and current students and faculty.</span>
                  </li>
                </ul>
              </div>

              {/* Mission Point 4 */}
              <div className="border-l-4 border-primary pl-3 sm:pl-4 py-4">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-text-light dark:text-text-dark">
                  Contributing to India&apos;s Growth and Society&apos;s Betterment:
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Harness the collective expertise, resources, and influence of our alumni network to actively contribute to India&apos;s growth and development.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Encouraging chapters to undertake initiatives that address societal challenges and promote positive change, leveraging the skills and knowledge of our diverse alumni base.</span>
                  </li>
                </ul>
              </div>

              {/* Mission Point 5 */}
              <div className="border-l-4 border-primary pl-3 sm:pl-4 py-4">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-text-light dark:text-text-dark">
                  Making a Local Impact with Global Reach:
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Empower each IITGAA chapter to make a noticeable positive impact on the entire local community within its jurisdiction.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Encourage alumni to engage in philanthropic, social, and community service activities that benefit the broader society, demonstrating our commitment to being responsible global citizens.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Adoption Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-text-light dark:text-text-dark">
            Adoption
          </h2>
          <div className="bg-gray-50 dark:bg-zinc-800 rounded-lg p-5 sm:p-6 md:p-8 shadow-sm">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-text-light dark:text-text-dark">
              Constitutional Amendment
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <span className="font-semibold">Proposer:</span> Akshay Jajoo
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
              We can incorporate the above mission and vision statement to be adopted as a permanent mission and vision statement via a constitutional amendment.
            </p>
            <div className="mt-6">
              <h4 className="text-base sm:text-lg font-semibold mb-2 text-text-light dark:text-text-dark">
                How will chapters adopt it?
              </h4>
              <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Each IITGAA affiliated chapter is free to design and execute their programs independently. Though they must ensure that the programs are fitting at-least one of the mission points and aligns with the vision.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

