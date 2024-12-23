import { UserProfile } from '@clerk/nextjs';
import React from 'react';

function Settings() {
  
  return (
    
    <div>
      <UserProfile routing="path" path="/dashboard/settings" />
    </div>
  );
}

export default Settings;
