// src/components/Education.jsx
const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      school: "University Name",
      year: "2018 - 2022",
      description: "Focused on web development, algorithms, and software engineering principles."
    },
    {
      id: 2,
      degree: "Web Development Bootcamp",
      school: "Coding Academy",
      year: "2022",
      description: "Intensive program covering modern web technologies and frameworks."
    }
  ];

  return (
    <section id="education" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Education</h2>
        <div className="space-y-6">
          {educationData.map((item) => (
            <div key={item.id} className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{item.degree}</h3>
                <span className="inline-block bg-primary bg-opacity-10 text-primary px-3 py-1 rounded-full text-sm">
                  {item.year}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-2">{item.school}</p>
              <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-gray-500 dark:text-gray-400">
          More information about projects and experience will be added in future updates.
        </p>
      </div>
    </section>
  );
};

export default Education;