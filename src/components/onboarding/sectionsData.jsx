
export const sectionsData = {
  meet_platform: {
    id: 'meet_platform',
    title: 'Meet the Premium Platform',
    icon: '🎯',
    category: 'Overview',
    steps: [
      {
        title: 'The Premium Platform',
        description: "Enable any business group in Wix to create, sell, manage, and scale their offerings quickly and flexibly with a fully integrated monetization & billing platform.",
        keyPoints: [
          "Create a live offering by the end of onboarding",
          "Build custom purchase flows for your users",
          "Automate billing and lifecycle management",
          "Leverage integrated monetization capabilities"
        ]
      },
      {
        title: 'Platform Domains',
        description: 'The Premium Platform is built around four core domains that support the full lifecycle of selling and delivering offerings.',
        keyPoints: [
          'Offering: Tools to define, configure, and present products, pricing and services.',
          'Purchase Funnels: Components that support the end-to-end buying journey.',
          'Delivery & Management: Capabilities for fulfilling the offering and managing the post-purchase experience.',
          'Billing: Systems that handle payments, subscriptions, invoicing, taxes, and financial reporting.'
        ]
      },
      {
        title: 'Platform Configuration Systems',
        description: 'To sell products and set up an end-to-end purchase flow, there are two systems: **Dynamo** system for setting up the **backend configuration**, and **Funnel Designer** system for building the **purchase funnel UI**.',
        keyPoints: [
          'Dynamo System: Backend configuration system for setting up products, features, and business logic.',
          'Funnel Designer System: Purchase funnel UI configuration system for building the user-facing purchase experience.',
          'Sequential Setup: Backend configuration in Dynamo must be completed before UI setup in Funnel Designer.',
          'Integration: Both systems work together to create a seamless purchase experience.'
        ]
      },
      {
        title: 'Our Consumers in Action',
        description: 'All of these consumers and more sell their offerings through the Premium Platform',
        consumers: [
          ['Bobb', 'Enterprise', 'Premium Plans', 'Branded App', 'Business Number'],
          ['Gemini', 'GWS', 'Dayful', 'Digital Goods', 'Brand Maker'],
          ['Domains', 'Facebook Ads', 'Hopp', 'Google Ads', 'TPAs'],
          ['Email Marketing', 'AI Chat', 'Custom CMS', 'Premium', 'Social media']
        ]
      }
    ]
  },

  things_to_know: {
    id: 'things_to_know',
    title: 'Things to Know Before You Start',
    category: 'Important Prerequisites',
    steps: [
      {
        title: 'Define Your Business Model',
        description: 'Before you can configure anything on the platform, you must first define your business model. This foundational decision will determine every subsequent configuration step.',
        keyPoints: [
          '**Choose your monetization strategy** - This affects product pricing, billing cycles, and user experience',
          '**Define your target audience** - Different business models work better for different user types',
          '**Consider your product complexity** - Some models work better for simple vs. complex offerings',
          '**Evaluate your support capacity** - Different models require different levels of customer support'
        ]
      },
      {
        title: 'Business Model Options',
        description: 'The platform supports three main business model approaches. Each has different characteristics, use cases, and implementation requirements. Choose the one that best fits your business needs.',
        businessModels: [
          {
            name: 'Free Trial',
            description: 'Allow users to try your product for free before committing to payment.',
            features: ['Time-limited access', 'Full feature access', 'Automatic conversion', 'Payment required after trial'],
            bestFor: 'Products with clear value demonstration within trial period'
          },
          {
            name: 'Quota-based Features',
            description: 'Charge based on usage limits or feature quotas that users consume.',
            features: ['Usage tracking', 'Tiered limits', 'Overage handling', 'Scalable pricing'],
            bestFor: 'Services with measurable consumption or usage patterns'
          },
          {
            name: 'Custom Charges',
            description: 'Flexible pricing model for unique business requirements and custom billing.',
            features: ['Custom pricing logic', 'Flexible billing cycles', 'Manual adjustments', 'Enterprise features'],
            bestFor: 'Complex B2B scenarios or unique monetization requirements'
          }
        ]
      },
      {
        title: 'Free Trial',
        description: 'The Free Trial business model allows users to access your full product offering for a limited time without payment. This approach is ideal for products where users need time to understand and experience the value before making a purchase decision.',
        keyPoints: [
          '**Trial Duration**: Set the optimal trial length based on your product\'s learning curve. Industry standard is 14 days.',
          '**Full Access**: Users get complete access to all features during the trial period',
          '**Automatic Conversion**: Seamless transition to paid subscription when trial ends',
          '**Payment Collection**: Credit card required upfront but not charged until trial expires',
          '**Cancellation**: Users can cancel anytime during trial with no charges'
        ],
        advantages: [
          'Reduces friction for new user acquisition',
          'Allows users to fully experience product value',
          'Higher conversion rates for complex products',
          'Builds user confidence and trust'
        ],
        considerations: [
          'Requires strong product onboarding',
          'Need clear value demonstration within trial period',
          'Risk of users canceling before conversion',
          'Requires effective trial-to-paid communication'
        ],
        bestPractices: [
          'Set trial duration based on time-to-value metrics',
          'Provide excellent onboarding during trial',
          'Send strategic emails throughout trial period',
          'Make cancellation easy but conversion compelling'
        ]
      },
      {
        title: 'Quota-based Features',
        description: 'The Quota-based Features model charges users based on their consumption of specific resources or features. Users have defined limits, and pricing scales with usage, making it fair and predictable while allowing for growth.',
        keyPoints: [
          '**Usage Tracking**: Monitor and display real-time consumption of quota-based features',
          '**Tiered Plans**: Offer different quota levels at various price points',
          '**Overage Handling**: Define what happens when users exceed their quotas',
          '**Quota Reset**: Determine how and when quotas refresh (monthly, annually, etc.)',
          '**Feature Gating**: Control access based on remaining quota availability'
        ],
        advantages: [
          'Fair pricing that scales with usage',
          'Predictable revenue based on consumption patterns',
          'Natural upselling opportunities',
          'Appeals to cost-conscious users who want to pay for what they use'
        ],
        considerations: [
          'Requires robust usage tracking infrastructure',
          'Need clear communication about quota consumption',
          'Users may be cautious about exceeding limits',
          'Requires careful quota limit design'
        ],
        bestPractices: [
          'Make quota usage highly visible to users',
          'Provide warnings before limits are reached',
          'Offer easy upgrade paths when quotas are exceeded',
          'Design quotas based on real user behavior patterns'
        ]
      },
      {
        title: 'Custom Charges',
        description: 'The Custom Charges model provides maximum flexibility for unique business requirements that don\'t fit standard subscription or usage patterns. This approach allows for complex pricing logic, custom billing cycles, and enterprise-grade features.',
        keyPoints: [
          '**Flexible Pricing**: Create custom pricing rules and logic for specific scenarios',
          '**Variable Billing**: Support non-standard billing cycles and payment schedules',
          '**Manual Adjustments**: Ability to modify charges, apply discounts, or handle special cases',
          '**Enterprise Features**: Advanced capabilities like custom contracts and negotiations',
          '**Integration Ready**: Works with existing enterprise billing and CRM systems'
        ],
        advantages: [
          'Complete flexibility for unique business models',
          'Can accommodate complex B2B requirements',
          'Supports enterprise sales processes',
          'Allows for custom contract terms and pricing'
        ],
        considerations: [
          'Requires more complex setup and configuration',
          'May need custom development for specific requirements',
          'Higher maintenance overhead',
          'Less standardized user experience'
        ],
        bestPractices: [
          'Clearly document all custom pricing rules',
          'Provide transparent billing explanations to customers',
          'Ensure scalability of custom logic',
          'Have dedicated support for enterprise customers'
        ]
      },
      {
        title: 'Additional Capabilities',
        description: 'Beyond the core business models, the platform offers several additional capabilities that can enhance your monetization strategy and improve user experience.',
        keyPoints: [
          'Subscription Management: Advanced tools for managing recurring payments and subscriptions.',
          'Integration Capabilities: Connect with external systems, CRMs, and analytics tools.',
          'Upgrade/Downgrade Flows: Seamless plan changes and prorations.',
          'Advanced Analytics: Detailed insights into user behavior and revenue metrics.'
        ]
      },
      {
        title: 'Emails & Notifications',
        description: 'The platform handles **transactional emails only** -These are automated messages triggered by user actions or system events, such as purchase confirmations, billing issue alerts, and other important account updates.',
        emailEvents: [
          { event: 'user.subscription.purchase.success', trigger: 'Sent when a user successfully purchases a subscription' },
          { event: 'user.subscription.renewal.success', trigger: 'Sent when a subscription automatically renews successfully' },
          { event: 'user.subscription.renewal.failed', trigger: 'Sent when automatic renewal fails (payment declined)' },
          { event: 'user.subscription.cancelled', trigger: 'Sent when a user or system cancels a subscription' },
          { event: 'user.subscription.upgraded', trigger: 'Sent when a user upgrades their subscription plan' },
          { event: 'user.subscription.downgraded', trigger: 'Sent when a user downgrades their subscription plan' },
          { event: 'user.subscription.expired', trigger: 'Sent when a subscription expires without renewal' },
          { event: 'user.payment.declined', trigger: 'Sent when a payment attempt is declined by payment processor' }
        ]
      },
      {
        title: 'How It Works',
        description: 'Understanding the email trigger process is important for setting up your notifications correctly.',
        mainDescription: "The platform automatically triggers transactional emails based on specific user actions or system events. Here's how the process works:\n\n1. **Event Occurs**: A user performs an action (like canceling their subscription) or a system event happens (like a payment failure).\n\n2. **Platform Detects Event**: Our system immediately detects and processes the event.\n\n3. **Template Retrieved**: The system fetches the appropriate email template that you've configured for that specific event.\n\n4. **Email Sent**: The personalized email is automatically sent to the user with relevant information about their account or transaction.",
        emailEvents: [
          { event: 'user.subscription.purchase.success', trigger: 'Confirmation email sent immediately after successful subscription purchase with receipt and access details' },
          { event: 'user.subscription.renewal.success', trigger: 'Notification sent after automatic renewal with updated billing information and next renewal date' },
          { event: 'user.subscription.renewal.failed', trigger: 'Alert sent when automatic renewal fails, including instructions to update payment method' },
          { event: 'user.subscription.cancelled', trigger: 'Confirmation sent when subscription is cancelled, with end date and potential re-activation options' },
          { event: 'user.subscription.upgraded', trigger: 'Welcome email for new plan level with updated features and billing information' },
          { event: 'user.subscription.downgraded', trigger: 'Confirmation of downgrade with new plan details and feature changes' },
          { event: 'user.subscription.expired', trigger: 'Notification that subscription has ended with options to renew or restart' },
          { event: 'user.payment.declined', trigger: 'Immediate alert about payment failure with steps to resolve and prevent service interruption' }
        ],
        tableIntro: 'Below is a detailed breakdown of each transactional email event and when it\'s triggered:'
      },
      {
        title: 'Mandatory Emails',
        description: 'Certain transactional emails are legally required and must be configured for your product type. These cannot be disabled and ensure compliance with consumer protection laws.',
        mandatoryEvents: [
          {
            event: 'user.subscription.purchase.success',
            explanation: 'Required by law to provide purchase confirmation and receipt. Must include transaction details, amount paid, and subscription terms.'
          },
          {
            event: 'user.subscription.renewal.success',
            explanation: 'Legal requirement to notify customers of automatic charges. Must include billing amount, next renewal date, and cancellation instructions.'
          },
          {
            event: 'user.subscription.cancelled',
            explanation: 'Mandatory confirmation of cancellation request. Must specify when service ends and any refund information.'
          },
          {
            event: 'user.payment.declined',
            explanation: 'Required to inform customers of failed payment attempts. Must provide clear steps to resolve payment issues.'
          }
        ],
        templateOptions: {
          title: 'Template Options',
          description: 'You have two options for setting up your mandatory email templates:',
          options: [
            {
              title: 'Use Standard Templates',
              description: 'We provide pre-built, compliance-ready templates that meet all legal requirements. These are ready to use with minimal customization.',
              examples: [
                'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6889fa8763402425cc12d83b/58819ba02_image.png',
                'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6889fa8763402425cc12d83b/1bf2bc7d8_image.png'
              ]
            },
            {
              title: 'Create Custom Templates',
              description: 'Design your own email templates that match your brand while maintaining legal compliance. Requires more setup but offers complete control over design and messaging.',
              steps: [
                'Contact our team to discuss your custom template requirements',
                'Provide your brand guidelines and design preferences',
                'Review draft templates to ensure they meet legal requirements',
                'Approve final templates before implementation'
              ],
              exampleTemplates: {
                examples: [
                  'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6889fa8763402425cc12d83b/4c5ed6a75_image.png',
                  'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6889fa8763402425cc12d83b/c40be70b1_image.png'
                ]
              },
              note: 'Custom templates must include all legally required information and cannot omit mandatory fields. Our team will ensure compliance during the review process.'
            }
          ]
        }
      },
      {
        title: 'Summary of Action Items',
        description: 'Here\'s what you need to do to set up emails and notifications for your product type:',
        actionSteps: [
          {
            step: '1',
            title: 'Choose Your Email Template Approach',
            description: 'Decide whether you want to use our standard templates or create custom branded templates.',
            details: [
              'Standard templates: Ready to use, compliant, minimal setup',
              'Custom templates: Brand-matched, requires design work and review process'
            ]
          },
          {
            step: '2',
            title: 'Configure Email Templates in Responsys',
            description: 'Set up your chosen templates in our email delivery system.',
            details: [
              'Access the Responsys platform through the provided link',
              'Upload or configure your email templates',
              'Test templates with sample data to ensure proper rendering'
            ],
            hasLink: true,
            linkUrl: 'https://login.responsys.net/login/',
            linkText: 'Access Responsys Platform'
          },
          {
            step: '3',
            title: 'Link Templates to Platform Events',
            description: 'Connect your templates to the appropriate trigger events in the platform.',
            details: [
              'Map each template to its corresponding event trigger',
              'Configure any dynamic content or personalization',
              'Set up fallback templates for error scenarios'
            ]
          },
          {
            step: '4',
            title: 'Test Email Delivery',
            description: 'Verify that emails are triggered correctly and delivered as expected.',
            details: [
              'Perform test transactions to trigger each email type',
              'Check email content, formatting, and personalization',
              'Verify emails arrive in inbox (not spam) with correct timing'
            ]
          }
        ]
      },
      {
        title: 'Getting Support',
        description: 'If you need assistance during your setup process, here are your key points of contact and resources.',
        keyPoints: [
          '**Technical Support**: For platform configuration and technical issues',
          '**Business Consultation**: For business model and strategy questions',
          '**Email Setup**: For Responsys and email template configuration',
          '**Legal Compliance**: For questions about mandatory emails and legal requirements'
        ]
      }
    ]
  },

  glossary: {
    id: 'glossary',
    title: 'Glossary for Getting Started',
    category: 'Essential Terminology',
    steps: [
      {
        title: 'Dynamic & User Offering',
        description: 'Allows companies across Wix to offer their products to customers. It enables to set relevant products with their display properties, to display Package Picker and checkout pages to customers. The "Dynamic Offering" system broadly encompasses offering, purchase, and delivery, and integrates with the Billing (SBS/BASS) system.',
        offering: {
            title: 'Offering',
            description: 'Offering represents a set of products that the user is eligible to purchase.\n\nBy default, Dynamic Offering will return all eligible products based on the requested product type. It could be risky at scale, therefore we integrate with the Dealer as a mediator between Dynamic Offering and the client, we can return a subset of products based on personalized parameters.'
        }
      },
      {
        title: 'Product Catalog',
        description: 'The Product Catalog is a core component of the Wix Premium Platform, under the "Offering" domain. It is essential for setting up and managing products and their associated features, under a business steam. Key aspects of the Product Catalog include:',
        keyPoints: [
          'Product Type: This is the top-level business stream (vertical for example) under which all products are nested.',
          'Product Family: Groups similar products within a type, like different plan tiers (e.g., VIP, Basic).',
          'Product: The actual item sold, which bundles features, pricing, and settings. It can only be defined in the platform after a product type and family have been created. Products are fixed once published—duplicate to make changes.',
          'Features: A specific benefit included in products. Not sold alone, can appear in multiple products.'
        ],
        hierarchy: {
          'Product Type': ['Premium Plan', 'Ascend', 'Facebook Ads', 'Branded App'],
          'Product Family': ['Unlimited', 'Combo', 'Business VIP'],
          'Product': ['Unlimited US', 'Unlimited GB'],
          'Feature': ['Accept payments']
        }
      },
      {
        title: 'Product type properties',
        description: "Before creating a sellable product, it's important to define its core properties. These settings determine where the product is applied (its context), its allowed actions, the business model, and key billing configurations.\n\nProduct Type Properties lay the foundation for how your product functions across the platform. Setting them correctly ensures a smooth purchase and subscription experience for your users, and enables proper handling of billing, upgrades, and ownership logic.\n\nThe Product Type Properties are:",
        list: [
            'Context',
            'Allowed Actions',
            'Payment Type Restrictions',
            'Refund policy',
            'Billing cycles',
            'Free Trial'
        ]
      },
      {
        title: 'Product type properties-Context',
        properties: [
            {
                title: 'Product type context (Account / Site)',
                description: "Defines the level at which the product is applied—either to account level (across multiple sites) or to a specific site. It determines where and how the product will be available and affect eligibility, billing, and upgrade/downgrade flows.",
                howToChoose: true,
                choices: [
                    "Select Account if the product is meant to be used across all sites under the user's Wix account (e.g., a centralized tool, membership, or analytics solution).",
                    "Select Site if the product is tied to a specific website (e.g., a site template, design add-on, or service linked to one domain)."
                ]
            },
            {
                title: 'Allow multiple subscriptions per context (Yes / No)',
                description: "Specifies whether the same product can be purchased and assigned multiple times to the same account or site.",
                howToChoose: true,
                choices: [
                    "Yes – Select this if users can buy and assign multiple subscriptions of the same product to the same account or site (e.g., session packs, add-on bundles, or reusable services).",
                    "No – Choose this if a user should only have one active subscription per context (e.g., a base plan, membership, or service tier)."
                ]
            }
        ]
      },
      {
          title: 'Product type properties-Allowed Actions',
          properties: [
              {
                  title: 'Allow to disconnect from context (Yes/No)',
                  description: "allows a product instance to be separated or unlinked from its current associated context (Wix account or site). For example, a product initially tied to a particular site might be ‘disconnected’ / ‘unassigned’ and can kept as floating."
              },
              {
                  title: 'Allow to connect to another context (Yes/No)',
                  description: "Permits a product instance to be assign from its current context to a different one (e.g., from one site to another, or from one user account to another)."
              },
              {
                  title: 'Allow transfer (Yes/No)',
                  description: "This option controls whether the ownership of a purchased product can be transferred from one customer (Wix account or site owner) to another. This is distinct from changing the context, as it implies an ownership (and permissions) changes."
              },
              {
                  title: 'Allow turning off auto-renew (Yes/No)',
                  description: "determines if customers who have purchased a product of this type are allowed to disable the automatic renewal of their subscription. If set to “No”, the subscription will likely continue to auto-renew unless explicitly cancelled through other means or by support."
              }
          ]
      },
      {
          title: 'Product type properties-Payment Type Restrictions',
          properties: [
              {
                  title: 'Recurring (Yes/No)',
                  description: "A recurring payment means that the transaction happens automatically according to the billing cycle"
              },
              {
                  title: 'Real-time (Yes/No)',
                  description: "A real-time payment means that the transaction is approved immediately."
              }
          ],
          note: {
              title: "Please note:",
              points: [
                  "When Real-time & Recurring is not selected = All payment methods are allowed",
                  "When Real-time & Recurring is selected = Only recurring and real-time payment methods are allowed",
                  "When Recurring is selected = Only recurring payment methods are allowed",
                  "When Real-time is selected = Only real-time payment methods are allowed"
              ]
          }
      },
      {
          title: 'Product type properties-Refund policy',
          properties: [
              {
                  title: 'Allow Money-Back (Yes/No)',
                  description: "If yes- Period of X days\nYes means users can request an automatic refund within a defined period. You must specify the refund period in X days (e.g., 14 days from purchase)."
              },
              {
                  title: 'Internal Policy (Yes/No)',
                  description: "Manual Refunds via Customer Care. If you’re planning to support refunds behind the scenes (without showing it to the user in the UI), this is considered an internal refund policy. In this case, before implementing an internal refund policy, approval from the Finance team is required."
              }
          ]
      },
      {
          title: 'Product type properties-Billing Cycles & Free Trial',
          properties: [
              {
                  title: 'Allowed billing cycles (All cycles/Specific cycles):',
                  description: "Defines which billing cycle options (e.g., monthly, yearly) are available for this product. It controls how the product is displayed and sold in the pricing & checkout flows, and affects user commitment and revenue model.",
                  note: "If specific cycles -> Monthly or yearly (this can be And /Or)",
                  options: [
                      "All cycles – The product will be offered with both monthly and yearly (2/3/4.. years) billing options by default.",
                      "Specific cycles – You can choose to offer only monthly, only yearly, or both options manually."
                  ]
              },
              {
                  title: 'Allowed free-trial (Yes/No)',
                  description: "Determines whether users can access the product for free for a limited time before their paid subscription begins.",
                  note: "If Yes -> X days for free trial",
                  options: [
                      "If yes, You must define the trial duration (e.g., 7 or 14 days).",
                      "No – The product will be paid from the start, with no free trial period."
                  ]
              }
          ]
      },
      {
        title: 'Dynamo - DO Back Office',
        currentCapabilities: 'Today Dynamo represents the product and feature catalogs, and allows actions on products and features.',
        futureExpansion: 'During 2025 we will expand its capabilities to encapsulate all services required for an efficient monetization process.',
        imageUrl: 'https://qtrypzzcjebvfciynt.supabase.co/storage/v1/object/public/base44-prod/public/ed38d1731_Screenshot2025-08-03at124359.png'
      },
      {
        title: 'User Offering & The Dealer',
        userOffering: {
          title: 'User Offering',
          description: 'A collection of one or more products belonging to the same Product Type that can be displayed together in the Package Picker. More broadly, it represents a set of products that a specific user is eligible to purchase. The user offering is defined in Dealer, which acts as a "mediator" to return a personalized subset of products.\n\nFor example, geo preferences will be defined at the Dealer, ensuring that users in the US or Brazil receive products tailored to their region — including relevant pricing, capabilities, and more'
        },
        dealer: {
          title: 'The Dealer',
          description: 'Wix Personalization Engine that allows you to customize the user experience with personalized suggestions and content. The integration with Dealer ensure only relevant products are shown in the package picker to the user, without needing to add hardcoded filters. Dealer organizes offerings by Placements, Campaigns, and Audiences. It acts as a "mediator" to return a personalized subset of products. Dealer processes targeting from top to bottom, returning products based on the first match.',
          learnMore: {
            text: "Learn more about the Dealer",
            url: "https://wix-marketing.wixanswers.com/kb/en/article/dealer-offerings"
          }
        }
      },
      {
        title: 'The Funnel Designer',
        mainDescription: 'The Premium purchase Funnel platform enables quick and simple creation of purchase funnels with minimal coding, reducing the time to market for new products. The platform is highly modular and provides flexibility for various business and purchase funnel requirements.',
        platformApproaches: {
          title: 'The platform can be consumed in three main approaches:',
          methods: [
            'Purchase funnel Studio',
            'Use of smart components',
            'Use of Platform SDK'
          ],
          focus: 'here we will focus on the **Purchase funnel Studio** as its simplify the creation process.',
          docsLink: {
            text: 'To learn more about all supported solutions',
            url: 'https://docs.google.com/document/d/1653UjL-UZrl85MTVHNQEHr7qGBgXxYteyjg11-l6ZDE/edit?tab=t.0#heading=h.w41pbpl3bh70'
          }
        },
        detailedDescription: 'The Purchase Funnel Studio (or the funnel designer) allows you to create purchase funnel pages and to add components from our pre-defined library through an Editor experience, or using LLM. Furthermore, the studio allows you flexibility to edit and adjust the UI of the purchase funnel (location, order, padding, spacing, colors etc). The result of the studio is a ready to use purchase funnel - The result of this set-up is a schema which can be rendered in run time.',
        workflow: 'When you\'re done designing, click on preview to see how the funnel looks, and then simply share the URL (which has the schema ID inside it) with your developer. The server that renders the purchase funnel (a schema) is in our ownership, so with the URL and schema link, they can simply refer to the rendering engine and render the correct schema.',
        effortEstimate: 'Overall estimated time to set-up - up to one week',
        advantages: [
          'Setting up the purchase funnel requires no coding at all (assuming no unique components and elements are required).'
        ],
        scopeOfWork: {
          pm: {
            title: 'PM main tasks',
            tasks: [
              'Configuration of the product, pricing and offering in advance.',
              'Collaboration with UX to design the funnel based on the platform\'s components library.',
              'Setting up the purchase funnel in a visual studio, in a drag and drop manner.'
            ]
          },
          ux: {
            title: 'UX/W main tasks',
            tasks: [
              'Collaboration with PM to design the funnel based on the platform\'s components library.',
              'Defining translation keys.',
              'Configuration of all content and marketing data in Dealer (or other source).'
            ]
          },
          developer: {
            title: 'Developer main tasks',
            tasks: [
              'Refer to the render engine with the schema ID to render the purchase flow.'
            ]
          }
        },
        customization: 'For users with unique design requirements, a Platform SDK is available, wrapping Premium APIs to provide necessary data and logic. This allows for both rapid deployment using standard components and the flexibility to create highly customized experiences.',
        link: {
            text: 'Go to Funnel Designer Playground',
            url: 'https://bo.wix.com/premium-purchase-platform-playground/playground/plans'
        }
      },
      {
        title: 'System Workflow',
        description: 'Understanding how the different configuration systems connect and work together is key to launching a successful product on the platform.',
        workflowExplanation: {
          title: 'The Complete Workflow: From Backend to Frontend',
          description: 'Understanding how Dynamo, Dealer, and Funnel Designer work together to create the complete user purchase experience.',
          steps: [
            {
              system: 'Dynamo (Backend Configuration)',
              title: 'Product Setup & Business Logic',
              description: 'Configure your product catalog, features, pricing, and business rules. This is where you define WHAT you\'re selling and HOW it behaves.',
              color: 'from-blue-500 to-indigo-500',
              bgColor: 'bg-blue-50',
              icon: '⚙️',
              details: [
                'Product Type Properties',
                'Product Families & Features',
                'Pricing & Billing Rules',
                'Business Logic Configuration'
              ]
            },
            {
              system: 'Dealer (Personalization Engine)',
              title: 'Audience Targeting & Content Curation',
              description: 'Define WHO sees your products and customize the content presentation. Acts as the intelligent mediator between backend and frontend.',
              color: 'from-purple-500 to-pink-500',
              bgColor: 'bg-purple-50',
              icon: '🎯',
              details: [
                'Target Audience Definition',
                'Geographic & Behavioral Filters',
                'Product Selection Rules',
                'Content & Messaging Customization',
                'A/B Testing Configuration',
                'Promoted Product Features'
              ]
            },
            {
              system: 'Funnel Designer (UI System)',
              title: 'Package Picker & Purchase Flow',
              description: 'Create the visual interface and user experience. Presents the personalized products from Dealer in a beautifully designed package picker.',
              color: 'from-green-500 to-emerald-500',
              bgColor: 'bg-green-50',
              icon: '🎨',
              details: [
                'Package Picker Design',
                'Purchase Flow Components',
                'Visual Layout & Branding',
                'User Interaction Elements',
                'Checkout Experience'
              ]
            }
          ],
          connections: [
            {
              from: 'Dynamo',
              to: 'Dealer',
              label: 'Products & Rules',
              description: 'Dealer fetches available products and their configurations from Dynamo'
            },
            {
              from: 'Dealer',
              to: 'Funnel Designer',
              label: 'Personalized Selection',
              description: 'Dealer provides filtered, targeted product selection to display in the UI'
            }
          ]
        },
        keyInsights: [
          {
            title: 'Sequential Dependency',
            description: 'Each system depends on the previous one. You cannot skip steps in this workflow.',
            icon: '🔗'
          },
          {
            title: 'Dealer as Mediator',
            description: 'Dealer sits between backend and frontend, ensuring users see only relevant, personalized content.',
            icon: '🤝'
          },
          {
            title: 'Dynamic Personalization',
            description: 'The same backend products can be presented differently to different users based on Dealer configuration.',
            icon: '✨'
          }
        ]
      }
    ]
  },

  setup_guide: {
    id: 'setup_guide',
    category: 'Setup Process',
    icon: '⚙️',
    title: 'Full Setup Guide',
    description: 'Complete step-by-step guide to setting up your premium offering',
    steps: [
      {
        title: 'High Level Process',
        description: 'Overview of the complete setup process from business model to launch.',
        imageUrl: 'https://res.cloudinary.com/dakp804dt/image/upload/v1738337598/HIGH_LEVEL_PROCESS_xlaxaa.png'
      },
      {
        title: 'Step 1: Business Reviews',
        description: 'Before beginning the technical setup, it is preliminary to go through all required business reviews to ensure alignment and compliance.',
        keyPoints: [
          'Complete a **Legal Review** for compliance.',
          'Receive **Finance Approval** for the business model.',
          'Undergo a **Growth Review** to align with business goals.',
          'Finalize a **Risk Review** to identify potential issues.'
        ],
        contacts: [
          'Legal Review POC: @hagarp',
          'Finance Review POCs: @avis @eyalbo @omerat @MatanHagai',
          'Growth Review POC: @YaelGrossMagen',
          'Risk Review POCs: @OmerShatzky @OrenRichterLevin'
        ]
      },
      {
        title: 'Step 2: Define Your Product Type Properties',
        description: 'This is the first hands-on step. You must define the core properties of your product type by filling out a Jira form. This sets the foundation for everything that follows.',
        jiraForm: {
          description: 'Use this Jira template to define your product type properties. After submission, the platform admin will process your request and send you an email confirmation when your product type is live.',
          url: 'https://wix.atlassian.net/browse/PREM2-20024'
        },
        glossaryLink: {
          text: 'To better understand Product Type Properties, refer to the glossary section.',
          note: 'Review the glossary for detailed explanations of each property before filling out the form.'
        },
        keyPoints: [
          'Fill out the **Jira Product Type Properties form** using the provided template.',
          'Submit the form for processing by the platform admin.',
          'Wait for an email confirmation that your product type is live (this can take up to 48 hours).',
          "You cannot proceed to the next steps until your product type is live."
        ]
      },
      {
        title: 'Create Product Family',
        description: 'After your product type is live, you can group similar products into families. These often represent different tiers of your offering (e.g., Basic, Pro, VIP) and are used for upgrade purposes.',
        dynamoLink: {
          description: 'Create a new Product Family via Dynamo. Click the button below to get started.',
          url: 'https://bo.wix.com/p3/backoffice/product-families/new?pt=d8695ad0-7f3e-4b51-8dd4-5f8e088f3558',
          buttonText: 'Create Product Family in Dynamo'
        },
        keyPoints: [
          "The mandatory parameters are only the new **Family name** and the **Product type**.",
          "You also have the option to override the Product type settings in the **'Custom settings'** section."
        ],
        videoUrl: 'https://www.youtube.com/embed/CfF40eskevk'
      },
      {
        title: 'Create Features',
        description: 'Define the specific capabilities and benefits that will be bundled into your products. These are the building blocks of your offering.',
        dynamoLink: {
          description: 'Access the Features catalog in Dynamo to choose existing features or create new ones.',
          url: 'https://bo.wix.com/p3/backoffice/features?pt=d8695ad0-7f3e-4b51-8dd4-5f8e088f3558',
          buttonText: 'Go to Features Catalog'
        },
        keyPoints: [
          "You can choose existing features from the features catalog, or add new ones in Dynamo.",
          "To create new features: Click on **'+ New Feature'** and fill out the parameters.",
          "Ensure you select the relevant product type in the **'Eligible Type'** dropdown."
        ],
        videoUrl: 'https://www.youtube.com/embed/d7prhN-Pho0'
      },
      {
        title: 'Create Products',
        description: 'Finally, create the sellable packages by bundling your features together and setting a price.',
        dynamoLink: {
          description: 'Access the Products page in Dynamo to create new products.',
          url: 'https://bo.wix.com/p3/backoffice/products?pt=d8695ad0-7f3e-4b51-8dd4-5f8e088f3558&viewId=all-items-view',
          buttonText: 'Go to Products Page'
        },
        keyPoints: [
          "On the Products page in Dynamo, click 'New Product'.",
          "Select the relevant features for this product and add pricing.",
          "Once setup is complete, click 'Publish' to make the product live."
        ],
        videoUrl: 'https://www.youtube.com/embed/JeWnR0vRQLg'
      },
      {
        title: 'Step 4: Set Your Email Notifications',
        description: 'Configure email notifications for your product to ensure customers receive proper transactional emails.',
        isMilestone: false,
        learnMore: {
          text: 'Learn more about email notifications and requirements',
          sectionId: 'things_to_know',
          stepIndex: 6
        },
        actionSteps: [
          {
            step: 1,
            title: 'Decide on Email Strategy',
            description: 'Choose the relevant emails for your business from the available options.',
            details: [
              'Review the 6 mandatory email events that are legally required',
              'Select any additional email events from the full list of 21 supported events',
              'Consider which emails provide value to your customers and business model'
            ]
          },
          {
            step: 2,
            title: 'Create Email Content',
            description: 'Develop the actual email content that will be sent to customers.',
            details: [
              'For mandatory emails: Choose between using existing Premium Generic Email Templates or creating custom content',
              'If creating custom content, base it on the Premium Generic Email Template examples',
              'Ensure content aligns with your brand voice and provides clear, helpful information'
            ]
          },
          {
            step: 3,
            title: 'Review & Generate Templates',
            description: 'Get approval and create Responsys templates for your email content.',
            details: [
              'Review your custom content with Legal and Email Marketing teams (@TalShanny)',
              'Once approved, send the content to Marketing (@TalShanny) to generate Responsys Template IDs',
              'Obtain the final Responsys Template ID for each email event'
            ]
          },
          {
            step: 4,
            title: 'Configure Platform Integration',
            description: 'Provide the template information to the platform team for final setup.',
            details: [
              'Fill out the configuration sheet with event names and corresponding Responsys Template IDs',
              'Submit the completed information to @gil for platform admin configuration',
              'Verify that emails are properly linked and will trigger correctly'
            ],
            hasLink: true,
            linkText: 'Access Configuration Sheet',
            linkUrl: '#'
          }
        ]
      },
      {
        title: 'Step 5: API integrations',
        description: 'Integrate with Platform APIs to enable feature eligibility and subscription events. This step is handled by **Dev Lead**.',
        isAPIIntegrationSetup: true,
        integrations: [
          {
            name: 'Subscription Manager Events',
            icon: '📡',
            description: 'Handles all subscription lifecycle events. Your application needs to listen to these events to respond to subscription changes, renewals, cancellations, and more.',
            color: 'from-blue-500 to-indigo-600',
            bgColor: 'bg-blue-50',
            whatItDoes: [
             'Notifies your app when subscriptions are purchased',
              'Sends events for renewals, cancellations, and expirations',
              'Tracks subscription upgrades and downgrades',
              'Provides payment status updates and failures'
            ],
            docUrl: 'https://dev.wix.com/docs/rest/premium/subscriptions/subscription-events',
            docLabel: 'View Subscription Events Docs'
          },
          {
            name: 'Features Manager',
            icon: '⚡',
            description: 'Responsible for all feature eligibility logic. It ensures that users can only access features they\'ve purchased and that feature quotas are properly enforced.',
            color: 'from-purple-500 to-pink-600',
            bgColor: 'bg-purple-50',
            whatItDoes: [
               'Controls which features users can access based on their subscription',
              'Manages feature quotas and usage limits',
              'Handles feature upgrades and downgrades',
              'Enforces feature restrictions and permissions'
            ],
            docUrl: 'https://dev.wix.com/docs/rest/premium/features-manager/introduction',
            docLabel: 'View Features Manager Docs'
          }
        ],
        supportInfo: {
          title: 'Need Integration Help?',
          description: 'Our platform team is here to assist with API integration setup and troubleshooting.',
          supportChannel: '#premium-platform-support',
          supportChannelDescription: 'Slack channel for integration questions',
          whenToReachOut: [
            'Questions about API usage or best practices',
            'Issues with authentication or authorization',
            'Debugging integration problems',
            'Clarification on event handling',
            'Performance or rate limiting concerns'
          ]
        }
      },
      {
        title: 'Backend Configuration Complete!',
        description: "Congratulations! You've successfully configured the backend of your offering. Now, let's move on to the fun part: designing the user-facing experience and defining who gets to see it.",
        isMilestone: true
      },
      {
        title: 'Step 6: Create Your User Offering in Dealer',
        description: "Now it's time to define which users see which products. This is done in Dealer, our personalization engine, by creating 'offerings' for specific audiences.",
        isDealerSetup: true,
        dealerPart: {
          title: "1. Configure in Dealer",
          description: "Go to the Premium Offerings page, find your product type, and create offerings for your target audience. We've created a dummy offering for you to start with.",
          link: "https://bo.wix.com/dealer/placements?location=Premium%20Offerings&view-guide-open=0",
          linkText: "Open Dealer",
          steps: [
            "Navigate to the 'Premium Offerings' page.",
            "Use the search bar to find and select your product type.",
            "Create or modify offerings based on your target audience."
          ]
        },
        funnelPart: {
          title: "2. Preview in Funnel Designer Playground",
          description: "The Funnel Designer playground lets you see exactly how your configured offering will look to end-users.",
          link: "https://bo.wix.com/premium-purchase-platform-playground/playground/plans",
          linkText: "Open Funnel Designer",
          steps: [
            "Go to the Funnel Designer Playground.",
            "Click on 'Playground Actions' -> 'Change Offering'.",
            "Select your Product Type ID and save.",
            "Review the package picker with your settings applied."
          ]
        },
        closingText: {
          title: "Your Turn: Define Your Offerings",
          paragraphs: [
            "Now that you understand the link between the Dealer and Funnel Designer, it's your time to create or modify offerings based on your target audience. We highly recommend you review the \"dummy offering - all-all\" we have created for you to understand the requirements.",
            "If you want to present different offerings to specific users, you will need to define multiple offerings for all relevant audiences (for example, an audience by geo: US/JP/BR, or an offering based on business type: enterprise/DIY users).",
            "If you don't have sub-audiences, one offering will be enough.",
            "Once you are ready, click on 'Create Offer' in Dealer and start defining your audience."
          ],
          learnMore: {
            text: "Learn more about Creating a new Offering and Define Targeting",
            url: "https://wix-marketing.wixanswers.com/kb/en/article/dealer-offerings"
          }
        }
      },
      {
        title: 'Step 7: Setup Purchase Funnel',
        description: "This step has two stages. First, you'll use the Dealer to define the content and UI components for your package picker. Second, you'll use the Funnel Designer Studio to build the complete purchase flow, from the package picker to the thank you page."
      },
      {
        title: 'Sub step 7: Set Content in Dealer',
        description: "To define your offering's UI and content, you will use the Dealer. Under the 'Premium Purchase Platform' location, you will find four placements specifically created for your product type. Each placement controls a different UI component in the package picker.",
        isOfferingUISetup: true,
        dealerLink: {
          url: "https://bo.wix.com/dealer/placements?location=Premium%20Purchase%20Platform&view-guide-open=0",
          text: "Go to Dealer Placements"
        },
        placements: [
          {
            title: "PromotedProductFeatures",
            icon: "Star",
            description: "This placement controls the highlighted features shown for your promoted products.",
            imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6889fa8763402425cc12d83b/623bf84c4_image.png"
          },
          {
            title: "All Plans Include",
            icon: "ListChecks",
            description: "Use this to list features that are common across all your plans.",
            imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6889fa8763402425cc12d83b/2939c6f84_image.png"
          },
          {
            title: "FAQ",
            icon: "HelpCircle",
            description: "Manage the Frequently Asked Questions section that appears on your package picker.",
            imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6889fa8763402425cc12d83b/51e814540_image.png"
          },
          {
            title: "Recommended Product Family",
            icon: "ThumbsUp",
            description: "Define which product family should be marked with 'Recommended' badge to guide users.",
            imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6889fa8763402425cc12d83b/7aa4f7ce4_image.png"
          }
        ]
      },
      {
        title: 'Sub Step 7: Create Purchase Funnel in Studio',
        description: 'Now that your package picker content is defined, its time to build the visual purchase flow using the Funnel Designer Studio. This tool allows you to assemble the entire user journey, from selecting a plan to completing the purchase.',
        keyPoints: [
          'Click on **"Create New Funnel"** and choose your preferred option. We highly recommend choosing the option to start with a basic template.',
          'Once you choose it, select the relevant pages you wish your purchase funnel will have: **Package Picker**, **Cycle Selection**, **Checkout**, and **Success Page**. Once you finish, click on **"Create Funnel"**.',
          'Now you will be directed to the editor, where you can drag and drop the UI components as you wish.',
          'We remind you that keys are set in the Dealer (the page before).',
          'You can click on **"Preview"** to review how your setup will look to users.'
        ],
        dynamoLink: {
          description: 'Access Funnel Designer Studio to create your purchase flow',
          url: 'https://funnel-designer-studio.wixapps.net/',
          buttonText: 'Open Funnel Designer Studio'
        },
        translationLibrarySection: {
          title: 'Translation Library Setup',
          description: 'Before building your funnel, ensure you\'ve set up the **Translation Library** in the Dealer. This allows you to manage all text content centrally and support multiple languages.\n\n**Important:** The Translation Library must be configured in Dealer before you start building in Studio, as the UI components will pull text from these translations.',
          videoUrl: 'https://www.youtube.com/embed/VQ_example_translation'
        },
        
      },
      {
        title: 'Step 8: QA Your Offering',
        description: 'Once the funnel is ready, it\'s time for QA! Test your complete offering end-to-end to ensure everything works correctly before launch.',
        isQAStep: true,
        qaSteps: [
          {
            step: 1,
            title: 'Implement Funnel for Testing',
            description: 'Click on **"Implement Funnel"** in the Funnel Designer Studio. You will see two options:',
            options: [
              {
                number: 1,
                title: 'Link to production (for testing)',
                description: 'Choose this option for QA testing',
                recommended: true
              },
              {
                number: 2,
                title: 'Use the funnel guide and implement it in your page',
                description: 'Not for QA - this is for actual implementation',
                recommended: false
              }
            ],
            action: 'Select Option 1: Link to production for testing'
          },
          {
            step: 2,
            title: 'Get QA Coupon',
            description: 'Go to the Premium Coupons page to generate a test coupon for your QA process.',
            link: 'https://bo.wix.com/premium-coupons',
            linkText: 'Get QA Coupon'
          },
          {
            step: 3,
            title: 'Test Purchase Flow',
            description: 'Use the QA coupon to complete a full test purchase and verify the entire flow.',
            tasks: [
              'Navigate through the package picker',
              'Select a plan and proceed to checkout',
              'Apply the QA coupon',
              'Complete the purchase',
              'Verify confirmation emails are sent'
            ]
          },
          {
            step: 4,
            title: 'Verify Features & Events',
            description: 'Ensure all features are properly enabled and subscription events are triggered.',
            tasks: [
              'Check that purchased features are accessible',
              'Verify feature eligibility through Features Manager',
              'Confirm subscription events are firing correctly',
              'Test feature quotas and limits'
            ]
          },
          {
            step: 5,
            title: 'Test Edge Cases',
            description: 'Try different scenarios to ensure robust handling of various situations.',
            tasks: [
              'Test with different user segments and targeting',
              'Try failed payment scenarios',
              'Test cancellation flow',
              'Verify mobile responsiveness',
              'Check different billing cycles'
            ]
          }
        ],
        keyPoints: [
          '**Choose "Link to production"** option when implementing funnel for QA',
          '**Get QA coupon** from bo.wix.com/premium-coupons for testing',
          '**Test complete flow** from package picker to post-purchase',
          '**Verify all emails** are sent correctly',
          '**Check feature access** and subscription events',
          '**Test edge cases** like failed payments and cancellations'
        ]
      },
      {
        title: 'Step 9: Implementation & Go Live',
        description: 'Yay! It\'s time to go live. Now you can fetch your funnel link or render the funnel in your product using an ID.',
        isMilestone: true,
        keyPoints: [
          '**Fetch your funnel link** from the Funnel Designer Studio',
          '**Render the funnel** in your product using the funnel ID',
          '**Verify audience targeting** is set correctly in the Dealer',
          '**Set up Petri test** (A/B test) if needed for gradual rollout',
          '**Monitor performance** after launch to ensure everything works smoothly'
        ],
        finalChecklist: [
          {
            title: 'Audience Configuration',
            description: 'Double-check that your audience targeting in Dealer is configured correctly for your launch.',
            icon: 'Users'
          },
          {
            title: 'Petri Test Setup',
            description: 'If you want to do a gradual rollout, set up a Petri test to control who sees the new offering.',
            icon: 'AlertCircle'
          },
          {
            title: 'Monitoring Ready',
            description: 'Ensure you have monitoring and analytics in place to track performance post-launch.',
            icon: 'Eye'
          }
        ],
        contacts: [
          'Launch Support: @PlatformTeam',
          'Technical Issues: @TechSupport'
        ]
      }
    ]
  },

  support: {
    id: 'support',
    title: 'Support & Resources',
    category: 'Help & Community',
    steps: [
      {
        title: 'We Are Here to Help',
        description: "If you need assistance at any point, please reach out. We also welcome your feedback to improve the platform.",
        keyPoints: [
          'Contact #Premium_Platform_support for any questions.',
          'Your needs lead the way—felt free to share your thoughts.',
          'We are available for you on the #premium_platform_support Slack channel.',
          'Feel free to create products, features, and boost your offering!'
        ]
      },
      {
        title: 'Key Points of Contact',
        description: 'Here are the primary contacts for different aspects of the platform onboarding process.',
        keyPoints: [
          'Product Operations: Gil Gershon',
          'Platform UX: Roy Shlain',
          'Purchase PM: Yael Levy',
          'Delivery PM: Dafna Piotro',
          'Platform QA: Vered Li Dobrovsky'
        ]
      }
    ]
  }
};
