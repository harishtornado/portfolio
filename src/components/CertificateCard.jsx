const CertificateCard = ({ title, image }) => {
  return (
    <div className="certificate-card">
      <a href={image} target="_blank"><img src={image} alt={`${title} Certificate`} className="certificate-image" /></a>
      <h3 className="certificate-title">{title}</h3>
    </div>
  );
};

export default CertificateCard;
