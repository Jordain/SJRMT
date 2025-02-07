import React from "react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 md:py-6 flex justify-center">
          <img
            src="/img/logo.png"
            alt="Simone Joyce RMT"
            className="h-20 md:h-24 lg:h-28 transition-transform duration-300 hover:scale-105"
          />
        </div>
      </header>

      {/* Hero Section with Booking */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Experience Professional Massage Therapy
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mt-4">
            Restore balance to your body and mind
          </p>
          <a href="https://simonejoycermtltd.janeapp.com/#/staff_member/1/treatment/2">
            <button className="mt-8 bg-white text-blue-600 px-8 py-4 rounded-lg text-lg md:text-xl font-semibold hover:bg-blue-50 transition-transform duration-300 shadow-lg hover:scale-105">
              Book Your Session Now
            </button>
          </a>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center max-w-6xl">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <img
              src="/img/simone.jpg"
              alt="Simone Joyce"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
          <div className="md:w-2/3 md:pl-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              About Simone
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Simone is a very enthusiastic person when it comes to health and
              fitness. With this passion, she wanted to expand her knowledge of
              the bio-kinetics of the human body. Simone graduated with a
              Bachelor of Kinesiology Degree from University of the Fraser
              Valley in 2016 and continued her studies in the field of Massage
              Therapy. She received her RMT certification from The West Coast
              College of Massage Therapy, graduating in 2021.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              Simone has always put the needs of others before her own, making
              her a very caring and empathetic individual, while wishing to see
              the best in everyone. Her skills, knowledge, and hands-on
              experience present an opportunity to help engage, educate, and
              rehabilitate her clients – helping them to become functionally
              balanced, both physically and mentally. Simone plans to continue
              expanding her working knowledge with continuing education courses
              that will keep her current in the evolving science of Physical
              Education.
            </p>
          </div>
        </div>
      </section>

      {/* Rates Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-gray-900 mb-12">
            Treatment Rates
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                duration: "60",
                price: "125.00",
                highlight: true,
                bookingUrl:
                  "https://simonejoycermtltd.janeapp.com/#/staff_member/1/treatment/2",
              },
              {
                duration: "45",
                price: "105.00",
                bookingUrl:
                  "https://simonejoycermtltd.janeapp.com/#/staff_member/1/treatment/3",
              },
              {
                duration: "30",
                price: "75.00",
                bookingUrl:
                  "https://simonejoycermtltd.janeapp.com/#/staff_member/1/treatment/4",
              },
            ].map((rate, index) => (
              <div
                key={index}
                className={`text-center p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 ${
                  rate.highlight
                    ? "bg-white border-2 border-blue-600"
                    : "bg-white"
                }`}
              >
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {rate.duration}
                  <span className="text-xl ml-1">min</span>
                </div>
                <div className="text-2xl font-semibold text-blue-600 mb-4">
                  ${rate.price}
                </div>
                <a
                  href={rate.bookingUrl}
                  className={`inline-block px-6 py-3 rounded-lg text-lg font-semibold transition-colors duration-300 ${
                    rate.highlight
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-100 text-blue-600 hover:bg-gray-200"
                  }`}
                >
                  Book Now
                </a>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-700 text-lg leading-relaxed">
            ICBC and Work safe BC clients please call in advance prior to booking.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-4"> 
            Patient pays full amount after treatment and receives an invoice allowing submission to your service provider. 
            </p>
          </div>
        </div>
      </section>

      {/* Directions Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-gray-900 mb-8">
            Our Location
          </h2>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 max-w-xl mx-auto">
            <p className="text-gray-700 text-lg text-center">
              7045 Centeninal Dr., Chilliwack, B.C V2R 4C7
            </p>
            <div className="mt-4 text-center">
              <p className="font-medium text-xl text-gray-800">
                Hours of Operation:
              </p>
              <ul className="text-gray-600 mt-2 space-y-1 text-lg">
                <li>Monday, Wednesday: 9:00 AM - 5:00 PM</li>
                <li>Tuesday, Thursday: 11:00 AM - 7:00 PM</li>
                <li>Friday, Saturday, Sunday: Closed</li>
              </ul>
            </div>
            <a
              href="https://maps.google.com/?q=Simone+Joyce+RMT,+7045+Centennial+Dr,+Chilliwack,+BC+V2R+4C7"
              className="block w-full mt-6"
            >
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-transform duration-300 shadow-md hover:scale-105">
                Get Directions
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Entrance Path Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-gray-900 mb-8">
            Finding Our Entrance
          </h2>
          <div className="max-w-4xl mx-auto relative rounded-lg overflow-hidden shadow-lg">
            <img
              src="/img/path.png"
              alt="Clinic entrance path"
              className="w-full object-cover"
            />
            <div className="flex flex-col">
              <div className="bg-black bg-opacity-60 text-white p-4 backdrop-blur-md">
                <p className="text-center text-sm md:text-base">
                  Follow the marked path to our main entrance. Accessible ramp
                  available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Phone",
                content: "(604) 799-1707",
                link: "tel:6047991707",
              },
              {
                title: "Email",
                content: "simonejoycermt@outlook.com",
                link: "mailto:simonejoycermt@outlook.com",
              },
              { title: "Parking", content: "Free parking available" },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-lg shadow-sm"
              >
                <h3 className="font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                {item.link ? (
                  <a
                    href={item.link}
                    className="text-blue-600 text-lg font-medium hover:underline"
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="text-gray-600 text-lg">{item.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-lg font-semibold mb-4">Simone Joyce RMT</h3>
              <p className="text-gray-400">
                Professional Massage Therapy Services
              </p>
              <p className="text-gray-400 mt-2">
                Licensed and Registered Massage Therapist
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="https://simonejoycermtltd.janeapp.com/#/staff_member/1/treatment/2"
                    className="hover:text-white"
                  >
                    Book Appointment
                  </a>
                </li>
                <li>
                  <a
                    href="https://simonejoycermtltd.janeapp.com/#/staff_member/1/treatment/2"
                    className="hover:text-white"
                  >
                    Services & Rates
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:simonejoycermt@outlook.com"
                    className="hover:text-white"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
            <p>© 2025 Simone Joyce RMT. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
