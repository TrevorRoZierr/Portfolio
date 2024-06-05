import Certificate from "../components/Certificate";

const CertificatesPage = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-y-6">
      <Certificate
        title="FrontEnd Development"
        desc="Coursera - IBM."
        link="https://coursera.org/share/0796de65bd63c3539fea3837c52855f9"
      />
      <Certificate
        title="BackEnd Development"
        desc="Coursera - IBM."
        link="https://coursera.org/share/5fe886ea995bb985494522d753ed5d24"
      />
      <Certificate
        title="Fullstack Development"
        desc="Udemy - Angela Yu."
        link="/udemy.pdf"
      />
      <Certificate
        title="Python Development"
        desc="Coursera - Google."
        link="https://coursera.org/share/08781b87660ebc4cd9d653a6e6d1608a"
      />
      <Certificate
        title="Cloud Fundamentals"
        desc="Coursera - Google."
        link="https://coursera.org/share/a9fe308f66c1430c9beeb8a8ae05417c"
      />
    </div>
  );
};

export default CertificatesPage;
