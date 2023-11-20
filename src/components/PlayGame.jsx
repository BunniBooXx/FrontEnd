// In your React component
import React from 'react';

const PlayGamePage = () => {
    return (
        <div>
            {/* Your React components or page content */}
            <iframe
                title="Ren'Py Game"
                src="http://127.0.0.1:8042/index.html"  // Adjust the URL as needed
                width="800"
                height="600"
            />
        </div>
    );
};

export default PlayGamePage;
