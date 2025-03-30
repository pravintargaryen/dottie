'use client';

import { useState } from 'react';
import { 
  SetupEndpoints,
  AuthEndpoints,
  AssessmentEndpoints,
  UserEndpoints,
  ChatEndpoints
} from './test-endpoint-table';
import { AuthStatus } from './page-components';
import { authApi } from '../../api/auth';
import { LoginInput } from '../../api/auth/utils/types';

export default function TestPage() {
  const environment = process.env.NODE_ENV || 'development';
  
  const handleLogin = async (credentials: LoginInput) => {
    try {
      await authApi.login(credentials);
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const handleLogout = () => {
    authApi.logout();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Now testing in {environment.toUpperCase()}
        </h1>
        
        {/* Authentication status and login */}
        <AuthStatus 
          onLogin={handleLogin} 
          onLogout={handleLogout} 
        />
        
        {/* Render all endpoint category components */}
        <SetupEndpoints />
        <AuthEndpoints />
        <AssessmentEndpoints />
        <UserEndpoints />
        <ChatEndpoints />
      </div>
    </div>
  );
} 