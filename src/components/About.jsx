const About = () => {
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-900">
      <div className="section-container">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">About Me</h2>
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            I'm a passionate web developer with expertise in modern frontend technologies like React, 
            Tailwind CSS, and Vite. I enjoy creating responsive, user-friendly interfaces that provide 
            excellent user experiences.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            With a strong background in computer science and a keen eye for design, I bring a unique 
            perspective to my projects. I'm committed to writing clean, maintainable code and staying 
            up-to-date with the latest industry trends and best practices.
          </p>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">My Skills</h3>
            <div className="flex flex-wrap gap-2">
              {['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Node.js', 'Git', 'Vite'].map((skill) => (
                <span key={skill} className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;