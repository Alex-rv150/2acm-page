export default function Statistics() {
    return (
      <section className="container mx-auto py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          <div className="bg-white rounded-lg shadow-md dark:bg-gray-950 dark:text-gray-50 p-6 md:p-8 lg:p-10 flex flex-col items-center justify-center">
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold">1.2K</span>
            <p className="text-gray-500 dark:text-gray-400 mt-2 md:mt-3 lg:mt-4">Total Users</p>
          </div>
          <div className="bg-white rounded-lg shadow-md dark:bg-gray-950 dark:text-gray-50 p-6 md:p-8 lg:p-10 flex flex-col items-center justify-center">
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold">98%</span>
            <p className="text-gray-500 dark:text-gray-400 mt-2 md:mt-3 lg:mt-4">Satisfaction Rate</p>
          </div>
          <div className="bg-white rounded-lg shadow-md dark:bg-gray-950 dark:text-gray-50 p-6 md:p-8 lg:p-10 flex flex-col items-center justify-center">
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold">$2.4M</span>
            <p className="text-gray-500 dark:text-gray-400 mt-2 md:mt-3 lg:mt-4">Total Revenue</p>
          </div>
        </div>
      </section>
    )
  }