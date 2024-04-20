import david from '../../../public/images/david.jpeg'
import arnur from '../../../public/images/arnur.jpeg'
import daniil from '../../../public/images/daniil.jpeg'
import ali from '../../../public/images/ali.png'

export const metadata = {
  title: 'SylenceSync - About Us',
}

export default function AboutUs() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">About Us</h2>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <div className="rounded-full overflow-hidden w-50 h-50">
                <img src={arnur.src} alt="Jumabekov Arnur" className="w-50 h-50 object-cover" />
              </div>
              <h4 className="h4 mb-2">Jumabekov Arnur</h4>
              <p className="text-lg text-gray-400 text-center">Machine Learning Engineer</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <div className="rounded-full overflow-hidden w-50 h-50">
                <img src={david.src} alt="Torossyan David" className="w-50 h-50 object-cover" />
              </div>
              <h4 className="h4 mb-2">Torossyan David</h4>
              <p className="text-lg text-gray-400 text-center">Python back-end engineer</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <div className="rounded-full overflow-hidden w-50 h-50">
                <img src={daniil.src} alt="Tatarinov Daniil" className="w-50 h-50 object-cover" />
              </div>
              <h4 className="h4 mb-2">Tatarinov Daniil</h4>
              <p className="text-lg text-gray-400 text-center">React front-end and TypeScript back-end developer</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <div className="rounded-full overflow-hidden w-50 h-50">
                <img src={ali.src} alt="Ali Aidaruly" className="w-50 h-50 object-cover" />
              </div>
              <h4 className="h4 mb-2">Ali Aidaruly</h4>
              <p className="text-lg text-gray-400 text-center">Researcher</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
