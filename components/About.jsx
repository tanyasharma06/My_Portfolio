import Navbar from "./Navbar";
export default function About() {
  return (
      <section
          id="about"
          className="px-10 w-full flex flex-col lg:flex-row py-20 
                     align-center bg-emerald-200 max-w-5xl mx-auto">
                        <Navbar/>
          <div className="flex-1">
              <img src=
"https://media.geeksforgeeks.org/img-practice/Asset1-1641910145.svg"
                  alt="About"
                  className="w-full h-full bg-cover"/>
          </div>
          <div className="flex-1 flex flex-col justify-center
                          items-center gap-5 px-6">
              <div>
                  <h2 className="text-center text-emerald-500 
                                 text-5xl font-bold">
                      About Me :
                  </h2>
              </div>
              <p font-italic>
                  Welcome to my Profile..
              </p>
              <p>
                  My name is Tanya Sharma,and I am recently 3rd year engineering student in MMMUT,Gorakhpur.I am eager to apply my knowledge 
                  and skills to real-world challenges.Throughout my academic  journey , I have worked on several Projects that showcase my ability to solve problems,learn quickly and 
                  adapt to new technologies .I am excited to continue growing in this field and to make contribute to innovative solutions. Feel free to explore my work and get in touch if you'd like to collaborate or learn more about my journey.
              </p>
          </div>
      </section>
  );
}