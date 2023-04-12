import React from 'react';

const SinglePeep = (props) => {
    const { username, content, createdAt } = props;
    
    const date = new Date(createdAt);
  const formattedTime = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' });
  const formattedDate = date.toLocaleDateString('en-US', { day: '2-digit', month: 'numeric', year: 'numeric' });

  return (
    <div className="card mb-2">
      <div className="card-body">
        <h4 className="card-title mb-4">{content}</h4>
        <footer className="blockquote-footer">
          {username} {formattedTime}, {formattedDate}
        </footer>
      </div>
    </div>
  );
};

export default SinglePeep;