import { useState } from 'react';
import { Radio, RadioGroup } from '@headlessui/react';
import clsx from 'clsx';

import { Button } from './Components/Button';
import { Container } from './Components/Container';
import { Logomark } from './Components/Logo';

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
        fill="currentColor"
      />
      <circle
        cx="12"
        cy="12"
        r="8.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Plan({
  name,
  price,
  description,
  button,
  features,
  activePeriod,
  logomarkClassName,
  featured = false,
  darkMode,
}) {
  return (
    <section
      className={clsx(
        'flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg',
        featured ? (darkMode ? 'bg-gray-800' : 'bg-gray-900') : (darkMode ? 'bg-gray-800' : 'bg-gray-100'),
        darkMode ? 'shadow-gray-700/10' : 'shadow-gray-900/5'
      )}
    >
      <h3
        className={clsx(
          'flex items-center text-sm font-semibold',
          featured ? (darkMode ? 'text-gray-100' : 'text-white') : (darkMode ? 'text-gray-300' : 'text-gray-900')
        )}
      >
        <Logomark className={clsx('h-6 w-6 flex-none', logomarkClassName)} />
        <span className="ml-4">{name}</span>
      </h3>
      <p
        className={clsx(
          'relative mt-5 flex text-3xl tracking-tight',
          featured ? (darkMode ? 'text-gray-100' : 'text-white') : (darkMode ? 'text-gray-300' : 'text-gray-900')
        )}
      >
        {price.Monthly === price.Annually ? (
          price.Monthly
        ) : (
          <>
            <span
              aria-hidden={activePeriod === 'Annually'}
              className={clsx(
                'transition duration-300',
                activePeriod === 'Annually' &&
                'pointer-events-none translate-x-6 select-none opacity-0'
              )}
            >
              {price.Monthly}
            </span>
            <span
              aria-hidden={activePeriod === 'Monthly'}
              className={clsx(
                'absolute left-0 top-0 transition duration-300',
                activePeriod === 'Monthly' &&
                'pointer-events-none -translate-x-6 select-none opacity-0'
              )}
            >
              {price.Annually}
            </span>
          </>
        )}
      </p>
      <p
        className={clsx(
          'mt-3 text-sm',
          featured ? (darkMode ? 'text-gray-400' : 'text-gray-300') : (darkMode ? 'text-gray-500' : 'text-gray-700')
        )}
      >
        {description}
      </p>
      <div className="order-last mt-6">
        <ul
          role="list"
          className={clsx(
            '-my-2 divide-y text-sm',
            featured
              ? (darkMode ? 'divide-gray-700 text-gray-400' : 'divide-gray-800 text-gray-300')
              : (darkMode ? 'divide-gray-600 text-gray-500' : 'divide-gray-200 text-gray-700')
          )}
        >
          {features.map((feature) => (
            <li key={feature} className="flex py-2">
              <CheckIcon
                className={clsx(
                  'h-6 w-6 flex-none',
                  featured ? (darkMode ? 'text-gray-100' : 'text-white') : (darkMode ? 'text-cyan-300' : 'text-cyan-500')
                )}
              />
              <span className="ml-4 text-left">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <Button
        href={button.href}
        className="mt-6"
        aria-label={`Get started with the ${name} plan for ${price}`}
        style={{
          backgroundColor: featured ? (darkMode ? '#17AEE7' : '#6155A8') : 'white',
          color: featured ? 'white' : 'black'
        }}
      >
        {button.label}
      </Button>
    </section>
  );
}

export default function Pricing({ darkMode }) {
  const [activePeriod, setActivePeriod] = useState('Monthly');


// Standard Service Package
// : 
// • • 
// • 
// • 
// • 
// • 
// • 


  const plans = [
    {
      name: 'Midnight Package',
      featured: false,
      price: { Monthly: '$9/Agent', Annually: '$0' },
      description: 'You’re new to investing but want to do it right. Get started for free.',
      button: {
        label: 'Get started for free',
        href: '/register',
      },
      features: [
        'Hours: 12 AM to 12 PM',
        'Agent Rate: $9/hour',
        'Minimum: 150 hours/month',
        'Total Cost: $1,350',
        'Supervisor Rate: $7/hour',
        'Supervisor Cost: $1,050',
        'Services: Calls, Emails, Driver wake-up, Follow-up on calls, emails, texts',

    
      ],
      logomarkClassName: 'fill-gray-300',
    },
    {
      name: 'Standard Service Package',
      featured: false,
      price: { Monthly: '$14/Agent', Annually: '$70' },
      description: 'You’ve been investing for a while. Invest more and grow your wealth faster.',
      button: {
        label: 'Subscribe',
        href: '/register',
      },
      features: [
        'Hours: 12 AM to 12 PM',
        'Agent Rate: $13/hour',
        'Minimum: 150 hours/month',
        'Total Cost: $1,950',
        'Supervisor Rate: $7/hour',
        'Supervisor Cost: $1,050',
        'Services: Calls, Emails, Driver wake-up, Follow-up on calls, emails, texts',
      ],
      logomarkClassName: 'fill-gray-500',
    },
    {
      name: 'Custom Package',
      featured: true,
      price: { Monthly: '$$$', Annually: '$1,990' },
      description: 'You’ve got a huge amount of assets but it’s not enough. To the moon.',
      button: {
        label: 'Subscribe',
        href: '/register',
      },
      features: [
        'Tailored services based on specific requirements'
        // 'Commission-free trading',
        // 'Multi-layered encryption',
        // 'Real-time tip notifications',
        // 'No investment limits',
        // 'Advanced transaction anonymization',
        // 'Automated tax-loss harvesting',
      ],
      logomarkClassName: darkMode ? 'fill-cyan-500' : 'fill-[#6155A8]',
    }
  ];

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className={clsx(
        'border-t py-20 sm:py-32',
        darkMode ? 'border-gray-700 bg-black' : 'border-gray-200 bg-gray-100'
      )}
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="pricing-title"
            className={clsx(
              'text-3xl font-medium tracking-tight',
              darkMode ? 'text-gray-100' : 'text-gray-900'
            )}
          >
            Flat pricing, no management fees.
          </h2>
          <p className={clsx('mt-2 text-lg', darkMode ? 'text-gray-400' : 'text-gray-600')}>
            Whether you’re one person trying to get ahead or a big firm trying
            to take over the world, we’ve got a plan for you.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="relative">
            <RadioGroup
              value={activePeriod}
              onChange={setActivePeriod}
              className="grid grid-cols-2"
            >
              {['Monthly', 'Annually'].map((period) => (
                <Radio
                  key={period}
                  value={period}
                  className={clsx(
                    'cursor-pointer border px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing.2)-1px)] text-sm outline-2 outline-offset-2 transition-colors hover:border-gray-400',
                    darkMode ? 'border-gray-600 text-gray-400' : 'border-gray-300 text-gray-700',
                    period === 'Monthly' ? 'rounded-l-lg' : '-ml-px rounded-r-lg'
                  )}
                >
                  {period}
                </Radio>
              ))}
            </RadioGroup>
            <div
              aria-hidden="true"
              className={clsx(
                'pointer-events-none absolute inset-0 z-10 grid grid-cols-2 overflow-hidden rounded-lg transition-all duration-300',
                darkMode ? 'bg-[#17a8dd]' : 'bg-[#6155A8]',
                activePeriod === 'Monthly'
                  ? '[clip-path:inset(0_50%_0_0)]'
                  : '[clip-path:inset(0_0_0_calc(50%-1px))]'
              )}
            >
              {['Monthly', 'Annually'].map((period) => (
                <div
                  key={period}
                  className="py-2 text-center text-sm font-semibold text-white"
                >
                  {period}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-10 sm:mt-20 lg:max-w-none lg:grid-cols-3">
          {plans.map((plan) => (
            <Plan key={plan.name} {...plan} activePeriod={activePeriod} darkMode={darkMode} />
          ))}
        </div>
      </Container>
    </section>
  );
}
