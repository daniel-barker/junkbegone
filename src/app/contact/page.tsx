import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Junk Be Gone LLC",
  description:
    "Contact Junk Be Gone LLC for junk removal services in Indiana. Get a free estimate or call us directly.",
};

export default function ContactPage() {
  return (
    <div className="py-16 bg-[#222] text-white">
      <div className="max-w-7xl mx-auto px-[var(--spacing-container)]">
        <h1
          className="text-4xl font-bold mb-8 text-center text-[#e94e3f]"
          style={{ fontFamily: "Impact, Arial Black, sans-serif" }}
        >
          Contact Us
        </h1>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-gray-300">
          Have junk that needs to be removed? Contact us today for a free
          estimate or to schedule a pickup. We&apos;re ready to help you reclaim
          your space!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <ContactForm />

          {/* Contact Information */}
          <div>
            <div className="bg-[#2b2b2b] p-8 rounded-lg shadow-md mb-8 border-2 border-[#e94e3f]">
              <h2
                className="text-2xl font-semibold mb-6 text-[#e94e3f]"
                style={{ fontFamily: "Impact, Arial Black, sans-serif" }}
              >
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[var(--color-jbg-red)]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-medium text-white">Phone</p>
                    <p className="text-gray-300">
                      <a href="tel:3179935240" className="hover:text-[#e94e3f]">
                        Collan: 317-993-5240
                      </a>
                    </p>
                    <p className="text-gray-300">
                      <a href="tel:3176541715" className="hover:text-[#e94e3f]">
                        Paul: 317-654-1715
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[var(--color-jbg-red)]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-medium text-white">
                      Business Hours
                    </p>
                    <p className="text-gray-300">Monday - Friday: 8am - 6pm</p>
                    <p className="text-gray-300">Saturday: 9am - 4pm</p>
                    <p className="text-gray-300">Sunday: Closed</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[var(--color-jbg-red)]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-medium text-white">
                      Service Area
                    </p>
                    <p className="text-gray-300">
                      Indianapolis and surrounding areas
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="bg-gray-200 rounded-lg overflow-hidden">
              <div className="relative w-full h-0 pb-[75%]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196237.9374259436!2d-86.29755568812844!3d39.779667950135895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b50ffa7796a03%3A0xd68e9df640b9ea7c!2sIndianapolis%2C%20IN!5e0!3m2!1sen!2sus!4v1748826224594!5m2!1sen!2sus"
                  className="absolute top-0 left-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#191919] p-8 rounded-lg shadow-md text-center border-2 border-[#e94e3f]">
          <h2
            className="text-2xl font-semibold mb-4 text-[#e94e3f]"
            style={{ fontFamily: "Impact, Arial Black, sans-serif" }}
          >
            Need Immediate Assistance?
          </h2>
          <p className="text-lg mb-6 text-gray-300">Call us directly</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:3179935240"
              className="bg-[var(--color-jbg-red)] hover:bg-red-600 text-white font-bold py-3 px-6 rounded-md transition-colors"
            >
              Call Collan: 317-993-5240
            </a>
            <a
              href="tel:3176541715"
              className="bg-[var(--color-jbg-red)] hover:bg-red-600 text-white font-bold py-3 px-6 rounded-md transition-colors"
            >
              Call Paul: 317-654-1715
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
