import Certicate from "../components/Certicate";

const CertificatesPage = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-y-6">
      <Certicate
        desc="FrontEnd Development"
        image="/frontImage.png"
        link="https://coursera.org/share/0796de65bd63c3539fea3837c52855f9"
      />
      <Certicate
        desc="BackEnd Development"
        image="/backImage.png"
        link="https://coursera.org/share/5fe886ea995bb985494522d753ed5d24"
      />
      <Certicate
        desc="Fullstack Development"
        image="/udemyImage.png"
        link="/udemy.pdf"
      />
      <Certicate
        desc="Python Development"
        image="/pythonImage.png"
        link="https://coursera.org/share/08781b87660ebc4cd9d653a6e6d1608a"
      />
      <Certicate
        desc="Cloud Fundamentals"
        image="/cloudImage.png"
        link="https://coursera.org/share/a9fe308f66c1430c9beeb8a8ae05417c"
      />
    </div>
  );
};

export default CertificatesPage;
