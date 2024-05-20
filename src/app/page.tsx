import Header from '@/components/Header';
import Form from '@/components/Form';
import News from '@/components/News';
import ContactInformation from '@/components/ContactInformation';
import Banner from '@/components/Banner';

export default function Home() {
  return (
    <main className="bg-[linear-gradient(73deg, rgba(212,196,196,1) 0%, rgba(209,155,155,0.8786108193277311) 93%)] flex min-h-screen flex-col items-center bg-[rgb(212,196,196)] p-6 ">
      <Header />
      <div className="w-10/12 ">
        <Banner />
        <News />
        <Form />
        <ContactInformation />
      </div>
    </main>
  );
}
