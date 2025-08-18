import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from './components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'
import { Input } from './components/ui/input'
import { Textarea } from './components/ui/textarea'
import { Badge } from './components/ui/badge'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './components/ui/accordion'
import {
  Shield,
  Stethoscope,
  HeartPulse,
  PiggyBank,
  Briefcase,
  Building2,
  CheckCircle,
  Phone,
  Mail,
  ChevronUp,
} from 'lucide-react'

const Section = ({ id, children, className = '' }) => (
  <section id={id} className={`scroll-mt-24 ${className}`}>{children}</section>
)

const Container = ({ children, className = '' }) => (
  <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
)

const Feature = ({ Icon, title, text }) => (
  <div className='flex gap-4'>
    <div className='mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-gray-100'>
      <Icon className='h-5 w-5' />
    </div>
    <div>
      <h4 className='font-semibold'>{title}</h4>
      <p className='text-gray-600 text-sm'>{text}</p>
    </div>
  </div>
)

export default function App() {
  const [submitting, setSubmitting] = useState(false)

  const PHONE = '+1 (555) 555-0199' // TODO: replace with your number
  const EMAIL = 'hello@example.com' // TODO: replace with your email

  function handleContactSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = form.get('name')
    const phone = form.get('phone')
    const email = form.get('email')
    const state = form.get('state')
    const notes = form.get('notes')

    const body = `Name: ${name}%0D%0APhone: ${phone}%0D%0AEmail: ${email}%0D%0AState: ${state}%0D%0ANotes: ${notes}`
    setSubmitting(true)
    window.location.href = `mailto:${EMAIL}?subject=Quote%20Request&body=${body}`
    setTimeout(() => setSubmitting(false), 800)
  }

  return (
    <div className='min-h-screen bg-background text-foreground'>
      {/* Header */}
      <header className='sticky top-0 z-40 w-full border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60'>
        <Container className='flex h-16 items-center justify-between'>
          <a href='#home' className='font-bold tracking-tight'>Grace Insurance Group</a>
          <nav className='hidden gap-6 md:flex'>
            <a href='#plans' className='text-sm text-gray-600 hover:text-black'>Plans</a>
            <a href='#carriers' className='text-sm text-gray-600 hover:text-black'>Carriers</a>
            <a href='#about' className='text-sm text-gray-600 hover:text-black'>About</a>
            <a href='#faq' className='text-sm text-gray-600 hover:text-black'>FAQ</a>
            <a href='#contact' className='text-sm text-gray-600 hover:text-black'>Contact</a>
          </nav>
          <div className='flex items-center gap-2'>
            <a href={`tel:${PHONE.replace(/[^+\d]/g, '')}`} className='inline-flex items-center gap-2 rounded-2xl bg-gray-200 px-3 py-2 text-sm hover:bg-gray-300'>
              <Phone className='h-4 w-4' /> Call
            </a>
            <a href='#contact' className='inline-flex items-center gap-2 rounded-2xl bg-black px-3 py-2 text-sm text-white hover:opacity-90'>
              Get Quotes
            </a>
          </div>
        </Container>
      </header>

      {/* Hero */}
      <Section id='home' className='py-16 sm:py-24'>
        <Container className='grid items-center gap-10 md:grid-cols-2'>
          <div>
            <Badge className='mb-4'>Independent Broker</Badge>
            <h1 className='text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl'>
              Smart health coverage, tailored to you.
            </h1>
            <p className='mt-4 text-gray-600'>
              Compare ACA Marketplace and private plans across major carriers. Fast quotes, clear guidance, and year‑round support for individuals, families, and small businesses.
            </p>
            <div className='mt-6 flex flex-wrap gap-3'>
              <a href='#contact' className='inline-flex items-center gap-2 rounded-2xl bg-black px-5 py-3 text-white'>Request Quotes</a>
              <a href={`mailto:${EMAIL}`} className='inline-flex items-center gap-2 rounded-2xl border border-gray-300 px-5 py-3 hover:bg-gray-50'>
                <Mail className='h-4 w-4' /> Email Me
              </a>
            </div>
            <ul className='mt-6 grid gap-3 text-sm text-gray-600 sm:grid-cols-2'>
              {['Low deductibles & PPO options','HSA‑compatible plans','Licensed, no extra broker fees','Help with subsidies & enrollments'].map((item) => (
                <li key={item} className='flex items-start gap-2'>
                  <CheckCircle className='mt-0.5 h-4 w-4' /> <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='relative'
          >
            <div className='rounded-3xl border bg-card p-6 shadow-sm'>
              <div className='grid gap-6 sm:grid-cols-2'>
                <Feature Icon={Shield} title='Coverage' text='ACA, private PPO, HSA, and supplemental.' />
                <Feature Icon={Stethoscope} title='Networks' text='Confirm doctors & hospitals before you switch.' />
                <Feature Icon={PiggyBank} title='Savings' text='Subsidies, tax‑advantaged options, and bundles.' />
                <Feature Icon={Briefcase} title='Small Biz' text='Group and ICHRA strategies for teams.' />
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Plans */}
      <Section id='plans' className='bg-gray-50 py-16'>
        <Container>
          <h2 className='text-2xl font-bold sm:text-3xl'>Popular plan types</h2>
          <p className='text-gray-600 mt-2'>We’ll compare side‑by‑side so you can see premiums, deductibles, and max out‑of‑pocket before you decide.</p>
          <div className='mt-8 grid gap-6 md:grid-cols-3'>
            {[{
              title: 'ACA Marketplace',
              bullets: [
                'Lower costs with income‑based subsidies',
                'Essential health benefits & $0 preventive care',
                'Great for families and individuals',
              ],
            }, {
              title: 'Private PPO',
              bullets: [
                'Broad networks & out‑of‑state flexibility',
                'HSA‑friendly options available',
                'Ideal for high earners & travelers',
              ],
            }, {
              title: 'Supplemental',
              bullets: [
                'Dental & Vision, Accident, Critical Illness',
                'Bridge gaps and reduce surprise bills',
                'Bundle for extra savings',
              ],
            }].map(({ title, bullets }) => (
              <Card key={title}>
                <CardHeader>
                  <CardTitle className='flex items-center justify-between'>
                    {title}
                    <HeartPulse className='h-5 w-5' />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className='mb-4 grid gap-2 text-sm'>
                    {bullets.map((b) => (
                      <li key={b} className='flex items-start gap-2 text-gray-600'>
                        <CheckCircle className='mt-0.5 h-4 w-4' /> {b}
                      </li>
                    ))}
                  </ul>
                  <a href='#contact' className='block w-full rounded-2xl bg-black px-4 py-3 text-center text-white'>Get quotes</a>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Carriers */}
      <Section id='carriers' className='py-16'>
        <Container>
          <h2 className='text-2xl font-bold sm:text-3xl'>Major carriers we can shop</h2>
          <p className='text-gray-600 mt-2'>Logos for reference only — availability varies by state.</p>
          <div className='mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4'>
            {['Blue Cross Blue Shield','UnitedHealthcare','Cigna','Aetna'].map((name) => (
              <div key={name} className='flex h-24 items-center justify-center rounded-2xl border bg-white text-sm font-medium'>
                {name}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* About */}
      <Section id='about' className='bg-gray-50 py-16'>
        <Container className='grid gap-8 md:grid-cols-2'>
          <div>
            <h2 className='text-2xl font-bold sm:text-3xl'>Why work with an independent broker?</h2>
            <p className='text-gray-600 mt-2'>
              As an independent agency, we compare plans across multiple carriers — saving you time and money. There are no extra fees to use a broker, and you get year‑round support with claims, renewals, and life changes.
            </p>
            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              <Feature Icon={Building2} title='Multiple carriers' text='Shop a wide range of options.' />
              <Feature Icon={Shield} title='Advocacy' text='Help with appeals & claims.' />
              <Feature Icon={Stethoscope} title='Provider fit' text='We’ll verify doctors and hospitals.' />
              <Feature Icon={PiggyBank} title='Cost clarity' text='Up‑front pricing with no surprises.' />
            </div>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Recent client notes</CardTitle>
            </CardHeader>
            <CardContent className='grid gap-4 text-sm text-gray-600'>
              <p>“Dropped our premium by 28% while keeping primary doctor in‑network.”</p>
              <p>“Set up HSA‑eligible plan and explained everything clearly.”</p>
              <p>“Moved our small team to an ICHRA — huge flexibility at renewal.”</p>
            </CardContent>
          </Card>
        </Container>
      </Section>

      {/* FAQ */}
      <Section id='faq' className='py-16'>
        <Container>
          <h2 className='text-2xl font-bold sm:text-3xl'>FAQ</h2>
          <Accordion className='mt-6'>
            <AccordionItem value='item-1'>
              <AccordionTrigger>Do you charge broker fees?</AccordionTrigger>
              <AccordionContent>
                No. We’re paid by carriers. Your premium is the same whether you enroll alone or with our help.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2'>
              <AccordionTrigger>Can you check if my doctor is in‑network?</AccordionTrigger>
              <AccordionContent>
                Yes — we verify providers and prescriptions before enrollment so there are no surprises.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-3'>
              <AccordionTrigger>Do you handle small business plans?</AccordionTrigger>
              <AccordionContent>
                Absolutely. We can compare traditional group plans and reimbursement models like ICHRA.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-4'>
              <AccordionTrigger>When is Open Enrollment?</AccordionTrigger>
              <AccordionContent>
                Typically Nov–Jan for ACA plans. You may also qualify for a Special Enrollment Period after qualifying life events.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Container>
      </Section>

      {/* Contact */}
      <Section id='contact' className='bg-gray-50 py-16'>
        <Container className='grid gap-8 md:grid-cols-2'>
          <div>
            <h2 className='text-2xl font-bold sm:text-3xl'>Request quotes</h2>
            <p className='text-gray-600 mt-2'>Tell us a bit about you. We’ll send plan options and pricing.</p>
            <div className='mt-4 flex flex-wrap gap-3 text-sm'>
              <a href={`tel:${PHONE.replace(/[^+\d]/g, '')}`} className='inline-flex items-center gap-2 underline-offset-4 hover:underline'><Phone className='h-4 w-4' /> {PHONE}</a>
              <span>•</span>
              <a href={`mailto:${EMAIL}`} className='inline-flex items-center gap-2 underline-offset-4 hover:underline'><Mail className='h-4 w-4' /> {EMAIL}</a>
            </div>
          </div>
          <Card>
            <CardContent className='pt-6'>
              <form onSubmit={handleContactSubmit} className='grid gap-4'>
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                  <div>
                    <label htmlFor='name' className='mb-1 block text-sm font-medium'>Full name</label>
                    <Input id='name' name='name' required placeholder='Jane Doe' />
                  </div>
                  <div>
                    <label htmlFor='state' className='mb-1 block text-sm font-medium'>State</label>
                    <Input id='state' name='state' required placeholder='e.g., CO' />
                  </div>
                </div>
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                  <div>
                    <label htmlFor='phone' className='mb-1 block text-sm font-medium'>Phone</label>
                    <Input id='phone' name='phone' type='tel' placeholder='(555) 555‑0199' />
                  </div>
                  <div>
                    <label htmlFor='email' className='mb-1 block text-sm font-medium'>Email</label>
                    <Input id='email' name='email' type='email' required placeholder='you@example.com' />
                  </div>
                </div>
                <div>
                  <label htmlFor='notes' className='mb-1 block text-sm font-medium'>Notes</label>
                  <Textarea id='notes' name='notes' placeholder='Ages, prescriptions, preferred doctors, budget…' />
                </div>
                <p className='text-xs text-gray-600'>
                  By submitting, you agree to receive calls/texts about your inquiry. Message/data rates may apply. You can opt out anytime.
                </p>
                <Button type='submit' className='bg-black text-white hover:opacity-90' disabled={submitting}>{submitting ? 'Sending…' : 'Send request'}</Button>
              </form>
            </CardContent>
          </Card>
        </Container>
      </Section>

      {/* Footer */}
      <footer className='border-t py-10'>
        <Container className='flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center'>
          <p className='text-sm text-gray-600'>
            © {new Date().getFullYear()} Grace Insurance Group. Not affiliated with any government agency. Licensed in: NY, NJ, PA (update as needed). NPN 00000000.
          </p>
          <a href='#home' className='inline-flex items-center gap-2 text-sm underline-offset-4 hover:underline'>
            <ChevronUp className='h-4 w-4' /> Back to top
          </a>
        </Container>
      </footer>
    </div>
  )
}
