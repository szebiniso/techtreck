import Header from '@/components/Header';
import Form from '@/components/Form';
import News from '@/components/News';

export default function Home() {
  return (
    <main className="bg-[linear-gradient(73deg, rgba(212,196,196,1) 0%, rgba(209,155,155,0.8786108193277311) 93%)] flex min-h-screen flex-col items-center bg-[rgb(212,196,196)] p-6 ">
      <Header />
      <div className="w-10/12 ">
        <div className="mt-20 flex items-center justify-between">
          <div data-aos="fade-left" className="flex-auto">
            <h1 className="mb-4 text-6xl font-bold">TechTrek X</h1>
            <p className="mr-24">
              Experience the pinnacle of mobile technology with the Zenith Ultra
              X. Combining sleek design, unparalleled performance, and
              cutting-edge features, this device is crafted for those who demand
              excellence. Embrace the future with a smartphone that sets new
              standards in innovation and style.
            </p>
            <button className="mt-6 rounded-full border bg-black px-8 py-2 text-white">
              Buy now
            </button>
          </div>
          <img
            data-aos="fade-left"
            className="w-2/3 flex-1"
            src="https://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Picture.png"
            alt="/"
          />
        </div>
        <News />
        <Form />
      </div>
    </main>
  );
}
