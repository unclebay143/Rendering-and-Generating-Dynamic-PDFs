export default function Home() {
  return (
    <main className='flex flex-col min-h-screen items-center justify-between py-5 px-24'>
      <h3 className='text-center md:text-lg mb-4 font-medium text-slate-700'>
        View PDF using Iframe
      </h3>
      <iframe
        src='codewithunclebigbay.pdf'
        width='500'
        height='300'
        className='w-full min-h-screen'
      />
    </main>
  );
}
