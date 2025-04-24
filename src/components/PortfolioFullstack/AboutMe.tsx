export const AboutMe = () => {
  return (
    <div className="flex flex-col !py-16 !px-64 gap-8">
      <div className="w-full text-center font-bold">ABOUT ME</div>
      <div className="bg-custom-black !p-2 w-fit rounded-lg">
        <em>
          “Great things in business are never done by one person. They’re done
          by a team of people.”
        </em>
        <br />
        <div className="text-title-orange font-bold">Steve Jobs.</div>
      </div>
      <div>
        👋 Hi there! I'm a&nbsp;
        <span className="text-title-orange font-semibold text-lg">
          Full Stack Developer
        </span>
        &nbsp;with a passion for turning ideas into intuitive and scalable web
        applications.
        <br />
        With hands-on experience across the entire stack, I love:
        <ul className="text-white space-y-2 my-4 ml-8">
          <li>🚀 Crafting seamless user interfaces</li>
          <li>🛠️ Writing clean, maintainable backend code</li>
          <li>🤝 Collaborating in teams to build impactful products</li>
        </ul>
        ✨ I thrive on problem-solving, continuous improvement, and bringing a
        proactive mindset to every project I touch.
      </div>
    </div>
  );
};
