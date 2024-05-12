import React from 'react';
import { ChatEngine } from 'react-chat-engine';

function Messages() {
  return (
    <div className="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200">
      <ChatEngine
        projectID='e16fe90b-12e0-4968-a2eb-45592c3996a2'
        userName='patient'
        userSecret='secret'
      />
    </div>
  );
}

export default Messages;
