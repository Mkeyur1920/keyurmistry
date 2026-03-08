import React from "react";
import "./PublicationCard.css";

const PublicationCard = ({ publication }) => {
  return (
    <article className="publication-card">
      <header className="publication-header">
        <h3>{publication.title}</h3>
        <span className="publication-badge">IEEE</span>
      </header>

      <section className="publication-section">
        <h4>Authors</h4>
        <ul className="authors-list">
          {publication.authors.map((author) => (
            <li key={author.name}>
              <strong>{author.name}</strong>
              <p>{author.affiliation}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="publication-meta-grid">
        <p>
          <strong>Published in:</strong> {publication.publicationVenue}
        </p>
        <p>
          <strong>Date of Conference:</strong> {publication.conferenceDate}
        </p>
        <p>
          <strong>Date Added to IEEE Xplore:</strong> {publication.xploreDate}
        </p>
        <p>
          <strong>Electronic ISBN:</strong> {publication.isbn}
        </p>
        <p>
          <strong>DOI:</strong> {publication.doi}
        </p>
        <p>
          <strong>Publisher:</strong> {publication.publisher}
        </p>
        <p>
          <strong>Conference Location:</strong> {publication.location}
        </p>
      </section>

      <section className="publication-section">
        <h4>Abstract</h4>
        <p className="publication-abstract">{publication.abstract}</p>
      </section>

      <a
        href={publication.ieeeLink}
        target="_blank"
        rel="noopener noreferrer"
        className="publication-link"
      >
        View on IEEE Xplore
      </a>
    </article>
  );
};

export default PublicationCard;
