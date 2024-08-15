import React, { useState } from 'react';

const JobSearchApp = () => {
  const [sites, setSites] = useState([
    'jobs.lever.co',
    'boards.greenhouse.io',
    'jobs.ashbyhq.com',
    'jobs.jobvite.com',
    'myworkdayjobs.com',
    'careers.jobscore.com',
    'ats.comparably.com'
  ]);

  const [jobTitle, setJobTitle] = useState('');
  const [technology, setTechnology] = useState('');

  const handleSearch = () => {
    sites.forEach((site) => {
      const query = `site:${site} "${jobTitle}" "${technology}" "remote" -"remote in the US"`;
      const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
      window.open(url, '_blank');
    });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Job Search Tool</h1>
      <textarea
        rows={7}
        value={sites.join('\n')}
        readOnly
        style={{ width: '100%', marginBottom: '20px' }}
      />
      <div>
        <input
          type="text"
          placeholder="Nome do cargo"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          style={{ width: '100%', marginBottom: '10px' }}
        />
        <input
          type="text"
          placeholder="Tecnologia"
          value={technology}
          onChange={(e) => setTechnology(e.target.value)}
          style={{ width: '100%', marginBottom: '20px' }}
        />
        <button onClick={handleSearch} style={{ width: '100%' }}>
          Buscar
        </button>
      </div>
    </div>
  );
};

export default JobSearchApp;
