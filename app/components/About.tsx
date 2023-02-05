
import { BoltIcon, DevicePhoneMobileIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Competitive exchange rates',
    description:
      'Get the best deal for your money with competitive exchange rates. No hidden fees, no surprises.',
    icon: GlobeAltIcon,
  },
  {
    name: 'No hidden fees',
    description:
      'Say goodbye to unexpected fees and hidden charges. With us, what you see is what you get.',
    icon: ScaleIcon,
  },
  {
    name: 'Transfers are instant',
    description:
      'Experience fast and hassle-free transfers with our instant transfer service.',
    icon: BoltIcon,
  },
  {
    name: 'Mobile notifications',
    description:
      'Stay informed and on top of your transfers with mobile notifications. Get real-time updates on the go.',
    icon: DevicePhoneMobileIcon,
  },
]

const about = () => {
  return (
    <div className="bg-violet-600 font-product mt-60 pb-44 pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className=" font-semibold text-2xl leading-8 text-product-yellow">Fitness</h2>
          <p className="mt-6 text-6xl text-white font-bold tracking-tight">A better way to improve your Health</p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white">
            Take control of your health and reach your fitness goals with FitAI, your virtual personal trainer. With customized exercise and diet plans based on AI technology, you'll get the support you need to transform your health for the better.
          </p>
        </div>

        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-indigo-500 sm:shrink-0">
                  <feature.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 text-left text-white">{feature.name}</p>
                  <p className="mt-2 text-base leading-7 text-left text-white">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default about
