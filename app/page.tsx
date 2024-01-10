import Image from 'next/image'
import PageSection from './components/pagesection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <PageSection>Test 1</PageSection>
      <PageSection>Test 2</PageSection>
      <PageSection>Test 3</PageSection>
      <PageSection>Test 4</PageSection>
      <PageSection>Test 5</PageSection>
      <PageSection>Test 6</PageSection>
      <PageSection>Test 7</PageSection>
      <PageSection>Test 8</PageSection>
    </main>
  )
}
