import { Check, X } from "lucide-react"

const pricing = {
  frequencies: [
    { value: 'monthly', label: 'Monthly' },
    { value: 'annually', label: 'Annually' },
  ],
  tiers: [
    {
      name: 'Employee',
      id: 'tier-employee',
      href: '#',
      featured: false,
      description: 'Traditional full time employee.',
      price: { monthly: '$18,750', annually: '$225,000+' },
      mainFeatures: ['Traditional', 'Long-Term', 'Deeper Culture Fit'],
    },
    {
      name: 'Fractional',
      id: 'tier-fractional',
      href: '#',
      featured: true,
      description: 'Align their actions with your company culture and long-term goals.',
      price: { monthly: '$60', annually: '$576' },
      mainFeatures: [
        'Specialized',
        'Flexibility',
        'Perspective',
        'Cost Effectiveness',
        'Mentorship',
        'Focused Tasks',
      ],
    },
    {
      name: 'Consultant',
      id: 'tier-consultant',
      href: '#',
      featured: false,
      description: 'Project specific, agreeing to accomplish tasks within set parameters.',
      price: { monthly: '$30', annually: '$288' },
      mainFeatures: ['Specialized', 'Objectivity', 'Project Based', 'No Commitment'],
    },
  ],
  sections: [
    {
      name: '',
      features: [
        { name: 'Experienced', tiers: { Employee: false, Fractional: true, Consultant: 'Sometimes' } },
        { name: 'Cost Savings', tiers: { Employee: false, Fractional: true, Consultant: 'Sometimes' } },
        { name: 'Targeted Scope', tiers: { Employee: false, Fractional: true, Consultant: true } },
        { name: 'Team Member', tiers: { Employee: true, Fractional: true, Consultant: false } },
        { name: 'Exclusive', tiers: { Employee: true, Fractional: false, Consultant: false } },
        { name: 'Mentorship', tiers: { Employee: false, Fractional: true, Consultant: 'Sometimes' } },
        { name: '3 months free advisor', tiers: { Employee: false, Fractional: true, Consultant: false } },
      ],
    },
  ],
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Roles() {

  return(
    <div className="relative bg-indigo-100 lg:pt-14">
      <div className="m-8 pt-16 max-w-7xl ">
      <h1 className="text-2xl font-bold text-indigo-400 mb-8">Role Comparison</h1>
      <p>There are many reasons why it's best to hire leadership in-house, creating a permanent relationship and commitment. There are times when fractional workers make sense. When part-time flexibility and pin-point role clarity is more importnant than commitment.</p>
      </div>
      <div className="mx-auto max-w-7xl px-6 py-8 sm:py-18 lg:px-8">
        <section aria-labelledby="mobile-comparison-heading" className="lg:hidden">
          <h2 id="mobile-comparison-heading" className="sr-only">Role Comparison</h2>
          <div className="mx-auto max-w-2xl space-y-16">
          {pricing.tiers.map((tier) => (
            <div key={tier.id} className="border-t border-gray-900/10">
              <div
                className={classNames(
                  tier.featured ? 'border-indigo-600' : 'border-transparent',
                  '-mt-px w-72 border-t-2 pt-10 md:w-80'
                )}
              >
                <h3
                  className={classNames(
                    tier.featured ? 'text-indigo-600' : 'text-gray-900',
                    'text-md font-bold leading-6'
                  )}
                >
                  {tier.name}
                </h3>
                <p className="mt-1 text-sm leading-6 text-gray-600">{tier.description}</p>
              </div>

              <div className="mt-10 space-y-10">
                {pricing.sections.map((section) => (
                  <div key={section.name}>
                    <h4 className="text-sm font-semibold leading-6 text-gray-900">{section.name}</h4>
                    <div className="relative mt-6">
                      {/* Fake card background */}
                      <div
                        aria-hidden="true"
                        className="absolute inset-y-0 right-0 hidden w-1/2 rounded-lg bg-white shadow-sm sm:block"
                      />

                      <div
                        className={classNames(
                          tier.featured ? 'ring-2 ring-indigo-600' : 'ring-1 ring-gray-900/10',
                          'relative rounded-lg bg-white shadow-sm sm:rounded-none sm:bg-transparent sm:shadow-none sm:ring-0'
                        )}
                      >
                        <dl className="divide-y divide-gray-200 text-sm leading-6">
                          {section.features.map((feature) => (
                            <div
                              key={feature.name}
                              className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
                            >
                              <dt className="pr-4 text-gray-600">{feature.name}</dt>
                              <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                                {typeof feature.tiers[tier.name] === 'string' ? (
                                  <span
                                    className={
                                      tier.featured ? 'font-semibold text-indigo-600' : 'text-gray-900'
                                    }
                                  >
                                    {feature.tiers[tier.name]}
                                  </span>
                                ) : (
                                  <>
                                    {feature.tiers[tier.name] === true ? (
                                      <Check
                                        className="mx-auto h-5 w-5 text-indigo-600"
                                        aria-hidden="true"
                                      />
                                    ) : (
                                      <X
                                        className="mx-auto h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                      />
                                    )}

                                    <span className="sr-only">
                                      {feature.tiers[tier.name] === true ? 'Yes' : 'No'}
                                    </span>
                                  </>
                                )}
                              </dd>
                            </div>
                          ))}
                        </dl>
                      </div>

                      {/* Fake card border */}
                      <div
                        aria-hidden="true"
                        className={classNames(
                          tier.featured ? 'ring-2 ring-indigo-600' : 'ring-1 ring-gray-900/10',
                          'pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 rounded-lg sm:block'
                        )}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        </section>

        <section aria-labelledby="comparison-heading" className="hidden lg:block">
          <h2 id="comparison-heading" className="sr-only">role comparison</h2>

          <div className="grid grid-cols-4 gap-x-8 border-t border-gray-900/10 before:block">
            {pricing.tiers.map((tier) => (
                    <div key={tier.id} aria-hidden="true" className="-mt-px">
                      <div
                        className={classNames(
                          tier.featured ? 'border-indigo-600' : 'border-transparent',
                          'border-t-2 pt-10'
                        )}
                      >
                        <p
                          className={classNames(
                            tier.featured ? 'text-indigo-600' : 'text-gray-900',
                            'text-md font-bold leading-6'
                          )}
                        >
                          {tier.name}
                        </p>
                        <p className="mt-1 text-sm leading-6 text-gray-600">{tier.description}</p>
                      </div>
                    </div>
            ))}
          </div>
          <div className="-mt-6 space-y-16">
                  {pricing.sections.map((section) => (
                    <div key={section.name}>
                      <h3 className="text-md font-bold leading-6 text-gray-900">{section.name}</h3>
                      <div className="relative -mx-8 mt-10">
                        {/* Fake card backgrounds */}
                        <div
                          className="absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block"
                          aria-hidden="true"
                        >
                          <div className="h-full w-full rounded-lg bg-white shadow-sm" />
                          <div className="h-full w-full rounded-lg bg-white shadow-sm" />
                          <div className="h-full w-full rounded-lg bg-white shadow-sm" />
                        </div>

                        <table className="relative w-full border-separate border-spacing-x-8">
                          <thead>
                            <tr className="text-left">
                              <th scope="col">
                                <span className="sr-only">Feature</span>
                              </th>
                              {pricing.tiers.map((tier) => (
                                <th key={tier.id} scope="col">
                                  <span className="sr-only">{tier.name}</span>
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {section.features.map((feature, featureIdx) => (
                              <tr key={feature.name}>
                                <th
                                  scope="row"
                                  className="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900"
                                >
                                  {feature.name}
                                  {featureIdx !== section.features.length - 1 ? (
                                    <div className="absolute inset-x-8 mt-3 h-px bg-gray-200" />
                                  ) : null}
                                </th>
                                {pricing.tiers.map((tier) => (
                                  <td key={tier.id} className="relative w-1/4 px-4 py-0 text-center">
                                    <span className="relative h-full w-full py-3">
                                      {typeof feature.tiers[tier.name] === 'string' ? (
                                        <span
                                          className={classNames(
                                            tier.featured ? 'font-semibold text-indigo-600' : 'text-gray-900',
                                            'text-sm leading-6'
                                          )}
                                        >
                                          {feature.tiers[tier.name]}
                                        </span>
                                      ) : (
                                        <>
                                          {feature.tiers[tier.name] === true ? (
                                            <Check className="mx-auto h-5 w-5 text-indigo-600" aria-hidden="true" />
                                          ) : (
                                            <X
                                              className="mx-auto h-5 w-5 text-gray-400"
                                              aria-hidden="true"
                                            />
                                          )}

                                          <span className="sr-only">
                                            {feature.tiers[tier.name] === true ? 'Yes' : 'No'}
                                          </span>
                                        </>
                                      )}
                                    </span>
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>

                        {/* Fake card borders */}
                        <div
                          className="pointer-events-none absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block"
                          aria-hidden="true"
                        >
                          {pricing.tiers.map((tier) => (
                            <div
                              key={tier.id}
                              className={classNames(
                                tier.featured ? 'ring-2 ring-indigo-600' : 'ring-1 ring-gray-900/10',
                                'rounded-lg'
                              )}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
        </section>

      </div>
    </div>
  )
}