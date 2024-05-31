import React, { useState } from 'react';
import axios from 'axios';


function Scheduler() {
  const [post, setPost] = useState({ text: '', platform: 'twitter' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send post data to API
    axios.post('/api/schedule', post)
      .then(response => {
        alert('Post scheduled successfully');
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="scheduler">
      <h2>Schedule a Post</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={post.text}
          onChange={(e) => setPost({ ...post, text: e.target.value })}
          placeholder="Write your post..."
        />
        <select
          value={post.platform}
          onChange={(e) => setPost({ ...post, platform: e.target.value })}
        >
          <option value="twitter">Twitter</option>
          <option value="facebook">Facebook</option>
          <option value="instagram">Instagram</option>
        </select>
        <button type="submit">Schedule Post</button>
      </form>
    </div>
  );
}

export default Scheduler;
