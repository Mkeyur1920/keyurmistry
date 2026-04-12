import React, { useEffect } from "react";
import "./Publications.css";
import PublicationCard from "../components/PublicationCard";
import publications from "../data/publications";

const Publications = () => {
  useEffect(() => {
    document.title = "Publications - Keyur Portfolio";
  }, []);

  return (
    <div className="publications-container">
      <header className="publications-header">
        <h1>Publications</h1>
        <p>Research work and peer-reviewed publication details.</p>
      </header>

      <section className="publications-grid">
        {publications.map((publication) => (
          <PublicationCard key={publication.id} publication={publication} />
        ))}
      </section>
    </div>
  );
};

export default Publications;
