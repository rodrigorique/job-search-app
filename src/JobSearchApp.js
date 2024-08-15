import React, { useState, useEffect } from 'react';

const JobSearchApp = () => {
  const [sites, setSites] = useState([
    'jobs.lever.co',
    'boards.greenhouse.io',
    'jobs.ashbyhq.com',
    'jobs.jobvite.com',
    'myworkdayjobs.com',
    'careers.jobscore.com',
    'ats.comparably.com',
  ]);
  const [jobTitle, setJobTitle] = useState('Senior Software Engineer');
  const [technology, setTechnology] = useState('Java');

  useEffect(() => {
    document.title = 'Job Search App - Rodrigo Rique';
  }, []);

  const handleSearch = () => {
    sites.forEach((site) => {
      const query = `site:${site} "${jobTitle}" "${technology}" "remote" -"remote in the US"`;
      const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
      window.open(url, '_blank');
    });
  };

  const handleSitesChange = (event) => {
    const updatedSites = event.target.value.split('\n');
    setSites(updatedSites);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Job Search App</h1>
      <label>
        Lista de Sites:
        <textarea
          value={sites.join('\n')}
          onChange={handleSitesChange}
          rows="7"
          cols="40"
          style={{ display: 'block', margin: '10px 0' }}
        />
      </label>
      <label>
        Nome do Cargo:
        <input
          type="text"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          style={{ display: 'block', margin: '10px 0' }}
        />
      </label>
      <label>
        Tecnologia:
        <input
          type="text"
          value={technology}
          onChange={(e) => setTechnology(e.target.value)}
          style={{ display: 'block', margin: '10px 0' }}
        />
      </label>
      <button onClick={handleSearch}>Buscar</button>

      {}
      <footer style={{ marginTop: '20px', textAlign: 'left' }}>
        <p>Rodrigo Rique</p>
        <p><a href="https://www.linkedin.com/in/rodrigorique/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/rodrigorique/</a></p>
        <p><a href="https://github.com/rodrigorique/job-search-app" target="_blank" rel="noopener noreferrer">https://github.com/rodrigorique/job-search-app</a></p>
      </footer>
    </div>
  );
};

export default JobSearchApp;
